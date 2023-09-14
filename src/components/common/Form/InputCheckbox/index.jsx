import React from "react";
import "./Inputcheckbox.scss";
import PropTypes from "prop-types";

const InputCheckbox = ({ checked, onChange, label, name }) => {
  return (
    <div className="flex gap-2 items-center">
      <input
        type="checkbox"
        className="custom-checkbox"
        id={name}
        name={name}
        value={checked}
        onChange={onChange}
      />
      {!!label && <label htmlFor={name}>{label}</label>}
    </div>
  );
};

InputCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  name: PropTypes.string
};

export default InputCheckbox;
