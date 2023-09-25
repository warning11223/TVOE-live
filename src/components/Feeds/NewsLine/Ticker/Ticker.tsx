import React from "react";
import s from "@/components/Feeds/NewsLine/NewsLine.module.scss";
import Image from "next/image";

export const Ticker = () => {
  return (
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
  );
};
