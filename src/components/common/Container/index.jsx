import React from "react";
import PropTypes from "prop-types";

const Container = ({ children, className }) => {
  const classes = "w-full px-5 mx-auto md:px-0 md:max-w-[668px] xl:max-w-[1170px]" +
    (className ? " " + className : "");
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  className: PropTypes.string
};
export default Container;
