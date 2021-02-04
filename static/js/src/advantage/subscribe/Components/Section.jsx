import React from "react";
import PropTypes from "prop-types";

function Section({ hidden = false, disabled = false, children }) {
  if (hidden) {
    return <></>;
  }

  return (
    <section className={`p-strip is-shallow ${disabled ? "u-disabled" : ""}`}>
      {children}
    </section>
  );
}

Section.propTypes = {
  hidden: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.children,
};

export default Section;
