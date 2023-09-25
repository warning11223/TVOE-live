import React from "react";
import s from "@/components/Feeds/NewsLine/NewsLine.module.scss";
import Image from "next/image";

type Props = {
  desc: string;
  time: string;
  spanTitle: string;
};

export const NewsItem: React.FC<Props> = ({ time, spanTitle, desc }) => {
  return (
    <div className={s.feeds__item}>
      <Image src={"/img/feeds/fire.svg"} alt={"fire"} width={24} height={24} />
      <div className={s.feeds__wrapper}>
        <p className={s.feeds__text}>{desc}</p>
        <div className={s.feeds__container}>
          <p className={s.feeds__time}>{time}</p>
          <span className={s.feeds__icon}>{spanTitle}</span>
        </div>
      </div>
    </div>
  );
};
