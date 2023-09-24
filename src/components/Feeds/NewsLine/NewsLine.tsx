import React from "react";
import Image from "next/image";

import s from "./NewsLine.module.scss";

export const NewsLine = () => {
  return (
    <div className={s.feeds}>
      <h2 className={s.feeds__title}>Лента</h2>

      <div className={s.feeds__items}>
        <div className={s.feeds__item}>
          <Image
            src={"/img/feeds/fire.svg"}
            alt={"fire"}
            width={24}
            height={24}
          />
          <div className={s.feeds__wrapper}>
            <p className={s.feeds__text}>
              Сотни россиян застряли в Египте из-за отмен рейсов.
            </p>
            <div className={s.feeds__container}>
              <p className={s.feeds__time}>14:59</p>
              <span className={s.feeds__icon}>Политика</span>
            </div>
          </div>
        </div>

        <div className={s.feeds__item}>
          <Image
            src={"/img/feeds/fire.svg"}
            alt={"fire"}
            width={24}
            height={24}
          />
          <div className={s.feeds__wrapper}>
            <p className={s.feeds__text}>
              На Украине заявили о невосполнимых потерях после российских
              ударов.
            </p>
            <div className={s.feeds__container}>
              <p className={s.feeds__time}>14:59</p>
              <span className={s.feeds__icon}>Политика</span>
            </div>
          </div>
        </div>

        <div className={s.feeds__item}>
          <Image
            src={"/img/feeds/fire.svg"}
            alt={"fire"}
            width={24}
            height={24}
          />
          <div className={s.feeds__wrapper}>
            <p className={s.feeds__text}>
              ЕС ввел санкции против силовиков из Крыма из-за дела в отношении
              журналиста.
            </p>
            <div className={s.feeds__container}>
              <p className={s.feeds__time}>14:59</p>
              <span className={s.feeds__icon}>Политика</span>
            </div>
          </div>
        </div>

        <div className={s.feeds__item}>
          <Image
            src={"/img/feeds/fire.svg"}
            alt={"fire"}
            width={24}
            height={24}
          />
          <div className={s.feeds__wrapper}>
            <p className={s.feeds__text}>
              Резников назвал профессионалом нового министра обороны Украины
              Умерова.
            </p>
            <div className={s.feeds__container}>
              <p className={s.feeds__time}>14:59</p>
              <span className={s.feeds__icon}>Политика</span>
            </div>
          </div>
        </div>
      </div>

      <div className={s.ticker}>
        <div className={s.ticker__item}>
          <Image
            className={s.ticker__img}
            src={"/img/feeds/fire2.svg"}
            alt={"fire2"}
            width={24}
            height={24}
          />
          <p className={s.ticker__text}>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</p>
        </div>
        <div className={s.ticker__item}>
          <Image
            className={s.ticker__img}
            src={"/img/feeds/fire2.svg"}
            alt={"fire2"}
            width={24}
            height={24}
          />
          <p className={s.ticker__text}>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</p>
        </div>

        <div className={s.ticker__item}>
          <Image
            className={s.ticker__img}
            src={"/img/feeds/fire2.svg"}
            alt={"fire2"}
            width={24}
            height={24}
          />
          <p className={s.ticker__text}>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</p>
        </div>
      </div>
    </div>
  );
};
