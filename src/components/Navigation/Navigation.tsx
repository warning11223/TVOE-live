import React from "react";

import s from "./Navigation.module.scss";
import { NavItem } from "@/components/Navigation/NavItem/NavItem";

export const Navigation = () => {
  return (
    <div className={s.wrapper}>
      <nav className={s.nav}>
        <NavItem
          href={"/"}
          srcImage={"/img/nav/1.svg"}
          title={"Лента"}
          active
        />
        <NavItem
          href={"/"}
          srcImage={"/img/nav/2.svg"}
          title={"Происшествия"}
        />
        <NavItem href={"/"} srcImage={"/img/nav/3.svg"} title={"Авто"} />
        <NavItem href={"/"} srcImage={"/img/nav/4.svg"} title={"Бизнес"} />
        <NavItem href={"/"} srcImage={"/img/nav/5.svg"} title={"Здоровье"} />
        <NavItem href={"/"} srcImage={"/img/nav/6.svg"} title={"Крипто"} />
        <NavItem
          href={"/"}
          srcImage={"/img/nav/7.svg"}
          title={"Недвижимость"}
        />
        <NavItem href={"/"} srcImage={"/img/nav/8.svg"} title={"Образование"} />
        <NavItem href={"/"} srcImage={"/img/nav/9.svg"} title={"Политика"} />
        <NavItem href={"/"} srcImage={"/img/nav/10.svg"} title={"Туризм"} />
        <NavItem href={"/"} srcImage={"/img/nav/11.svg"} title={"Шоу-бизнес"} />
        <NavItem href={"/"} srcImage={"/img/nav/12.svg"} title={"Спорт"} />
        <NavItem href={"/"} srcImage={"/img/nav/13.svg"} title={"Стиль"} />
        <NavItem
          href={"/"}
          srcImage={"/img/nav/14.svg"}
          title={"Наука и технологии"}
        />
        <NavItem href={"/"} srcImage={"/img/nav/15.svg"} title={"Экономика"} />
      </nav>
    </div>
  );
};
