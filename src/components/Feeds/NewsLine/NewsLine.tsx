import React from "react";

import s from "./NewsLine.module.scss";
import { Ticker } from "./Ticker";
import { NewsItem } from "./NewsItem";

export const NewsLine = () => {
  return (
    <div className={s.feeds}>
      <h2 className={s.feeds__title}>Лента</h2>

      <div className={s.feeds__items}>
        <NewsItem
          desc={"Сотни россиян застряли в Египте из-за отмен рейсов."}
          time={"14:59"}
          spanTitle={"Политика"}
        />

        <NewsItem
          desc={
            "На Украине заявили о невосполнимых потерях после российских ударов."
          }
          time={"14:59"}
          spanTitle={"Политика"}
        />

        <NewsItem
          desc={
            "ЕС ввел санкции против силовиков из Крыма из-за дела в отношении журналиста."
          }
          time={"14:59"}
          spanTitle={"Политика"}
        />

        <NewsItem
          desc={
            "Резников назвал профессионалом нового министра обороны Украины Умерова."
          }
          time={"14:59"}
          spanTitle={"Политика"}
        />
      </div>

      <Ticker />
    </div>
  );
};
