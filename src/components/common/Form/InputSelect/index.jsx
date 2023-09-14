import React, { useContext } from "react";
import Select from "react-select";
import Icon from "../../Icon";
import PropTypes from "prop-types";
import { ThemeContext } from "../../../../App";

const InputSelect = ({ value, label, options, name, className, onChange, placeholder }) => {
  const { darkTheme } = useContext(ThemeContext);
  options = options.map(option => ({ value: option, label: option }));
  const styles = {
    option: (provided, state) => {
      const background = darkTheme ? "#0F0F0F" : "#FFFFFF";
      const borderTop = `solid 1px ${darkTheme ? "#8E8E93" : "#0F0F0F"}`;
      const color = darkTheme ? "#FFFFFF" : "#0F0F0F";
      return {
        ...provided,
        background,
        borderTop,
        color,
        borderRadius: "0px",
        padding: "12px",
        cursor: "pointer"
      };
    },
    menu: (provided, state) => {
      const background = darkTheme ? "#0F0F0F" : "#FFFFFF";
      return {
        ...provided,
        background,
        opacity: state.isFocused ? "0" : "1",
        transition: "1s",
        boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.1)",
        borderTopRightRadius: "0px",
        borderTopLeftRadius: "0px",
        borderBottomRightRadius: "10px",
        borderBottomLeftRadius: "10px",
        zIndex: "999",
        marginTop: "-5px"
      };
    },
    control: (provided, state) => {
      const borderColor = state.isFocused ? "#ffffff" : "#ffffff";
      const boxShadow = state.isFocused ? "none" : "none";
      const background = darkTheme ? "#0F0F0F" : "#FFFFFF";
      const color = darkTheme ? "#FFFFFF" : "#0F0F0F";
      return {
        ...provided,
        background,
        borderColor,
        boxShadow,
        color,
        borderTopRightRadius: "10px",
        borderTopLeftRadius: "10px",
        padding: "7px",
        border: "none",
        cursor: "pointer",
        ":hover": {
          borderColor: "#ffffff"
        }
      };
    },
    indicatorSeparator: () => ({
      display: "none"
    }),
    input: (provided, state) => {
      const color = darkTheme ? "#FFFFFF" : "#0F0F0F";
      return {
        ...provided,
        color
      };
    },
    singleValue: (provided) => {
      const color = darkTheme ? "#FFFFFF" : "#0F0F0F";
      return {
        ...provided,
        color
      };
    }
  };
  const handleChange = (target) => {
    onChange({ name, value: target.value });
  };
  return (
    <div className={className}>
      <label className="flex flex-col gap-2">
        <span className="font-ManropeMedium">{label}</span>
        <Select
          value={value ? { value, label: value } : null}
          onChange={handleChange}
          components={{ DropdownIndicator: (props) => <Icon name="arrow-left-circle" className="-rotate-90 w-6 h-6" {...props} /> }}
          styles={styles}
          options={options}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};

InputSelect.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default InputSelect;
