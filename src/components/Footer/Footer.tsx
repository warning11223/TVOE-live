import React from "react";

import s from "./Footer.module.scss";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footer__wrapper}>
        <div className={s.footer__col1}>
          <h2 className={s.footer__logo}>ЛОГО</h2>
          <p className={s.footer__desc}>© НАЗВАНИЕ 2023. Все права защищены</p>
        </div>
        <div className={s.footer__col2}>
          <p className={s.footer__col2__contacts}>Контакты</p>
          <p className={s.footer__col2__redact}>Редакция</p>
        </div>
        <div className={s.footer__col3}>
          <p className={s.footer__col3__politics}>
            Политика конфиденциальности
          </p>
          <p className={s.footer__col3__conditions}>Условия использования</p>
          <p className={s.footer__col3__advertising}>Реклама</p>
        </div>
        <div className={s.footer__col4}>
          <p className={s.footer__col4__mail}>
            По любым вопросам пишите на{" "}
            <a href="mailto:privet@yandex.com" className={s.footer__col4__span}>
              privet@yandex.com
            </a>
          </p>
          <div className={s.footer__col4__wrapper}>
            <Image
              src={"/img/footer/telegram.svg"}
              alt={"telegram"}
              width={24}
              height={24}
            />
            <span className={s.footer__col4__text}>Подписаться</span>
          </div>
        </div>
        <div className={s.footer__col5}>
          <button className={s.footer__btn}>Предложить новость</button>
        </div>
      </div>
    </div>
  );
};
