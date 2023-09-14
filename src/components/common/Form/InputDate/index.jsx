import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { format, parse } from "date-fns";
import { ru } from "date-fns/locale";

const InputDate = forwardRef(function InputDate({ value, onClick, onChange, label, className }, ref) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(e);
  };
  const handleChange = (e) => {
    const formattedDate = format(parse(e.target.value, "yyyy-MM-dd", new Date()), "dd.MM.yyyy", { locale: ru });
    onChange(formattedDate);
  };
  return (
    <label className={className}>
      {!!label && <span className="font-ManropeMedium">{label}</span>}
      <input
        className="p-4 rounded-[10px] dark:text-white dark:bg-blackDark"
        type="date"
        value={value ? format(parse(value, "dd.MM.yyyy", new Date()), "yyyy-MM-dd") : ""}
        onClick={handleClick}
        onChange={handleChange}
        ref={ref}
      />
    </label>
  );
});

InputDate.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func
};

export default InputDate;
