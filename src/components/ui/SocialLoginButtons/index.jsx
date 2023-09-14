import React from "react";
import Icon from "../../common/Icon";
import { Link } from "react-router-dom";

const SocialLoginButtons = () => {
  return (
    <ul className="flex gap-[10px] text-blackSecond dark:text-white">
      <li>
        <a href="https://deve-bot.com:8080/api/v1/user/login_google/" className="w-20 h-[52px] block dark:border-solid dark:border-[1px] dark:border-white rounded-[10px]">
          <Icon name="google" className="w-full h-full"/>
        </a>
      </li>
      <li>
        <Link to="/auth_via_telegram" className="w-20 h-[52px] block dark:border-solid dark:border-[1px] dark:border-white rounded-[10px]">
          <Icon name="telegram-auth" className="w-full h-full"/>
        </Link>
      </li>
      <li>
        <a href="https://deve-bot.com:8080/api/v1/user/login_vk/" className="w-20 h-[52px] block dark:border-solid dark:border-[1px] dark:border-white rounded-[10px]">
          <Icon name="vk" className="w-full h-full"/>
        </a>
      </li>
      <li>
        <a href="https://deve-bot.com:8080/api/v1/user/login_discord/" className="w-20 h-[52px] block dark:border-solid dark:border-[1px] dark:border-white rounded-[10px]">
          <Icon name="discord" className="w-full h-full"/>
        </a>
      </li>
    </ul>
  );
};

export default SocialLoginButtons;
