import React from "react";
import PropTypes from "prop-types";

const CardWrapper = ({ className, children, ...attr }) => {
  const classes = "rounded-[20px] p-5 bg-bgGray duration-300 dark:bg-bgGrayDark w-full flex flex-col gap-3 md:gap-4" + (className ? " " + className : "");
  return (
    <div className={classes} {...attr}>{children}</div>
  );
};

CardWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default CardWrapper;
