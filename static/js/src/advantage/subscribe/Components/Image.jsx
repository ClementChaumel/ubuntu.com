import React from "react";
import PropTypes from "prop-types";

function Image({ url, width, height, alt = "", loading = "auto", ...rest }) {
  const prefix =
    "https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,";

  return (
    <img
      src={`${prefix}w_${width},h_${height}/${url}`}
      srcSet={`${prefix}w_${width * 2},h_${height * 2}/${url} 2x`}
      width={width}
      height={height}
      alt={alt}
      loading={loading}
      {...rest}
    />
  );
}

Image.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string,
  loading: PropTypes.oneOf(["lazy", "eager", "auto"]),
};

export default Image;
