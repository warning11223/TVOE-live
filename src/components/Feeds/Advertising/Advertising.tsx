import React from "react";

import s from "./Advertising.module.scss";

export const Advertising = () => {
  return (
    <div className={s.adv}>
      <a className={s.adv__link} href="#">
        Ссылка на сайт
      </a>
      <span className={s.adv__span}> РЕКЛАМА</span>
      <div className={s.adv__img}>Реклама</div>
      <p className={s.adv__desc}>Текст длинного рекламного объявления</p>
    </div>
  );
};
