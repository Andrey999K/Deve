import React from "react";
import PropTypes from "prop-types";

const CardTitle = ({ children }) => {
  return (
    <h3 className="text-xl font-ManropeSemiBold font-bold md:text-2xl">{children}</h3>
  );
};

CardTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default CardTitle;
