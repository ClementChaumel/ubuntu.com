import React from "react";
import VersionFeatureList from "./VersionFeatureList.jsx";
import TabItem from "./TabItem.jsx";
import { useStore, useDispatch } from "../../store/useStore.jsx";
import useGetState from "../../hooks/useGetState.js";
import Section from "../Section.jsx";

function VersionSelect() {
  const {
    currentProduct: { version },
  } = useStore();
  const dispatch = useDispatch();

  const {
    version: { disabled, hidden },
  } = useGetState();

  const handleVersionSelect = (version) => {
    if (!disabled) {
      dispatch({ type: "SetVersion", value: version });
    }
  };

  return (
    <Section disabled={disabled} hidden={hidden}>
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
              isSelected={version === "20.04"}
            >
              20.04 LTS
            </TabItem>
            <TabItem
              version="18.04"
              onTabItemClick={handleVersionSelect}
              isSelected={version === "18.04"}
            >
              18.04 LTS
            </TabItem>
            <TabItem
              version="16.04"
              onTabItemClick={handleVersionSelect}
              isSelected={version === "16.04"}
            >
              16.04 LTS
            </TabItem>
            <TabItem
              version="14.04"
              onTabItemClick={handleVersionSelect}
              isSelected={version === "14.04"}
            >
              14.04 LTS
            </TabItem>
            <TabItem
              version="other"
              onTabItemClick={handleVersionSelect}
              isSelected={version === "other"}
            >
              Other
            </TabItem>
          </ul>
        </nav>

        <div className="col-10">
          {version !== "other" ? (
            <VersionFeatureList version={version} />
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
    </Section>
  );
}

export default VersionSelect;
