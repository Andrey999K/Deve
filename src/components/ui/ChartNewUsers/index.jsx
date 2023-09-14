import React, { useState } from "react";
import CardTitle from "../../common/Card/CardTitle";
import Icon from "../../common/Icon";
import Chart from "../../common/Chart";
import Button from "../../common/Button";
import CardWrapper from "../../common/Card/CardWrapper";
import "react-datepicker/dist/react-datepicker.css";
import InputDatePicker from "../../common/Form/InputDatePicker";

const ChartNewUsers = () => {
  const [startDate, setStartDate] = useState(new Date("2023/06/28"));
  const [endDate, setEndDate] = useState(new Date("2023/07/05"));
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <CardWrapper>
      <CardTitle>Новых пользователей</CardTitle>
      <span className="-mt-3 font-ManropeMedium">с 01.04.2022 по 12.03.2023</span>
      <ul className="flex gap-4 justify-between">
        <li className="rounded-[10px] w-full bg-white flex flex-col gap-4 p-4 text-[13px] dark:bg-blackDark">
          <span>Сегодня</span>
          <div className="flex gap-1 items-center font-ManropeMedium text-2xl">
            <Icon name="people" className="w-[27px] h-[27px]" />
            <span>86</span>
          </div>
        </li>
        <li className="rounded-[10px] w-full bg-white flex flex-col gap-4 p-4 text-[13px] dark:bg-blackDark">
          <span>За 7 дней</span>
          <div className="flex gap-1 items-center font-ManropeMedium text-2xl">
            <Icon name="people" className="w-[27px] h-[27px]" />
            <span>554</span>
          </div>
        </li>
      </ul>
      <Chart from={startDate} to={endDate} />
      <div className="h-[1px] bg-blackSecond/10 -mx-4"></div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 font-ManropeMedium">
        <h3>Выбрать даты</h3>
        <InputDatePicker
          valueFrom={startDate}
          onChangeFrom={setStartDate}
          valueTo={endDate}
          onChangeTo={setEndDate}
        />
        <div>
          <Button className="!w-auto py-4 px-8">Поиск</Button>
        </div>
      </form>
    </CardWrapper>
  );
};

export default React.memo(ChartNewUsers);
