import React from "react";
import Logo from "../../../common/Logo";
import { Link, useLocation } from "react-router-dom";
import Icon from "../../../common/Icon";
import SwitchTheme from "../../Header/SwitchTheme";
import { useTranslation } from "react-i18next";
import Lang from "../../Lang";

const Sidebar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const pageBot = location.pathname.startsWith("/admin/bot");
  return (
    <div className="pt-10 px-9 bg-bgGray dark:bg-bgGrayDark h-[100dvh] w-full max-w-[348px] rounded-r-[30px] font-medium font-ManropeMedium
      leading-snug flex flex-col gap-5 justify-between duration-300">
      <div className={`flex flex-col max-h-[901px] h-full${pageBot ? " justify-between" : ""}`}>
        <Logo className="h-[26px] w-[93px]"/>
        <div className={`h-[24%] max-h-[220px] flex flex-col gap-3${pageBot ? "" : " mt-[27px]"}`}>
          <h3 className="text-2xl font-ManropeSemiBold">{t("sidebar.menu.menu")}</h3>
          <ul className="flex flex-col h-full justify-between">
            <li className="h-full max-h-[54px]">
              <Link to="/admin/desktop" className="px-4 h-full -mx-4 flex items-center gap-[10px]">
                <Icon name="home" className="w-[22px] h-[22px]" />
                <span>{t("sidebar.menu.desktop")}</span>
              </Link>
            </li>
            <li className="h-full max-h-[54px]">
              <Link to="/" className="px-4 h-full -mx-4 flex items-center gap-[10px]">
                <Icon name="profile" className="w-[22px] h-[22px]" />
                <span>{t("sidebar.menu.profile")}</span>
              </Link>
            </li>
            <li className="h-full max-h-[54px]">
              <Link to="/" className="px-4 h-full -mx-4 flex items-center gap-[10px]">
                <Icon name="chat" className="w-[22px] h-[22px]" />
                <span>{t("sidebar.menu.bots")}</span>
              </Link>
            </li>
          </ul>
        </div>
        {pageBot &&
          (
          <div className="h-[66%] max-h-[592px] flex flex-col gap-3">
            <h3 className="text-2xl font-ManropeSemiBold">{t("sidebar.storeMenu.menu")}</h3>
            <ul className="flex flex-col h-full justify-between">
              <li className="h-full max-h-[54px]">
                <Link to="/" className="px-4 h-full -mx-4 flex items-center gap-[10px]">
                  <Icon name="category" className="w-[22px] h-[22px]" />
                  <span>{t("sidebar.storeMenu.desktopShop")}</span>
                </Link>
              </li>
              <li className="h-full max-h-[54px]">
                <Link to="/" className="px-4 h-full -mx-4 flex items-center gap-[10px]">
                  <Icon name="exit" className="w-[22px] h-[22px]" />
                  <span>{t("sidebar.storeMenu.users")}</span>
                </Link>
              </li>
              <li className="h-full max-h-[54px]">
                <Link to="/" className="px-4 h-full -mx-4 flex items-center gap-[10px]">
                  <Icon name="star" className="w-[22px] h-[22px]" />
                  <span>{t("sidebar.storeMenu.paidSettings")}</span>
                </Link>
              </li>
              <li className="h-full max-h-[54px]">
                <Link to="/" className="px-4 h-full max-h-[54px] -mx-4 flex items-center gap-[10px]">
                  <Icon name="bag-gray" className="w-[22px] h-[22px]" />
                  <span>{t("sidebar.storeMenu.categoriesAndProducts")}</span>
                </Link>
              </li>
              <li className="h-full max-h-[54px]">
                <Link to="/" className="px-4 h-full -mx-4 flex items-center gap-[10px]">
                  <Icon name="exit" className="w-[22px] h-[22px]" />
                  <span>{t("sidebar.storeMenu.orders")}</span>
                </Link>
              </li>
              <li className="h-full max-h-[54px]">
                <Link to="/" className="px-4 h-full -mx-4 flex items-center gap-[10px]">
                  <Icon name="settings" className="w-[22px] h-[22px]" />
                  <span>{t("sidebar.storeMenu.shopSettings")}</span>
                </Link>
              </li>
              <li className="h-full max-h-[54px]">
                <Link to="/" className="px-4 h-full -mx-4 flex items-center gap-[10px]">
                  <Icon name="filter" className="w-[22px] h-[22px]" />
                  <span>{t("sidebar.storeMenu.partitionManagement")}</span>
                </Link>
              </li>
              <li className="h-full max-h-[54px]">
                <Link to="/" className="px-4 h-full -mx-4 flex items-center gap-[10px]">
                  <Icon name="send" className="w-[22px] h-[22px]" />
                  <span>{t("sidebar.storeMenu.newsletter")}</span>
                </Link>
              </li>
              <li className="h-full max-h-[54px]">
                <Link to="/" className="px-4 h-full -mx-4 flex items-center gap-[10px]">
                  <Icon name="chart-sidebar" className="w-[22px] h-[22px]" />
                  <span>{t("sidebar.storeMenu.statistics")}</span>
                </Link>
              </li>
            </ul>
          </div>
          )
        }
      </div>
      <div className="py-4 flex justify-between -mr-5">
        <Lang direction="top right" />
        <SwitchTheme />
      </div>
    </div>
  );
};

export default React.memo(Sidebar);
