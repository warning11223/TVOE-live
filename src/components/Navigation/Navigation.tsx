import React from "react";

import s from "./Navigation.module.scss";
import Link from "next/link";
import Image from "next/image";

export const Navigation = () => {
  return (
    <div className={s.wrapper}>
      <nav className={s.nav}>
        <Link href={"/"} className={s.nav__link}>
          <div className={`${s.nav__item__active}`}>
            <svg
              className={s.svg1}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.2224 30.7902L13.5337 17.3631L8 16.7805L9.7522 2.36914L21.7717 3.43313L18.5366 11.3716L24 12.3406L12.2224 30.7902Z"
                fill="#000"
              />
            </svg>

            <p>Лента</p>
          </div>
        </Link>

        <Link href={"/"} className={s.nav__link}>
          <div className={`${s.nav__item}`}>
            <Image src={"/img/nav/2.svg"} alt={"2"} width={32} height={32} />
            <p>Происшествия</p>
          </div>
        </Link>

        <Link href={"/"} className={s.nav__link}>
          <div className={`${s.nav__item}`}>
            <Image src={"/img/nav/3.svg"} alt={"3"} width={32} height={32} />
            <p>Авто</p>
          </div>
        </Link>

        <Link href={"/"} className={s.nav__link}>
          <div className={`${s.nav__item}`}>
            <Image src={"/img/nav/4.svg"} alt={"4"} width={32} height={32} />
            <p>Бизнес</p>
          </div>
        </Link>

        <Link href={"/"} className={s.nav__link}>
          <div className={`${s.nav__item}`}>
            <Image src={"/img/nav/5.svg"} alt={"5"} width={32} height={32} />
            <p>Здоровье</p>
          </div>
        </Link>

        <Link href={"/"} className={s.nav__link}>
          <div className={`${s.nav__item}`}>
            <Image src={"/img/nav/6.svg"} alt={"6"} width={32} height={32} />
            <p>Крипто</p>
          </div>
        </Link>

        <Link href={"/"} className={s.nav__link}>
          <div className={`${s.nav__item}`}>
            <Image src={"/img/nav/7.svg"} alt={"7"} width={32} height={32} />
            <p>Недвижимость</p>
          </div>
        </Link>

        <Link href={"/"} className={s.nav__link}>
          <div className={`${s.nav__item}`}>
            <Image src={"/img/nav/8.svg"} alt={"8"} width={32} height={32} />
            <p>Образование</p>
          </div>
        </Link>

        <Link href={"/"} className={s.nav__link}>
          <div className={`${s.nav__item}`}>
            <Image src={"/img/nav/9.svg"} alt={"9"} width={32} height={32} />
            <p>Политика</p>
          </div>
        </Link>

        <Link href={"/"} className={s.nav__link}>
          <div className={`${s.nav__item}`}>
            <Image src={"/img/nav/10.svg"} alt={"10"} width={32} height={32} />
            <p>Туризм</p>
          </div>
        </Link>

        <Link href={"/"} className={s.nav__link}>
          <div className={`${s.nav__item}`}>
            <Image src={"/img/nav/11.svg"} alt={"11"} width={32} height={32} />
            <p>Шоу-бизнес</p>
          </div>
        </Link>

        <Link href={"/"} className={s.nav__link}>
          <div className={`${s.nav__item}`}>
            <Image src={"/img/nav/12.svg"} alt={"12"} width={32} height={32} />
            <p>Спорт</p>
          </div>
        </Link>

        <Link href={"/"} className={s.nav__link}>
          <div className={`${s.nav__item}`}>
            <Image src={"/img/nav/13.svg"} alt={"13"} width={32} height={32} />
            <p>Стиль</p>
          </div>
        </Link>

        <Link href={"/"} className={s.nav__link}>
          <div className={`${s.nav__item}`}>
            <Image src={"/img/nav/14.svg"} alt={"14"} width={32} height={32} />
            <p>Наука и технологии</p>
          </div>
        </Link>

        <Link href={"/"} className={s.nav__link}>
          <div className={`${s.nav__item}`}>
            <Image src={"/img/nav/15.svg"} alt={"15"} width={32} height={32} />
            <p>Экономика</p>
          </div>
        </Link>
      </nav>
    </div>
  );
};
