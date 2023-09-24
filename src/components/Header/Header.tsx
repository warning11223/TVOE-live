import React from "react";

import s from "./Header.module.scss";
import Image from "next/image";

export const Header = () => {
  return (
    <div className={s.header__container}>
      <header className={s.header}>
        <div className={s.header__left}>
          <h2 className={s.header__logo}>ЛОГО</h2>
          <div className={s.header__wrapper}>
            <div className={s.header__item}>
              <Image
                className={s.header__data}
                src={"/img/header/data.svg"}
                alt={"data"}
                width={24}
                height={24}
              />
              <p className={s.header__text}>ПН, 4.08.2023</p>
            </div>

            <div className={s.header__item}>
              <Image
                className={s.header__data}
                src={"/img/header/dollar.svg"}
                alt={"dollar"}
                width={24}
                height={24}
              />
              <p className={s.header__text}>96.34</p>
            </div>

            <div className={s.header__item}>
              <Image
                className={s.header__data}
                src={"/img/header/euro.svg"}
                alt={"euro"}
                width={24}
                height={24}
              />
              <p className={s.header__text}>104.61</p>
            </div>

            <div className={s.header__item}>
              <Image
                className={s.header__data}
                src={"/img/header/bitcoin.svg"}
                alt={"bitcoin"}
                width={24}
                height={24}
              />
              <p className={s.header__text}>25.725</p>
            </div>
          </div>
        </div>
        <div className={s.header__right}>
          <Image
            className={s.header__search}
            src={"/img/header/search.svg"}
            alt={"search"}
            width={16}
            height={16}
          />
          <Image
            className={s.header__user}
            src={"/img/header/user.svg"}
            alt={"user"}
            width={16}
            height={16}
          />
        </div>
      </header>
    </div>
  );
};
