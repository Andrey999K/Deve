import React, { useEffect, useRef, useState } from "react";
import rus from "../../../img/rus.png";
import uk from "../../../img/uk.png";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import setLocalStorage from "../../../utils/setLocalStorage";

const Lang = ({ openMenu, onOpen, className, direction }) => {
  const [openLang, setOpenLang] = useState();
  const lang = useRef(null);
  const classes = "md:relative flex flex-col gap-2 w-full max-w-[192px] text-[13px] md:text-base" + (className ? " " + className : "");
  const timers = [];
  const { t, i18n } = useTranslation();

  const menuClose = () => {
    lang.current.classList.add("opacity-0");
    timers.push(setTimeout(() => {
      lang.current.classList.add("hidden");
    }, 300));
  };

  const handleOpen = () => {
    setOpenLang(!openLang);
  };

  const setLang = (lng) => {
    i18n.changeLanguage(lng);
    setLocalStorage("lang", lng);
    setOpenLang(!openLang);
  };

  let position = "top-14 right-0 left-[-140px]";
  switch (direction) {
    case "bottom left":
      position = "top-14 right-0 left-[-140px]";
      break;
    case "top right":
      position = "bottom-[52px] left-0";
      break;
  }

  useEffect(() => {
    if (openLang) {
      lang.current.classList.remove("hidden");
      timers.push(setTimeout(() => {
        lang.current.classList.remove("opacity-0");
      }, 0));
    } else menuClose();
  }, [openLang]);

  useEffect(() => {
    const handleClick = (e) => {
      if (lang.current && !lang.current.parentElement.contains(e.target)) {
        setOpenLang(false);
        menuClose();
      }
    };
    document.addEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    return () => {
      if (timers.length !== 0) {
        for (let i = 0; i < timers.length; i++) {
          clearTimeout(timers[i]);
        }
      }
    };
  }, []);

  return (
    <div className={classes}>
      <ul ref={lang} className={"lang hidden opacity-0 duration-500 md:absolute " +
        "md:order-last grid grid-cols-1 divide-y divide-graySecond bg-white " +
        "rounded-[10px] md:bg-white md:bg-opacity-75 md:shadow-xl md:backdrop-blur-lg " +
        "dark:bg-[#232323BF] dark:backdrop-blur-[7px] w-[192px] " + position}>
        <li onClick={() => setLang("ru")}
          role="button"
          className="py-[10px] md:py-[15px] px-[15px] flex items-center gap-1"
        >
          <img src={rus} alt="Флаг России" className="w-5 h-5" loading="lazy"/>
          <span>{t("lang.ru")}</span>
        </li>
        <li onClick={() => setLang("en")}
          role="button"
          className="py-[10px] md:py-[15px] px-[15px] flex items-center gap-1"
        >
          <img src={uk} alt="Флаг Объединённого королевства" className="w-5 h-5" loading="lazy"/>
          <span>{t("lang.en")}</span>
        </li>
      </ul>
      <button
        onClick={handleOpen}
        className={
        `rounded-[10px] py-2 px-[14px] text-blackSecond font-ManropeSemiBold ` +
          `${(direction === "top left" || direction === "bottom left") ? "ml-auto" : "mr-auto"} border-solid border-[1px] border-graySecond dark:text-white`
        }
      >{t("lang.lng")}</button>
    </div>
  );
};

Lang.propTypes = {
  openMenu: PropTypes.bool,
  onOpen: PropTypes.func,
  className: PropTypes.string,
  direction: PropTypes.oneOf([
    "top right",
    "top left",
    "bottom right",
    "bottom left"
  ])
};

export default Lang;
