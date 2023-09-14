import React from "react";
import PropTypes from "prop-types";

const Title = ({ children, className }) => {
  const classes = "text-2xl font-ManropeBold font-bold md:text-[32px] xl:text-4xl" + (className ? " " + className : "");
  return (
    <h2 className={classes}>{children}</h2>
  );
};

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  className: PropTypes.string
};

export default Title;
