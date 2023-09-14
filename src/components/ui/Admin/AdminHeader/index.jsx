import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Icon from "../../../common/Icon";
import { useTranslation } from "react-i18next";

const AdminHeader = ({ title }) => {
  const { t } = useTranslation();
  return (
    <header className="px-10 py-8 flex justify-between w-full font-medium font-ManropeMedium leading-5">
      <h2 className="text-4xl font-ManropeBold">{title}</h2>
      <div className="flex gap-9 items-center">
        <nav>
          <ul className="flex gap-7 items-center">
            <li>
              <Link to="/">{t("services.name")}</Link>
            </li>
            <li>
              <Link to="/">{t("help")}</Link>
            </li>
          </ul>
        </nav>
        <button className="w-[25px] h-[25px]">
          <Icon name="notification" className="w-full h-full" />
        </button>
        <Link to="/" className="flex gap-4">
          <div className="rounded-full bg-[#ADADAD] w-10 h-10"></div>
          <div className="flex flex-col">
            <span>Name</span>
            <span className="text-graySecond">@username</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

AdminHeader.propTypes = {
  title: PropTypes.string
};

export default AdminHeader;
