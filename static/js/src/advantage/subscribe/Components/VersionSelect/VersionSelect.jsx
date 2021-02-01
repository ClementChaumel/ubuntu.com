import React, { useState } from "react";
import VersionFeatureList from "./VersionFeatureList.jsx";
import TabItem from "./TabItem.jsx";

function VersionSelect() {
  const [selectedVersion, setSelectedVersion] = useState("20.04");

  const handleVersionSelect = (version) => {
    setSelectedVersion(version);
  };

  return (
    <section className="p-strip is-shallow js-shop-step--version">
      <div className="js-tab-container">
        <div className="row">
          <div className="col-12">
            <h2 className="p-heading--3 u-no-margin--bottom u-sv2">
              What Ubuntu version are you running?
            </h2>
          </div>
        </div>

        <div className="row p-tabs--vertical">
          <nav className="col-2">
            <ul className="p-tabs__list u-no-margin--bottom" role="tablist">
              <TabItem
                version="20.04"
                onTabItemClick={handleVersionSelect}
                isSelected={selectedVersion === "20.04"}
              >
                20.04 LTS
              </TabItem>
              <TabItem
                version="18.04"
                onTabItemClick={handleVersionSelect}
                isSelected={selectedVersion === "18.04"}
              >
                18.04 LTS
              </TabItem>
              <TabItem
                version="16.04"
                onTabItemClick={handleVersionSelect}
                isSelected={selectedVersion === "16.04"}
              >
                16.04 LTS
              </TabItem>
              <TabItem
                version="14.04"
                onTabItemClick={handleVersionSelect}
                isSelected={selectedVersion === "14.04"}
              >
                14.04 LTS
              </TabItem>
              <TabItem
                version="other"
                onTabItemClick={handleVersionSelect}
                isSelected={selectedVersion === "other"}
              >
                Other
              </TabItem>
            </ul>
          </nav>

          <div className="col-10">
            {selectedVersion !== "other" ? (
              <VersionFeatureList version={selectedVersion} />
            ) : (
              <div
                id="other"
                className="p-tabs__content"
                role="tabpanel"
                aria-labelledby="other-tab"
              >
                <div className="row">
                  <div className="col-10">
                    <span>
                      Ubuntu Advantage is available only for Ubuntu 20.04 LTS,
                      18.04 LTS, 16.04 LTS, and 14.04 ESM.
                      <br />
                      You can:
                    </span>
                  </div>
                </div>

                <div className="row u-equal-height">
                  <div className="col-5">
                    <ul>
                      <li>
                        <a href="/tutorials/tutorial-upgrading-ubuntu-desktop#1-before-you-start">
                          Upgrade to a supported version
                        </a>
                      </li>
                      <li>
                        <a href="/support/community-support">
                          Explore community support options
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VersionSelect;
