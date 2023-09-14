import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import Link from "next/link";

const Logo = ({ className }) => {
  const classes = "icon" + (className ? " " + className : "");
  return (
    <Link href="/" >
      <Icon name="logo" className={classes} />
    </Link>
  );
};

Logo.propTypes = {
  className: PropTypes.string
};

export default Logo;
