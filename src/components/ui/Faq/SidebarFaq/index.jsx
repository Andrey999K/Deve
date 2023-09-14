import React from "react";
import { publicRoutes } from "../../../../routes";
import { Link, useLocation } from "react-router-dom";
import CardWrapper from "../../../common/Card/CardWrapper";
import CardTitle from "../../../common/Card/CardTitle";

const SidebarFaq = () => {
  const location = useLocation();
  const navList = (routes) => {
    return (
      <ul className="mt-3 flex flex-col gap-3 text-graySecond">
        {routes.map((route, index) =>
          <li key={index} className={location.pathname === route.path ? "text-blackSecond dark:text-white" : ""}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        )}
      </ul>
    );
  };
  return (
    <CardWrapper className="p-6 h-full">
      <div>
        <CardTitle>Боты</CardTitle>
        {navList(publicRoutes.faq.bots)}
      </div>
      <div>
        <CardTitle>Сервис</CardTitle>
        {navList(publicRoutes.faq.services)}
      </div>
    </CardWrapper>
  );
};

export default SidebarFaq;
