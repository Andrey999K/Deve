import React, { useContext, useEffect, useRef } from "react";
import Switch from "react-switch";
import Icon from "../../../common/Icon";
import { ThemeContext } from "../../../../App";
import { useTranslation } from "react-i18next";

const SwitchTheme = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);
  const height = window.innerWidth > 768 ? 38 : 30;
  const width = window.innerWidth > 768 ? 66 : 52;
  const diameter = window.innerWidth > 768 ? 28 : 20;
  const switchElem = useRef(null);
  let timer = null;
  const { t } = useTranslation();
  const handleFocus = () => {
    timer = setTimeout(() => {
      switchElem.current.querySelector(".react-switch-handle").style.boxShadow = "none";
    }, 10);
  };
  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);
  return (
    <label ref={switchElem} className="relative cursor-pointer flex items-center active:outline-none outline-none focus:outline-none switch" onFocus={handleFocus}>
      <span className="hidden">{t("switchTheme")}</span>
      <Switch
        onChange={toggleTheme}
        checked={!!darkTheme}
        offColor="#ffffff"
        onColor="#0F0F0F"
        offHandleColor="#1F1F21"
        onHandleColor="#ffffff"
        handleDiameter={diameter}
        uncheckedIcon={false}
        checkedIcon={false}
        height={height}
        width={width}
        className={`border-[1px] border-solid duration-200 ${darkTheme ? "bg-blackDark border-white" : "bg-white border-blackSecond"}`}
      />
      <div className="absolute top-[1px] left-[2px] md:left-[3px] h-[30px] md:h-[38px] w-1/2 flex items-center justify-center">
        <Icon name="sun" className="w-[10px] md:w-[14px] h-[10px] md:h-[14px]" />
      </div>
      <div className="absolute top-[1px] right-[2px] md:right-[3px] h-[30px] md:h-[38px] w-1/2 flex items-center justify-center">
        <Icon name="moon" className="w-[10px] md:w-[14px] h-[10px] md:h-[14px]" />
      </div>
    </label>
  );
};

export default SwitchTheme;
