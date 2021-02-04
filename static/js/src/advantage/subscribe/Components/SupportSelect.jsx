import React from "react";
import useGetState from "../hooks/useGetState.js";
import Section from "./Section.jsx";
import { useStore, useDispatch } from "../store/useStore.jsx";

function SupportSelect() {
  const {
    currentProduct: { support },
  } = useStore();
  const dispatch = useDispatch();

  const {
    support: { disabled, hidden },
  } = useGetState();

  const handleSupportChange = (e) => {
    dispatch({ type: "SetSupport", value: e.target.value });
  };

  return (
    <Section disabled={disabled} hidden={hidden}>
      <div className="row" onChange={handleSupportChange}>
        <div className="col-12">
          <h2 className="p-heading--three u-no-margin--bottom u-sv2">
            Do you also want tech support?
          </h2>
        </div>

        <div
          className={`col-4 p-card--radio u-no-padding--top u-no-padding--bottom ${
            support === "essential" ? "is-selected" : ""
          }`}
        >
          <input
            autoComplete="off"
            type="radio"
            id="support_one"
            name="support"
            value="essential"
          />
          <label htmlFor="support_one">
            No thanks
            <br />
            <small className="u-text-light">
              Software and security updates only
            </small>
          </label>
        </div>

        <div
          className={`col-4 p-card--radio u-no-padding--top u-no-padding--bottom ${
            support === "standard" ? "is-selected" : ""
          }`}
        >
          <input
            autoComplete="off"
            type="radio"
            id="support_two"
            name="support"
            value="standard"
          />
          <label htmlFor="support_two">
            24 hours, 5 days a week
            <br />
            <small className="u-text-light">Phone and ticket support</small>
          </label>
        </div>

        <div
          className={`col-4 p-card--radio u-no-padding--top u-no-padding--bottom ${
            support === "advanced" ? "is-selected" : ""
          }`}
        >
          <input
            autoComplete="off"
            type="radio"
            id="support_three"
            name="support"
            value="advanced"
          />
          <label htmlFor="support_three">
            24 hours, 7 days a week
            <br />
            <small className="u-text-light">Phone and ticket support</small>
          </label>
        </div>

        <div className="col-12">
          <p>
            <a
              href="/legal/ubuntu-advantage-service-description"
              target="_blank"
            >
              Get details on our tech support response times&nbsp;&rsaquo;
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}

export default SupportSelect;
