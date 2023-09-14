import React from "react";
import PropTypes from "prop-types";
import Icon from "../../Icon";

const InputAuth = ({ value, onChange, name, type, placeholder, className, error, innerRef }) => {
  const style = {
    borderWidth: "1px",
    borderColor: "#8E8E93"
  };
  if (error) {
    style.borderWidth = "2px";
    switch (error.type) {
      case "warning":
        style.borderColor = "#FF7043";
        break;
      case "error":
        style.borderColor = "#FF4343";
        break;
    }
  }
  const classes = `rounded-[10px] ${error ? "p-[14px]" : "p-[15px]"} border-[1px] border-solid h-[52px] w-full dark:bg-bgGrayDark dark:focus:bg-bgGrayDark ` +
    (className ? " " + className : "");
  const inputStyles = Object.assign({}, style, {
    outline: "none",
    "&:focus, &:focusWithin": {
      borderColor: "blue !important",
      borderWidth: "2px !important"
    }
  });
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  const handleFocus = (e) => {
    const input = e.target;
    input.style.borderWidth = "2px";
    input.style.borderColor = "#1F1F21";
    input.classList.remove("p-[15px]");
    input.classList.add("p-[14px]");
  };
  const handleBlur = (e) => {
    const input = e.target;
    input.style.borderWidth = style.borderWidth;
    input.style.borderColor = style.borderColor;
    input.classList.remove("p-[14px]");
    input.classList.add(`p-[${error ? 14 : 15}px]`);
  };
  return (
    <div className="w-full">
      <input
        id={name}
        value={value}
        onChange={handleChange}
        type={type}
        name={name}
        placeholder={placeholder}
        className={classes}
        style={inputStyles}
        onFocus={handleFocus}
        onBlur={handleBlur}
        // style={error && { borderColor: color, borderWidth: "2px" }}
        ref={innerRef}
      />
      {error && error.message !== "" && (
        <div
          className={`text-[${style.borderColor}] font-medium font-ManropeMedium flex gap-[10px] mt-[10px]`}
          style={{ color: style.borderColor }}
        >
          <Icon name="warning" />
          <span>{error.message}</span>
        </div>
      )}
    </div>
  );
};

InputAuth.defaultProps = {
  type: "text"
};

InputAuth.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }),
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ])
};

export default InputAuth;
