import React from "react";
import Icon from "../Icon";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ComeBack = ({ text, link, onClick, className }) => {
  const classes = "mb-6 flex gap-[10px] items-center font-ManropeMedium" + (className ? " " + className : "");
  return (
    <>
      {link
        ? (
          <Link to={link} className={classes}>
            <Icon name="arrow-left-30" className="w-[30px] h-[30px]"/>
            <span>{text}</span>
          </Link>
          )
        : (
          <button
            onClick={onClick}
            className={classes}>
            <Icon name="arrow-left-30" className="w-[30px] h-[30px]"/>
            <span>{text}</span>
          </button>
          )
      }
    </>
  );
};

ComeBack.propTypes = {
  text: PropTypes.string,
  link: function(props, propName, componentName) {
    if (
      (!props.link && !props.onClick) || // both link and onClick are missing
      (props.link && props.onClick) // both link and onClick are present
    ) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Only one of link or onClick is required.`
      );
    }
    if (props.link && typeof props.link !== "string") {
      return new Error(
        `Invalid prop ${propName} of type ${typeof props.link} supplied to ${componentName}, expected a string.`
      );
    }
  },
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default ComeBack;
