import { useEffect, useState } from "react";
import { useStore } from "../store/useStore.jsx";

const enabled = {
  disabled: false,
  hidden: false,
};
const disabled = {
  disabled: true,
  hidden: false,
};
const hidden = {
  disabled: true,
  hidden: true,
};

const getQuantityState = (type) => {
  if (type === "physical" || type === "virtual" || type === "desktop")
    return enabled;
  return disabled;
};

const getVersionState = (type, quantity) => {
  if (
    (type === "physical" || type === "virtual" || type === "desktop") &&
    quantity > 0
  )
    return enabled;
  return disabled;
};

const getESMAppsState = (type, quantity, version) => {
  if (version === "14.04") return hidden;

  if (
    (type === "physical" || type === "virtual" || type === "desktop") &&
    quantity > 0 &&
    version !== "other"
  ) {
    return enabled;
  }
  return disabled;
};

const getOtherSoftwareState = (type, quantity, version) => {
  if (type === "desktop" || version === "14.04") return hidden;

  if (
    (type === "physical" || type === "virtual") &&
    quantity > 0 &&
    version !== "other"
  ) {
    return enabled;
  }
  return disabled;
};

const getSupportStatut = (type, quantity, version, ESMApps) => {
  if (type === "desktop" && ESMApps) return hidden;

  if (
    (type === "physical" || type === "virtual" || type === "desktop") &&
    quantity > 0 &&
    version !== "other"
  )
    return enabled;
  return disabled;
};

function useGetState() {
  const {
    currentProduct: { type, quantity, version, ESMApps },
  } = useStore();

  const [quantityState, setQuantityState] = useState(getQuantityState(type));
  const [versionState, setVersionState] = useState(
    getVersionState(type, quantity)
  );
  const [ESMAppsState, setESMAppsState] = useState(
    getESMAppsState(type, quantity, version)
  );
  const [otherSoftwareState, setOtherSoftwareState] = useState(
    getOtherSoftwareState(type, quantity, version)
  );
  const [supportState, setSupportState] = useState(
    getSupportStatut(type, quantity, ESMApps)
  );

  useEffect(() => {
    setQuantityState(getQuantityState(type));
    setVersionState(getVersionState(type, quantity));
    setESMAppsState(getESMAppsState(type, quantity, version));
    setOtherSoftwareState(getOtherSoftwareState(type, quantity, version));
    setSupportState(getSupportStatut(type, quantity, version, ESMApps));
  }, [type, quantity, version, ESMApps]);

  return {
    type: enabled,
    quantity: quantityState,
    version: versionState,
    ESMApps: ESMAppsState,
    otherSoftware: otherSoftwareState,
    support: supportState,
  };
}

export default useGetState;
