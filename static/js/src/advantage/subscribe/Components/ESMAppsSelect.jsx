import React from "react";
import { Input, Link } from "@canonical/react-components";
import Image from "./Image.jsx";
import { useDispatch, useStore } from "../store/useStore.jsx";
import useGetState from "../hooks/useGetState.js";
import Section from "./Section.jsx";

function ESMAppsSelect() {
  const {
    currentProduct: { ESMApps },
  } = useStore();
  const dispatch = useDispatch();

  const {
    ESMApps: { disabled, hidden },
  } = useGetState();

  if (hidden) {
    return <></>;
  }

  const handleCheck = (e) => {
    dispatch({ type: "SetESMApps", value: e.target.checked });
  };

  return (
    <Section disabled={disabled} hidden={hidden}>
      <div className="row">
        <div className="col-12">
          <h2 className="p-heading--three u-no-margin--bottom u-sv2">
            New: Extended Security Maintenance for Applications
          </h2>
        </div>

        <div className="col-2 u-align--center u-hide--small u-vertically-center">
          <Image
            url="https://assets.ubuntu.com/v1/92a095cb-Shield-greentick.svg"
            height="70"
            width="59"
          />
        </div>

        <div className="col-10" style={{ paddingLeft: "1.1rem" }}>
          <p className="u-no-margin--bottom">
            ESM Apps, for Ubuntu 16.04 18.04 and 20.04 LTS, extends security
            updates to{" "}
            <Link external href="https://packages.ubuntu.com/">
              all official Ubuntu packages
            </Link>{" "}
            for ten years after release.
          </p>
          <Input
            type="checkbox"
            id="ESMApps"
            label="Include ESM Apps in my plan"
            checked={ESMApps}
            onChange={handleCheck}
            disabled={disabled}
          />
        </div>
      </div>
    </Section>
  );
}

export default ESMAppsSelect;
