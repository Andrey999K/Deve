import React from "react";
import PropTypes from "prop-types";
// import sprite from "../../../img/sprite.svg";

const Icon = ({ name, className = "w-[24px] h-[24px]" }) => (
  // <svg className={`icon ${className}`}>
  //   <use xlinkHref={`${sprite}/#${name}`} />
  // </svg>
  <div className={className}>Иконка {name}</div>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Icon;
