import React from "react";
import PropTypes from "prop-types";
import versionFeatures from "./versionFeatures.js";

function VersionFeatureList({ version }) {
  const features = versionFeatures[version];

  return (
    <div
      className="p-tabs__content"
      role="tabpanel"
      aria-labelledby={`${version}-tab`}
    >
      <div className="row">
        <div className="col-10">
          <h3 className="p-heading--4">
            For Ubuntu {version}, all UA plans include:
          </h3>
        </div>
      </div>
      <div className="row u-equal-height">
        <div className="col-10">
          <ul className="p-list--ticked u-no-margin--left u-no-padding--left is-split">
            {features.map((feature, index) => {
              return (
                <li
                  className="p-list__item is-ticked"
                  key={`${version}-${index}`}
                  style={{
                    paddingBottom: "0",
                    paddingTop: "0",
                    backgroundPositionY: "0.43rem",
                  }}
                >
                  {feature}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

VersionFeatureList.propTypes = {
  version: PropTypes.oneOf(["20.04", "18.04", "16.04", "14.04"]).isRequired,
};

export default VersionFeatureList;
