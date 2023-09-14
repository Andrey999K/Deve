"use client";
import React, { useContext, useEffect, useMemo, useRef } from "react";
import Icon from "../Icon";
import Button from "../Button";
import PropTypes from "prop-types";
import CardWrapper from "./CardWrapper";
import CardTitle from "./CardTitle";
import Link from "next/link";
// import { ThemeContext } from "../../../App";

const Card = ({ icon, title, info, button, description, className, children, iconInfo = false }) => {
  const iconSvg = useRef(null);
  const iconGif = useRef(null);
  const iconGifDark = useRef(null);
  const gifContainer = useRef(null);
  // const { darkTheme } = useContext(ThemeContext);
  const darkTheme = false;
  let timer = null;
  // const handleMouseEnter = () => {
  //   if (window.screen.width >= 1180 && icon && iconSvg.current.style.display !== "none" && (iconGif.current || iconGifDark.current)) {
  //     iconSvg.current.style.display = "none";
  //     gifContainer.current.classList.remove("hidden");
  //     if (darkTheme) {
  //       iconGifDark.current.classList.remove("hidden");
  //       iconGifDark.current.play();
  //     } else {
  //       iconGif.current.classList.remove("hidden");
  //       iconGif.current.play();
  //     }
  //     timer = setTimeout(() => {
  //       if (gifContainer.current && gifContainer.current.classList) {
  //         gifContainer.current.classList.add("hidden");
  //       }
  //       if (iconGif.current) iconGif.current.classList.add("hidden");
  //       if (iconGifDark.current) iconGifDark.current.classList.add("hidden");
  //       if (iconSvg.current) iconSvg.current.style.display = "block";
  //     }, 2000);
  //   }
  // };
  // const getGif = useMemo(() => {
  //   if (window.screen.width >= 1180 && icon) {
  //     return (
  //       <>
  //         <video ref={iconGifDark} className="w-[50px] h-[50px] hidden" muted>
  //           <source src={`./img/dark_theme/${icon}.webm`} type="video/webm"/>
  //         </video>
  //         <video ref={iconGif} className="w-[50px] h-[50px] hidden" muted>
  //           <source src={`./img/light_theme/${icon}.webm`} type="video/webm"/>
  //         </video>
  //       </>
  //     );
  //   }
  //   return false;
  // }, [window.screen.width]);
  // useEffect(() => {
  //   return () => {
  //     if (timer) {
  //       clearTimeout(timer);
  //     }
  //   };
  // }, [timer]);
  return (
    <CardWrapper
      // onMouseEnter={handleMouseEnter}
      className={"text-[13px] md:text-[15px] xl:text-base md:p-6 dark:text-white h-full" + (className ? " " + className : "")}
    >
      {!!icon && (
        <>
          <div ref={iconSvg}>
            <Icon name={icon} className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" />
          </div>
          {/*<div ref={gifContainer} className="hidden w-[50px] h-[50px]">{getGif}</div>*/}
        </>
      )}
      <div className="flex justify-between items-center">
        {!!title && <CardTitle>{title}</CardTitle>}
        {!!iconInfo && (
          <div className="hidden ml-auto flex justify-center items-center w-5 h-5 rounded-[7px] opacity-40 md:block md:w-6 md:h-6 xl:hidden">
            <Icon name="info" />
          </div>
        )}
      </div>
      {!!info && <p className="text-graySecond">{info}</p>}
      {!!button && (
        <Button className=" md:text-[15px] xl:text-base">
          <Link href={button.link || "admin/desktop"} className="py-[18px] w-full">{button.text}</Link>
        </Button>
      )}
      {!!description && (
        <p className="text-blackSecond dark:text-white">{description}</p>
      )}
      {children}
    </CardWrapper>
  );
};

Card.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string
  }),
  description: PropTypes.string,
  iconInfo: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default Card;
