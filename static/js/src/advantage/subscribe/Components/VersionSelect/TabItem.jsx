import React from "react";
import PropTypes from "prop-types";

function TabItem({ version, onTabItemClick, isSelected = false, children }) {
  const handleClick = () => {
    onTabItemClick(version);
  };

  return (
    <li className="p-tabs__item" role="presentation">
      <a
        id={`${version}-tab`}
        onClick={handleClick}
        className="p-tabs__link"
        role="tab"
        aria-controls={version}
        aria-selected={isSelected}
      >
        {children}
      </a>
    </li>
  );
}

TabItem.propTypes = {
  version: PropTypes.string.isRequired,
  onTabItemClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  children: PropTypes.children,
};

export default TabItem;
