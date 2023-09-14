import React, { useRef } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import InputDate from "../InputDate";
import PropTypes from "prop-types";
import ru from "date-fns/locale/ru";
import "./InputDatePicker.scss";

registerLocale("ru", ru);

function CustomHeader({ date, decreaseMonth, increaseMonth }) {
  const formatDate = (date) => {
    const massDate = date.toLocaleString("ru-RU", { month: "long", year: "numeric" }).replace(" г.", "").split(" ");
    return `${massDate[0].charAt(0).toUpperCase() + massDate[0].slice(1)}, ${massDate[1]}`;
  };
  return (
    <div className="flex justify-between px-6">
      <button onClick={decreaseMonth}>
        <FaAngleLeft />
      </button>
      <span>
        {formatDate(date)}
      </span>
      <button onClick={increaseMonth}>
        <FaAngleRight />
      </button>
    </div>
  );
}

CustomHeader.propTypes = {
  date: PropTypes.object.isRequired,
  decreaseMonth: PropTypes.func.isRequired,
  increaseMonth: PropTypes.func.isRequired
};

const InputDatePicker = ({ valueFrom, onChangeFrom, valueTo, onChangeTo }) => {
  const inputDateRef = useRef(null);
  const handleChange = (date, e, onChange) => {
    e.preventDefault();
    if (!e.target.classList.contains("react-datepicker__day--outside-month")) {
      onChange(date);
    }
  };
  return (
    <div className="flex gap-4 text-[13px]">
      <div className="w-full">
        <DatePicker
          selected={valueFrom}
          onChange={(date, e) => handleChange(date, e, onChangeFrom)}
          locale="ru"
          dateFormat="dd.MM.yyyy"
          selectsStart
          startDate={valueFrom}
          endDate={valueTo}
          maxDate={valueTo}
          nextMonthButtonLabel={<FaAngleRight />}
          previousMonthButtonLabel={<FaAngleLeft />}
          customInput={
            <InputDate
              label="От"
              name="from"
              className="flex flex-col gap-2 w-full !hover:cursor-pointer"
              onChange={value => onChangeFrom(value)}
              ref={inputDateRef}
            />
          }
          renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => {
            return <CustomHeader date={date} decreaseMonth={decreaseMonth} increaseMonth={increaseMonth} />;
          }}
        />
      </div>
      <div className="w-full">
        <DatePicker
          selected={valueTo}
          onChange={(date, e) => handleChange(date, e, onChangeTo)}
          locale="ru"
          dateFormat="dd.MM.yyyy"
          selectsEnd
          startDate={valueFrom}
          endDate={valueTo}
          minDate={valueFrom}
          nextMonthButtonLabel={<FaAngleRight />}
          previousMonthButtonLabel={<FaAngleLeft />}
          customInput={
            <InputDate
              label="До"
              name="to"
              className="flex flex-col gap-2 w-full"
              onChange={value => onChangeTo(value)}
            />
          }
          renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => {
            return <CustomHeader date={date} decreaseMonth={decreaseMonth} increaseMonth={increaseMonth} />;
          }}
        />
      </div>
    </div>
  );
};

InputDatePicker.propTypes = {
  valueFrom: PropTypes.object.isRequired,
  onChangeFrom: PropTypes.func.isRequired,
  valueTo: PropTypes.object.isRequired,
  onChangeTo: PropTypes.func.isRequired
};

export default InputDatePicker;
