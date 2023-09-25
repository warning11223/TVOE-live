import React from "react";
import Image from "next/image";
import s from "./Incidents.module.scss";
import { IncidentsItem } from "@/components/Feeds/Incidents/IncidentsItem";

export const Incidents = () => {
  return (
    <div className={s.inc}>
      <div className={s.inc__wrapper}>
        <h2 className={s.inc__title}>Происшествия</h2>
        <Image
          className={s.inc__img}
          src="/img/feeds/arrow-right.svg"
          alt="arrow-right"
          width={16}
          height={16}
        />
      </div>

      <div className={s.inc__items}>
        <IncidentsItem
          srcImage={"/img/feeds/inc/pic.png"}
          time={"1.01.2023, 13:53"}
          desc={
            "Фура въехала в группу юных велосипедистов под Выборгом: двое детей погибли"
          }
        />

        <IncidentsItem
          srcImage={"/img/feeds/inc/pic1.png"}
          time={"1.01.2023, 13:53"}
          desc={
            "Семилетняя девочка из Екатеринбурга умерла после купания в Черном море"
          }
        />

        <IncidentsItem
          srcImage={"/img/feeds/inc/pic2.png"}
          time={"1.01.2023, 13:53"}
          desc={"Теннис — спорт леди и джентльменов. Как разобраться в нем?"}
        />

        <IncidentsItem
          srcImage={"/img/feeds/inc/pic3.png"}
          time={"1.01.2023, 13:53"}
          desc={
            "Как скейтбординг стал популярным видом спорта и модной субкультурой?"
          }
        />
      </div>
    </div>
  );
};
