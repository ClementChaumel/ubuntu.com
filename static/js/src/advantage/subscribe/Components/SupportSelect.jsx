import React, { useState } from "react";

function SupportSelect() {
  const [selectedSupport, setSupport] = useState();

  const handleSupportChange = (e) => {
    setSupport(e.target.value);
  };

  return (
    <section className="p-strip is-shallow js-shop-step--support">
      <div className="row" onChange={handleSupportChange}>
        <div className="col-12">
          <h2 className="p-heading--three u-no-margin--bottom u-sv2">
            Do you also want tech support?
          </h2>
        </div>

        <div
          className={`col-4 p-card--radio u-no-padding--top u-no-padding--bottom ${
            selectedSupport === "essential" ? "is-selected" : ""
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
            selectedSupport === "standard" ? "is-selected" : ""
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
            selectedSupport === "advanced" ? "is-selected" : ""
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
    </section>
  );
}

export default SupportSelect;
