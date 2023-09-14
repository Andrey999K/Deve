import React from "react";
import PropTypes from "prop-types";
import Icon from "../../Icon";

const Input = ({ value, label, name, className, disabled, onChange, error, ...attr }) => {
  const style = {
    borderWidth: "1px",
    borderColor: "transparent"
  };
  let icon = "";
  if (error) {
    if (error === "error") {
      icon = "cross-error";
      style.borderColor = "#EF4949";
    } else if (error === "success") {
      icon = "check-mark";
      style.borderColor = "#2BB939";
    }
  }
  const classes = "w-full rounded-[10px] p-4 bg-white dark:bg-blackDark " +
  (className ? " " + className : "") + (disabled ? " text-graySecond" : "");
  const inputStyles = Object.assign({}, style, {
    outline: "none",
    borderStyle: "solid",
    "&:focus, &:focusWithin": {
      borderColor: "blue !important"
    }
  });
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  const handleFocus = (e) => {
    e.target.style.borderColor = "#1F1F21";
  };
  const handleBlur = (e) => {
    e.target.style.borderColor = style.borderColor;
  };
  return (
    <div className="w-full">
      <label htmlFor={name} className="font-ManropeMedium">{label}</label>
      <div className="relative mt-[10px]">
        <input
          value={value}
          onChange={handleChange}
          className={classes}
          type="text"
          name={name}
          id={name}
          disabled={disabled}
          style={inputStyles}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...attr}
        />
        {!!error && (
          <div className="absolute right-[14px] top-4">
            <Icon name={icon} className="w-5 h-5" />
          </div>
        )}
      </div>
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  error: PropTypes.string
};

export default Input;
