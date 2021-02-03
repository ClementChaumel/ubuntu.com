import React from "react";
import { Input } from "@canonical/react-components";
import Image from "./Image.jsx";
import { useDispatch, useStore } from "../store/useStore.jsx";

function OtherSoftwareSelect() {
  const {
    currentProduct: {
      otherSoftware: { securityUpdates, KVMDrivers },
    },
  } = useStore();
  const dispatch = useDispatch();

  const handleSecurityUpdateCheck = () => {
    dispatch({
      type: "SetOtherSoftware",
      value: { securityUpdates: !securityUpdates, KVMDrivers: KVMDrivers },
    });
  };
  const handleKVMDriversCheck = () => {
    dispatch({
      type: "SetOtherSoftware",
      value: { securityUpdates: securityUpdates, KVMDrivers: !KVMDrivers },
    });
  };

  return (
    <section className="p-strip is-shallow">
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
            onClick={handleSecurityUpdateCheck}
          />
          <Input
            type="checkbox"
            id="KVMDrivers"
            label="Certified Windows drivers for KVM guests"
            checked={KVMDrivers}
            onClick={handleKVMDriversCheck}
          />
        </div>
      </div>
    </section>
  );
}

export default OtherSoftwareSelect;
