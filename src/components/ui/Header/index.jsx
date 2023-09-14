import React, { useEffect, useRef, useState } from "react";
import Container from "../../common/Container";
import { Link } from "react-router-dom";
import Logo from "../../common/Logo";
import Button from "../../common/Button";
import Icon from "../../common/Icon";
import Lang from "../Lang";
import SwitchTheme from "./SwitchTheme";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [openLangMobile, setOpenLangMobile] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openServicesMobile, setOpenServicesMobile] = useState(false);
  const blackout = useRef(null);
  const menu = useRef(null);
  const menuServicesElem = useRef(null);
  const menuServicesElemMobile = useRef(null);
  const menuServicesListMobile = useRef(null);
  const timers = [];
  const { t } = useTranslation();

  const openingServicesMobile = () => {
    setOpenServicesMobile(true);
    menuServicesElemMobile.current.classList.remove("h-[52px]");
    menuServicesElemMobile.current.classList.add("h-[350px]");
    menuServicesListMobile.current.classList.remove("hidden");
    timers.push(setTimeout(() => {
      menuServicesListMobile.current.classList.remove("opacity-0");
    }, 300));
  };

  const closeServicesMobile = () => {
    setOpenServicesMobile(false);
    menuServicesListMobile.current.classList.add("opacity-0");
    timers.push(setTimeout(() => {
      menuServicesListMobile.current.classList.add("hidden");
      menuServicesElemMobile.current.classList.remove("h-[350px]");
      menuServicesElemMobile.current.classList.add("h-[52px]");
    }, 300));
  };

  const toggleServicesMobile = () => {
    if (openServicesMobile) closeServicesMobile();
    else openingServicesMobile();
  };

  // ЗАКРЫТИЕ БОКОВОГО МЕНЮ
  const closeMenu = () => {
    blackout.current.classList.toggle("bg-blackout");
    blackout.current.classList.toggle("backdrop-blur-[13px]");
    menu.current.classList.toggle("translate-x-[270px]");
    timers.push(setTimeout(() => {
      blackout.current.classList.toggle("hidden");
      document.body.style.overflow = "visible";
    }, 300));
    setOpenMenu(prevState => !prevState);
  };

  // ОТКРЫТИЕ БОКОВОГО МЕНЮ
  const openingMenu = () => {
    document.body.style.overflow = "hidden";
    blackout.current.classList.toggle("hidden");
    timers.push(setTimeout(() => {
      blackout.current.classList.toggle("bg-blackout");
      blackout.current.classList.toggle("backdrop-blur-[13px]");
      menu.current.classList.toggle("translate-x-[270px]");
    }, 1));
    setOpenMenu(prevState => !prevState);
  };

  const handleToggleMenu = () => {
    if (openMenu) closeMenu();
    else openingMenu();
  };

  const toggleMenuLang = (open) => {
    setOpenLang(open);
  };

  const toggleMenuLangMobile = (open) => {
    setOpenLangMobile(open);
  };

  const menuServisesClose = () => {
    setOpenServices(false);
    menuServicesElem.current.classList.add("opacity-0");
    timers.push(setTimeout(() => {
      menuServicesElem.current.classList.add("hidden");
    }, 500));
  };

  const menuServisesOpen = () => {
    setOpenServices(true);
    menuServicesElem.current.classList.remove("hidden");
    timers.push(setTimeout(() => {
      menuServicesElem.current.classList.remove("opacity-0");
    }, 0));
  };

  const toggleMenuServices = () => {
    if (openServices) menuServisesClose();
    else menuServisesOpen();
  };

  const handleClickBlackout = (e) => {
    if (e.target === blackout.current) {
      closeMenu();
    }
  };

  useEffect(() => {
    setOpenLang(false);
    setOpenLangMobile(false);
    closeServicesMobile();
    menuServisesClose();
  }, [openMenu]);

  useEffect(() => {
    if (openServices) setOpenLang(false);
  }, [openServices]);

  useEffect(() => {
    if (openServicesMobile) setOpenLangMobile(false);
  }, [openServicesMobile]);

  useEffect(() => {
    if (openLang) {
      closeServicesMobile();
      menuServisesClose();
    }
  }, [openLang]);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (menuServicesElem.current && !menuServicesElem.current.parentElement.contains(e.target)) menuServisesClose();
      if (menuServicesElemMobile.current && !menuServicesElemMobile.current.parentElement.contains(e.target)) closeServicesMobile();
    });
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
    <header className="font-ManropeMedium sticky top-0 pt-7 pb-7 md:pt-12 md:pb-3 bg-white duration-300 dark:bg-blackDark duration-300 z-[9999] md:text-[15px] md:pb-6 xl:text-base">
      <Container className="h-full">
        <div className="flex justify-between items-center">
          <div className="hidden md:block">
            <nav>
              <ul className="md:flex gap-7 items-center">
                <li>
                  <Link to="/admin/desktop">{t("home")}</Link>
                </li>
                <li className="relative">
                  <button onClick={toggleMenuServices}>{t("services.name")}</button>
                  <ul ref={menuServicesElem} className="hidden opacity-0 duration-500 bg-white bg-opacity-75
                  shadow-xl backdrop-blur-lg absolute top-12 right-0 w-[268px] left-[-15px] grid
                  grid-cols-1 divide-graySecond divide-y rounded-[10px] dark:bg-[#232323BF] dark:backdrop-blur-[7px]">
                    <li>
                      <Link
                        to="/link_generator"
                        className="p-[15px] block"
                      >{t("services.tgLinkGenerator")}</Link>
                    </li>
                    <li>
                      <a
                        href="https://t.me/deve_get_id_bot"
                        target="_blank"
                        rel="noreferrer"
                        className="p-[15px] block"
                      >{t("services.findID")}</a>
                    </li>
                    <li>
                      <a
                        href="https://t.me/deve_gpt_bot"
                        target="_blank"
                        rel="noreferrer"
                        className="p-[15px] block"
                      >{t("services.chatGPT")}</a>
                    </li>
                    <li>
                      <a
                        href="https://t.me/deve_text_to_spech_bot"
                        target="_blank"
                        rel="noreferrer"
                        className="p-[15px] block"
                      >{t("services.convertTextVoice")}</a>
                    </li>
                    <li>
                      <a
                        href="https://t.me/deve_downloader_bot"
                        target="_blank"
                        rel="noreferrer"
                        className="p-[15px] block"
                      >{t("services.downloadVideos")}</a>
                    </li>
                    <li>
                      <Link
                        to="/paid_services"
                        className="p-[15px] block"
                      >{t("services.paidServices")}</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-16 h-5 text-blackSecond duration-300 dark:text-white ml-0 md:-order-1 xl:order-none xl:ml-[187px]">
            <Logo className="w-full h-full" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Link to="/login" className="hidden md:block">
                <Button className="py-2 px-4 whitespace-nowrap md:text-[15px] xl:text-base duration-300 dark:bg-white dark:text-blackDark">{t("login")}</Button>
              </Link>
              <Link
                to="/registration"
                className="py-2 px-4 bg-white font-ManropeMedium flex justify-center
                items-center rounded-[10px] border-solid border-[1px] border-blackSecond
                text-[13px] md:text-[15px] xl:text-base whitespace-nowrap hidden md:block text-blackSecond duration-300 dark:bg-blackDark dark:text-white dark:border-white"
              >
                  <span>
                    {t("registration")}
                  </span>
              </Link>
              <div className="mr-12 md:mr-0">
                <SwitchTheme />
              </div>
              <Lang
                className="hidden md:block"
                openMenu={openLang}
                onOpen={toggleMenuLang}
                direction="bottom left"
              />
            </div>
          </div>
          <button
            className="md:hidden fixed top-[29px] right-5 z-[9999] flex justify-center items-center w-[30px] h-[30px] rounded-[5px]"
            onClick={handleToggleMenu}
          >
            {openMenu
              ? <Icon name="close" className="w-full h-full" />
              : <Icon name="menu" className="w-full h-full" />
            }
          </button>
          <div
            onClick={handleClickBlackout}
            ref={blackout}
            className="fixed top-0 right-0 w-screen h-[100dvh] hidden md:hidden duration-1000">
            <nav ref={menu} className="absolute top-0 right-0 bottom-0 w-[270px] rounded-s-2xl py-[85px] px-5 bg-bgGray dark:bg-bgGrayDark duration-300 translate-x-[270px]">
              <ul className="flex flex-col gap-2">
                <li className="rounded-[7px] shadow-[0_5px_18px_0_#0000000a] bg-white text-blackSecond">
                  <Link
                    to="/"
                    className="font-ManropeMedium flex gap-2 items-center p-4 text-[13px] leading-4"
                  >
                    <Icon name="home" className="w-5 h-5" />
                    <span>{t("home")}</span>
                  </Link>
                </li>
                <li className="rounded-[7px]">
                  <div ref={menuServicesElemMobile} className="h-[52px] duration-300">
                    <div
                      onClick={toggleServicesMobile}
                      role="button"
                      className="relative font-ManropeMedium flex justify-between items-center p-4 text-[13px]"
                    >
                      <div className="flex gap-2 items-center">
                        <Icon name="bag-gray" className="w-5 h-5" />
                        <span className="h-[18px]">{t("services.name")}</span>
                      </div>
                      <Icon name="arrow-left-circle" className={"w-5 h-5 duration-200" + (openServicesMobile ? " -rotate-90" : " rotate-90")} />
                    </div>
                    <ul ref={menuServicesListMobile} className="hidden opacity-0 duration-300 pl-4 grid grid-cols-1 divide-y divide-graySecond text-[13px]">
                      <li>
                        <Link className="py-[9px] pr-4 pl-6 block" to="/link_generator">{t("services.tgLinkGenerator")}</Link>
                      </li>
                      <li>
                        <a
                          className="py-[9px] pr-4 pl-6 block"
                          href="https://t.me/deve_get_id_bot"
                          target="_blank"
                          rel="noreferrer"
                        >{t("services.findID")}</a>
                      </li>
                      <li>
                        <a
                          className="py-[9px] pr-4 pl-6 block"
                          href="https://t.me/deve_gpt_bot"
                          target="_blank"
                          rel="noreferrer"
                        >{t("services.chatGPT")}</a>
                      </li>
                      <li>
                        <a
                          className="py-[9px] pr-4 pl-6 block"
                          href="https://t.me/deve_text_to_spech_bot"
                          target="_blank"
                          rel="noreferrer"
                        >{t("services.convertTextVoice")}</a>
                      </li>
                      <li>
                        <a
                          className="py-[9px] pr-4 pl-[23px] block"
                          href="https://t.me/deve_downloader_bot"
                          target="_blank"
                          rel="noreferrer"
                        >{t("services.downloadVideos")}</a>
                      </li>
                      <li>
                        <Link className="py-[9px] pr-4 pl-6 block" to="/paid_services">{t("services.paidServices")}</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="rounded-[7px]">
                  <Link
                    to="/"
                    className="font-ManropeMedium flex gap-2 items-center p-4 text-[13px]"
                  >
                    <Icon name="info" className="w-5 h-5" />
                    <span className="h-[18px]">{t("aboutUs")}</span>
                  </Link>
                </li>
                <li className="rounded-[7px]">
                  <Link
                    to="/login"
                    className="font-ManropeMedium flex gap-2 items-center p-4 text-[13px]"
                  >
                    <Icon name="exit" className="w-5 h-5" />
                    <span className="h-[18px]">{`${t("login")} / ${t("registration")}`}</span>
                  </Link>
                </li>
              </ul>
              <Lang
                openMenu={openLangMobile}
                onOpen={toggleMenuLangMobile}
                className="absolute bottom-5 right-[14px]"
                direction="top left"
              />
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
