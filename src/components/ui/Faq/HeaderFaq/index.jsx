import React from "react";
import Icon from "../../../common/Icon";

const HeaderFaq = () => {
  return (
    <div className="py-7 flex justify-between items-center w-full">
      <h2 className="font-ManropeBold text-4xl leading-10 h-10">FAQ</h2>
      <div className="flex gap-3 items-center bg-bgGray rounded-[10px] p-4 w-full max-w-[330px] dark:bg-bgGrayDark">
        <button>
          <Icon name="search" className="w-[22px] h-[22px] text-graySecond" />
        </button>
        <input type="text" placeholder="Поиск" className="bg-transparent focus:outline-none focus:border-none"/>
      </div>
    </div>
  );
};

export default HeaderFaq;
