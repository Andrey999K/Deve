import Container from "@/components/common/Container";
import SelfPrintingText from "@/components/common/SelfPrintingText";
import Title from "@/components/common/Title";
import Card from "@/components/common/Card";
import Footer from "@/components/ui/Footer";
import Button from "@/components/common/Button";
import Link from "next/link";
import Icon from "@/components/common/Icon";
import Image from "next/image";
import bgBannerTopLeft from "../img/background-banner-top-desktop.png";

export default function Home() {
  return (
    <>
      <main className="flex-grow flex justify-center items-center w-full">
        <div className="w-full">
          <section className="mb-16 md:mb-18 xl:mb-30 h-[491px] md:h-[569px] xl:h-[611px] banner">
            <Container className="h-full">
              <div className="relative overflow-hidden p-3 md:p-0 mt-0
                              h-full w-full rounded-[15px] bg-bgGray dark:bg-bgGrayDark duration-300"
              >
                <div className="banner__bg-top-left hidden md:block absolute top-0 left-0 z-10">
                  <Image
                    src={bgBannerTopLeft}
                    alt="banner"
                    sizes="(max-width: 1180px) 50vw, 33vw"
                  />
                  {/*<picture>*/}
                  {/*  <source media="(max-width: 768px)" srcSet={imagePlaceholder} sizes="(max-width: 768px)" />*/}
                  {/*  <source media="(max-width: 1180px)" srcSet={bgBannerTopLeftMd} sizes="(max-width: 1180px)" />*/}
                  {/*  <img src={bgBannerTopLeftXl} alt="Картинка" />*/}
                  {/*</picture>*/}
                </div>
                <div className="banner__bg-bottom-right hidden md:block absolute bottom-0 right-0 z-10">
                  {/*<picture>*/}
                  {/*  <source media="(max-width: 768px)" srcSet={imagePlaceholder} sizes="(max-width: 768px)" />*/}
                  {/*  <source media="(max-width: 1180px)" srcSet={bgBannerBottomRightMd} sizes="(max-width: 1180px)" />*/}
                  {/*  <img src={bgBannerBottomRightXl} alt="Картинка" />*/}
                  {/*</picture>*/}
                </div>
                <div className="banner__bg-top-right hidden md:block absolute top-0 right-0 z-10">
                  {/*<picture>*/}
                  {/*  <source media="(max-width: 768px)" srcSet={imagePlaceholder} sizes="(max-width: 768px)" />*/}
                  {/*  <img src={bgBannerTopRight} alt="Картинка" />*/}
                  {/*</picture>*/}
                </div>
                <div className="banner__bg-bottom-left hidden md:block absolute bottom-0 left-0 z-10">
                  {/*<picture>*/}
                  {/*  <source media="(max-width: 768px)" srcSet={imagePlaceholder} sizes="(max-width: 768px)" />*/}
                  {/*  <img src={bgBannerBottomLeft} alt="Картинка" />*/}
                  {/*</picture>*/}
                </div>
                <div className="relative z-20 flex justify-center items-center flex-col gap-7 h-full w-full">
                  <h1 className="w-full max-w-[240px] md:max-w-full font-bold font-ManropeBold xl:max-w-[624px] text-[32px] md:text-[40px] xl:text-5xl leading-tight md:leading-tight xl:leading-tight text-center">
                     Создайте бота в Telegram<br/>за пару мгновений
                    {/*{t("banner.title")}*/}
                  </h1>
                  {/*<SelfPrintingText*/}
                  {/*  text={t("banner.description")}*/}
                  {/*  fontSize={[13, 15, 16]}*/}
                  {/*  width={[175, 331, 331]}*/}
                  {/*  duration={2}*/}
                  {/*/>*/}
                  <SelfPrintingText
                    text="Нет лучшего времени для начала работы с Telegram, чем прямо сейчас!"
                    fontSize={[13, 15, 16]}
                    width={[175, 331, 331]}
                    duration={2}
                  />
                  <Button className="!w-auto md:text-[15px] xl:text-base dark:bg-white dark:text-blackDark">
                    <Link href="admin/desktop" className="flex gap-3 py-4 px-8 items-center">
                      {/*<span>{t("createBot")}</span>*/}
                      <span>Создать бота</span>
                      <Icon name="arrow-right" className="w-5 h-[14px]" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Container>
          </section>
          <section className="mb-16 md:mb-18 xl:mb-30">
            <Container>
              {/*<Title className="max-w-[250px] md:max-w-[470px]">{t("main_section_title_1")}</Title>*/}
              <Title className="max-w-[250px] md:max-w-[470px]">
                Наш сервис поможет вам с такими вещами как:
              </Title>
              <div className="mt-8 xl:mt-12">
                <ul className="grid gap-[30px] md:grid-cols-2 xl:grid-cols-4">
                  {/*<li>*/}
                  {/*  <Card*/}
                  {/*    icon="bag-gray"*/}
                  {/*    title={t("mainCards.sales.title")}*/}
                  {/*    description={t("mainCards.sales.description")}*/}
                  {/*  />*/}
                  {/*</li>*/}
                  {/*<li>*/}
                  {/*  <Card*/}
                  {/*    icon="star"*/}
                  {/*    title={t("mainCards.price.title")}*/}
                  {/*    description={t("mainCards.price.description")}*/}
                  {/*  />*/}
                  {/*</li>*/}
                  {/*<li>*/}
                  {/*  <Card*/}
                  {/*    icon="swap"*/}
                  {/*    title={t("mainCards.hosting.title")}*/}
                  {/*    description={t("mainCards.hosting.description")}*/}
                  {/*  />*/}
                  {/*</li>*/}
                  {/*<li>*/}
                  {/*  <Card*/}
                  {/*    icon="shield"*/}
                  {/*    title={t("mainCards.updates.title")}*/}
                  {/*    description={t("mainCards.updates.description")}*/}
                  {/*  />*/}
                  {/*</li>*/}
                  <li>
                    <Card
                      icon="bag-gray"
                      title="Продажа"
                      description="Оставьте этот момент нашему боту, он обслужит в любое время суток ваших клиентов"
                    />
                  </li>
                  <li>
                    <Card
                      icon="star"
                      title="Цена"
                      description="10.000₽ -- цена разработки бота с нуля, а у нас вы можете его сделать бесплатно"
                    />
                  </li>
                  <li>
                    <Card
                      icon="swap"
                      title="Хостинг"
                      description="Вам не потребуется искать сервер для вашего бота, делегируйте это на нас и наши сервера"
                    />
                  </li>
                  <li>
                    <Card
                      icon="shield"
                      title="Обновления"
                      description="Мы постоянно следим за состоянием наших ботов и обновляем их, поэтому мы работаем без перебоев"
                    />
                  </li>
                </ul>
              </div>
            </Container>
          </section>
          <section className="mb-16 md:mb-18 xl:mb-30">
            <Container>
              {/*<Title className="max-w-[250px] md:max-w-[470px]">{t("main_section_title_2")}</Title>*/}
              <Title className="max-w-[250px] md:max-w-[470px]">
                Идеальное решение для вас, если вы ищите:
              </Title>
              <div className="mt-8 xl:mt-12">
                <ul className="mt-7 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                  {/*<li>*/}
                  {/*  <Card*/}
                  {/*    icon="cart"*/}
                  {/*    title={t("botTypes.physical.name")}*/}
                  {/*    info={t("botTypes.physical.info")}*/}
                  {/*    button={{ text: t("createBot") }}*/}
                  {/*    description={t("botTypes.physical.description")}*/}
                  {/*  />*/}
                  {/*</li>*/}
                  {/*<li>*/}
                  {/*  <Card*/}
                  {/*    icon="folder"*/}
                  {/*    title={t("botTypes.virtual.name")}*/}
                  {/*    info={t("botTypes.virtual.info")}*/}
                  {/*    button={{ text: t("createBot") }}*/}
                  {/*    description={t("botTypes.virtual.description")}*/}
                  {/*  />*/}
                  {/*</li>*/}
                  {/*<li>*/}
                  {/*  <Card*/}
                  {/*    icon="people"*/}
                  {/*    title={t("botTypes.access.name")}*/}
                  {/*    info={t("botTypes.access.info")}*/}
                  {/*    button={{ text: t("createBot") }}*/}
                  {/*    description={t("botTypes.access.description")}*/}
                  {/*  />*/}
                  {/*</li>*/}
                  {/*<li>*/}
                  {/*  <Card*/}
                  {/*    icon="support"*/}
                  {/*    title={t("botTypes.support.name")}*/}
                  {/*    info={t("botTypes.support.info")}*/}
                  {/*    button={{ text: t("createBot") }}*/}
                  {/*    description={t("botTypes.support.description")}*/}
                  {/*  />*/}
                  {/*</li>*/}
                  {/*<li>*/}
                  {/*  <Card*/}
                  {/*    icon="request"*/}
                  {/*    title={t("botTypes.request.name")}*/}
                  {/*    info={t("botTypes.request.info")}*/}
                  {/*    button={{ text: t("createBot") }}*/}
                  {/*    description={t("botTypes.request.description")}*/}
                  {/*  />*/}
                  {/*</li>*/}
                  {/*<li>*/}
                  {/*  <Card*/}
                  {/*    icon="key"*/}
                  {/*    title={t("botTypes.simple.name")}*/}
                  {/*    info={t("botTypes.simple.info")}*/}
                  {/*    button={{ text: t("createBot") }}*/}
                  {/*    description={t("botTypes.simple.description")}*/}
                  {/*  />*/}
                  {/*</li>*/}
                  {/*<li>*/}
                  {/*  <Card*/}
                  {/*    icon="calendar"*/}
                  {/*    title={t("botTypes.post.name")}*/}
                  {/*    info={t("botTypes.post.info")}*/}
                  {/*    button={{ text: t("createBot") }}*/}
                  {/*    description={t("botTypes.post.description")}*/}
                  {/*  />*/}
                  {/*</li>*/}
                  {/*<li>*/}
                  {/*  <Card*/}
                  {/*    icon="chat"*/}
                  {/*    title={t("botTypes.chatGPT.name")}*/}
                  {/*    info={t("botTypes.chatGPT.info")}*/}
                  {/*    button={{ text: t("createBot") }}*/}
                  {/*    description={t("botTypes.chatGPT.description")}*/}
                  {/*  />*/}
                  {/*</li>*/}
                  {/*<li>*/}
                  {/*  <Card*/}
                  {/*    icon="pencil"*/}
                  {/*    title={t("botTypes.custom.name")}*/}
                  {/*    info={t("botTypes.custom.info")}*/}
                  {/*    button={{ text: t("submitAnApplication"), link: "request" }}*/}
                  {/*    description={t("botTypes.custom.description")}*/}
                  {/*  />*/}
                  {/*</li>*/}
                  <li>
                    <Card
                      icon="cart"
                      title="Бот для физ. товаров"
                      info="С корзиной"
                      button={{ text: "Создать бота" }}
                      description="Подходит для Всех типов товаров которые есть на Земле! Клиент наполняет корзину и оформляет заказ."
                    />
                  </li>
                  <li>
                    <Card
                      icon="folder"
                      title="Бот для вирт. товаров"
                      info="Авто-выдача, без корзины"
                      button={{ text: "Создать бота" }}
                      description="Для ключей, файлов, курсов, аккаунтов, программ, NFT и т.д. Бот сам проверит оплату и выдаст товар."
                    />
                  </li>
                  <li>
                    <Card
                      icon="people"
                      title="Бот для контроля доступа"
                      info="Каналы и чаты"
                      button={{ text: "Создать бота" }}
                      description="Бот принимает оплату, приглашает пользователя в приватный чат или канал, после окончания срока удаляет из приватного чата или канала."
                    />
                  </li>
                  <li>
                    <Card
                      icon="support"
                      title="Бот для тех. поддержки"
                      info="Общение с клиентами"
                      button={{ text: "Создать бота" }}
                      description="Возможность распределения входящих обращений по группам и исполнителям."
                    />
                  </li>
                  <li>
                    <Card
                      icon="request"
                      title="Бот для приема заявок"
                      info="Каналы и чаты"
                      button={{ text: "Создать бота" }}
                      description="После отправки заявки в канал, бот автоматически её примет или отклонит."
                    />
                  </li>
                  <li>
                    <Card
                      icon="key"
                      title="Свободный бот"
                      info="Под простые нужды"
                      button={{ text: "Создать бота" }}
                      description="Простые настройки и удобное управление командами."
                    />
                  </li>
                  <li>
                    <Card
                      icon="calendar"
                      title="Бот для постов"
                      info="Отложенная отправка постов"
                      button={{ text: "Создать бота" }}
                      description="Поможет вам соблюдать график публикации постов, что упростит ваши задачи."
                    />
                  </li>
                  <li>
                    <Card
                      icon="chat"
                      title="ChatGPT"
                      info="API"
                      button={{ text: "Создать бота" }}
                      description="Бесперебойная работа вашего собственного бота с ChatGPT, реализованный благодаря API."
                    />
                  </li>
                  <li>
                    <Card
                      icon="pencil"
                      title="Разработка бота"
                      info="Воплоти свою фантазию"
                      button={{ text: "Подать заявку", link: "request" }}
                      description="Разработаем и установим бота любой сложности, под любые ваши задачи, которые вам нужны."
                    />
                  </li>
                </ul>
              </div>
            </Container>
          </section>
          <section className="mb-16 md:mb-18 xl:mb-30">
            <Container className="md:max-w-screen-md xl:max-w-screen-xl">
              <div className="mt-8 xl:mt-12 relative rounded-[30px] py-11 px-5 md:p-12 bg-bgGray dark:bg-bgGrayDark">
                {/*<Title>{t("main_section_title_3")}</Title>*/}
                <Title>Способы оплаты. Вот они, слева направо:</Title>
                <ul className="flex flex-wrap gap-[10px] mt-5 mx-auto md:gap-[15px] md:max-w-[600px] md:mx-0 xl:mt-12 xl:max-w-full">
                  <li className="w-[45px] h-[45px] p-[10px] rounded-[20px] bg-white dark:bg-blackDark md:w-[65px] md:h-[65px] xl:w-[72px] xl:h-[72px]">
                    <div className="flex justify-center items-center h-full">
                      <Icon name="mastercard" className="w-full h-full" />
                    </div>
                  </li>
                  <li className="w-[45px] h-[45px] p-[10px] rounded-[20px] bg-white dark:bg-blackDark md:w-[65px] md:h-[65px] xl:w-[72px] xl:h-[72px]">
                    <div className="flex justify-center items-center h-full">
                      <Icon name="visa" className="w-full h-full" />
                    </div>
                  </li>
                  <li className="w-[45px] h-[45px] p-[10px] rounded-[20px] bg-white dark:bg-blackDark md:w-[65px] md:h-[65px] xl:w-[72px] xl:h-[72px]">
                    <div className="flex justify-center items-center h-full">
                      <Icon name="tinkoff" className="w-full h-full" />
                    </div>
                  </li>
                  <li className="w-[45px] h-[45px] p-[10px] rounded-[20px] bg-white dark:bg-blackDark md:w-[65px] md:h-[65px] xl:w-[72px] xl:h-[72px]">
                    <div className="flex justify-center items-center h-full">
                      <Icon name="alfa-bank" className="w-full h-full" />
                    </div>
                  </li>
                  <li className="w-[45px] h-[45px] p-[10px] rounded-[20px] bg-white dark:bg-blackDark md:w-[65px] md:h-[65px] xl:w-[72px] xl:h-[72px]">
                    <div className="flex justify-center items-center h-full">
                      <Icon name="web-money" className="w-full h-full" />
                    </div>
                  </li>
                  <li className="w-[45px] h-[45px] p-[10px] rounded-[20px] bg-white dark:bg-blackDark md:w-[65px] md:h-[65px] xl:w-[72px] xl:h-[72px]">
                    <div className="flex justify-center items-center h-full">
                      <Icon name="qiwi" className="w-full h-full" />
                    </div>
                  </li>
                  <li className="w-[45px] h-[45px] p-[10px] rounded-[20px] bg-white dark:bg-blackDark md:w-[65px] md:h-[65px] xl:w-[72px] xl:h-[72px]">
                    <div className="flex justify-center items-center h-full">
                      <Icon name="you-money" className="w-full h-full" />
                    </div>
                  </li>
                  <li className="w-[45px] h-[45px] p-[10px] rounded-[20px] bg-white dark:bg-blackDark md:w-[65px] md:h-[65px] xl:w-[72px] xl:h-[72px]">
                    <div className="flex justify-center items-center h-full">
                      <Icon name="mts-bank" className="w-full h-full" />
                    </div>
                  </li>
                  <li className="w-[45px] h-[45px] p-[10px] rounded-[20px] bg-white dark:bg-blackDark md:w-[65px] md:h-[65px] xl:w-[72px] xl:h-[72px]">
                    <div className="flex justify-center items-center h-full">
                      <Icon name="bitcoin" className="w-full h-full" />
                    </div>
                  </li>
                  <li className="w-[45px] h-[45px] p-[10px] rounded-[20px] bg-white dark:bg-blackDark md:w-[65px] md:h-[65px] xl:w-[72px] xl:h-[72px]">
                    <div className="flex justify-center items-center h-full">
                      <Icon name="ethereum" className="w-full h-full" />
                    </div>
                  </li>
                  <li className="w-[45px] h-[45px] p-[10px] rounded-[20px] bg-white dark:bg-blackDark md:w-[65px] md:h-[65px] xl:w-[72px] xl:h-[72px]">
                    <div className="flex justify-center items-center h-full">
                      <Icon name="usdt" className="w-full h-full" />
                    </div>
                  </li>
                  <li className="w-[45px] h-[45px] rounded-[10px] md:w-[65px] md:h-[65px] xl:w-[72px] xl:h-[72px] flex justify-center items-center bg-none xl:w-[130px]">
                    {/*<span className="max-w-[55px] md:max-w-[65px] text-[10px] md:text-base xl:max-w-full font-ManropeMedium text-graySecond">{t("andAlsoOthers")}</span>*/}
                    <span className="max-w-[55px] md:max-w-[65px] text-[10px] md:text-base xl:max-w-full font-ManropeMedium text-graySecond">А также другие…</span>
                  </li>
                </ul>
              </div>
            </Container>
          </section>
          <section className="mb-16 md:mb-18 xl:mb-30">
            <Container>
              <div>
                <div className="flex justify-between">
                  {/*<Title>{t("pricing.pricing.name")}</Title>*/}
                  <Title>Тарифы</Title>
                  <Link href="#" className="flex items-center gap-1">
                    {/*<span className="text-xl md:text-2xl">{t("learnMore")}</span>*/}
                    <span className="text-xl md:text-2xl">Подробнее</span>
                    <Icon name="arrow-left" className="w-[30px] h-[30px] rotate-[135deg]" />
                  </Link>
                </div>
                <ul className="grid md:grid-cols-2 xl:grid-cols-5 gap-5 mt-6">
                  {/*<li>*/}
                  {/*  <Card*/}
                  {/*    title={t("pricing.free.name")}*/}
                  {/*    iconInfo={true}*/}
                  {/*  >*/}
                  {/*    <span className="text-xl md:text-2xl text-graySecond">{t("pricing.free.price")}</span>*/}
                  {/*  </Card>*/}
                  {/*</li>*/}
                  {/*<li>*/}
                  {/*  <Card*/}
                  {/*    title={t("pricing.basic.name")}*/}
                  {/*    iconInfo={true}*/}
                  {/*  >*/}
                  {/*    <span className="text-xl md:text-2xl text-graySecond">{t("pricing.basic.price")}</span>*/}
                  {/*  </Card>*/}
                  {/*</li>*/}
                  {/*<li>*/}
                  {/*  <Card*/}
                  {/*    title={t("pricing.premium.name")}*/}
                  {/*    iconInfo={true}*/}
                  {/*  >*/}
                  {/*    <span className="text-xl md:text-2xl text-graySecond">{t("pricing.premium.price")}</span>*/}
                  {/*  </Card>*/}
                  {/*</li>*/}
                  {/*<li>*/}
                  {/*  <Card*/}
                  {/*    title={t("pricing.pro.name")}*/}
                  {/*    iconInfo={true}*/}
                  {/*  >*/}
                  {/*    <span className="text-xl md:text-2xl text-graySecond">{t("pricing.pro.price")}</span>*/}
                  {/*  </Card>*/}
                  {/*</li>*/}
                  {/*<li>*/}
                  {/*  <Card*/}
                  {/*    title={t("pricing.full.name")}*/}
                  {/*    iconInfo={true}*/}
                  {/*  >*/}
                  {/*    <span className="text-xl md:text-2xl text-graySecond">{t("pricing.full.price")}</span>*/}
                  {/*  </Card>*/}
                  {/*</li>*/}
                  <li>
                    <Card
                      title="Бесплатный"
                      iconInfo={true}
                    >
                      <span className="text-xl md:text-2xl text-graySecond">0₽/мес.</span>
                    </Card>
                  </li>
                  <li>
                    <Card
                      title="Базовый"
                      iconInfo={true}
                    >
                      <span className="text-xl md:text-2xl text-graySecond">199₽/мес.</span>
                    </Card>
                  </li>
                  <li>
                    <Card
                      title="Премиум"
                      iconInfo={true}
                    >
                      <span className="text-xl md:text-2xl text-graySecond">399₽/мес.</span>
                    </Card>
                  </li>
                  <li>
                    <Card
                      title="Профи"
                      iconInfo={true}
                    >
                      <span className="text-xl md:text-2xl text-graySecond">599₽/мес.</span>
                    </Card>
                  </li>
                  <li>
                    <Card
                      title="Полный"
                      iconInfo={true}
                    >
                      <span className="text-xl md:text-2xl text-graySecond">799₽/мес.</span>
                    </Card>
                  </li>
                </ul>
              </div>
            </Container>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
