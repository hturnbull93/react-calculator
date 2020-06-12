import React from "react";
import PropTypes from "prop-types";

const Display = ({ displayValue }) => {
  return <div className="display-container"></div>;
};

Display.propTypes = { displayValue: PropTypes.string.isRequired };

export default Display;
