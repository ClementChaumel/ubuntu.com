import React from "react";
import { Input } from "@canonical/react-components";
import Image from "./Image.jsx";
import { useDispatch, useStore } from "../store/useStore.jsx";
import Section from "./Section.jsx";
import useGetState from "../hooks/useGetState.js";

function OtherSoftwareSelect() {
  const {
    currentProduct: {
      otherSoftware: { securityUpdates, KVMDrivers },
    },
  } = useStore();
  const dispatch = useDispatch();

  const {
    otherSoftware: { hidden, disabled },
  } = useGetState();

  const handleSecurityUpdateCheck = (e) => {
    dispatch({
      type: "SetOtherSoftware",
      value: { securityUpdates: e.target.checked, KVMDrivers: KVMDrivers },
    });
  };
  const handleKVMDriversCheck = (e) => {
    dispatch({
      type: "SetOtherSoftware",
      value: { securityUpdates: securityUpdates, KVMDrivers: e.target.checked },
    });
  };

  return (
    <Section disabled={disabled} hidden={hidden}>
      <div className="row">
        <div className="col-12">
          <h2 className="p-heading--three u-no-margin--bottom u-sv2">
            Do you need any other software or updates?
          </h2>
        </div>

        <div className="col-2 u-align--center u-hide--small u-vertically-center">
          <Image
            url="https://assets.ubuntu.com/v1/c87f3151-Update.svg"
            height="70"
            width="73"
          />
        </div>

        <div className="col-10" style={{ paddingLeft: "1.1rem" }}>
          <Input
            type="checkbox"
            id="securityUpdates"
            label="Security updates for OpenStack, Ceph or MAAS"
            checked={securityUpdates}
            onChange={handleSecurityUpdateCheck}
          />
          <Input
            type="checkbox"
            id="KVMDrivers"
            label="Certified Windows drivers for KVM guests"
            checked={KVMDrivers}
            onChange={handleKVMDriversCheck}
          />
        </div>
      </div>
    </Section>
  );
}

export default OtherSoftwareSelect;
