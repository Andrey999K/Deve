import React from "react";
import Logo from "../../common/Logo";
import Container from "../../common/Container";
import Link from "next/link";
// import { useTranslation } from "react-i18next";

const Footer = () => {
  // const { t } = useTranslation();
  return (
    <footer className="pt-8 pb-14 bg-blackSecond text-white rounded-t-[10px] flex flex-col w-full max-w-[1270px] m-auto">
      <Container>
        <div className="footer__content">
          <div className="w-16 h-5 text-white">
            <Logo className="w-full h-full" />
          </div>
          <nav className="mt-6">
            <ul className="flex flex-col gap-7 md:flex-row flex-wrap md:justify-between">
              <li className="md:basis-[45%] xl:basis-auto">
                {/*<h3 className="font-ManropeSemiBold text-xl md:text-2xl">{t("contacts")}</h3>*/}
                <h3 className="font-ManropeSemiBold text-xl md:text-2xl">Контакты</h3>
                <ul className="footer-item__list flex flex-col gap-2 mt-3">
                  <li>
                    <a
                      href="https://t.me/DeveBot_channel"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white opacity-50 text-[13px]"
                    >Telegram</a>
                  </li>
                  <li>
                    <span className="text-white opacity-50 text-[13px]">support@deve-mail.ru</span>
                  </li>
                </ul>
              </li>
              <li className="md:basis-[45%] xl:basis-auto">
                {/*<h3 className="font-ManropeSemiBold text-xl md:text-2xl">{t("help")}</h3>*/}
                <h3 className="font-ManropeSemiBold text-xl md:text-2xl">Помощь</h3>
                <ul className="footer-item__list flex flex-col gap-2 mt-3">
                  {/*<li>*/}
                  {/*  <Link*/}
                  {/*    href="/faq"*/}
                  {/*    className="text-white opacity-50 text-[13px]"*/}
                  {/*  >{t("faq")}</Link>*/}
                  {/*</li>*/}
                  {/*<li>*/}
                  {/*  <Link*/}
                  {/*    href="/"*/}
                  {/*    className="text-white opacity-50 text-[13px]"*/}
                  {/*  >{t("support")}</Link>*/}
                  {/*</li>*/}
                  <li>
                    <Link
                      href="/faq"
                      className="text-white opacity-50 text-[13px]"
                    >Часто задаваемые вопросы</Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-white opacity-50 text-[13px]"
                    >Поддержка</Link>
                  </li>
                </ul>
              </li>
              <li className="md:basis-[45%] xl:basis-auto">
                {/*<h3 className="font-ManropeSemiBold text-xl md:text-2xl">{t("guides")}</h3>*/}
                <h3 className="font-ManropeSemiBold text-xl md:text-2xl">Руководство</h3>
                <ul className="footer-item__list flex flex-col gap-2 mt-3">
                  {/*<li>*/}
                  {/*  <Link*/}
                  {/*    href="/"*/}
                  {/*    className="text-white opacity-50 text-[13px]"*/}
                  {/*  >{t("privacyPolicy")}</Link>*/}
                  {/*</li>*/}
                  {/*<li>*/}
                  {/*  <Link*/}
                  {/*    href="/"*/}
                  {/*    className="text-white opacity-50 text-[13px]"*/}
                  {/*  >{t("publicOffer")}</Link>*/}
                  {/*</li>*/}
                  <li>
                    <Link
                      href="/"
                      className="text-white opacity-50 text-[13px]"
                    >Политика конфиденциальности</Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-white opacity-50 text-[13px]"
                    >Публичная оферта</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
