import React, { Element } from "react";
import PropTypes from "prop-types";

const Button = ({ children, className, innerRef, ...attr }) => {
  const classes = "font-ManropeMedium flex justify-center items-center rounded-[10px] " +
    "border-solid border-[1px] border-blackSecond w-full " +
    "text-[13px] text-white bg-blackSecond duration-300 dark:bg-blackDark" + (className ? " " + className : "");
  return (
    <button ref={innerRef} className={classes} {...attr}>{children}</button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  className: PropTypes.string,
  innerRef: PropTypes.shape({ current: PropTypes.any })
};

export default Button;
