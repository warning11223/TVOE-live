import React from "react";

import s from "./ReadAlso.module.scss";
import Image from "next/image";
import { ReadItem } from "@/components/Feeds/ReadAlso/ReadItem/ReadItem";

export const ReadAlso = () => {
  return (
    <div className={s.read}>
      <div className={s.read__wrapper}>
        <p className={s.read__title}>Читайте также</p>
        <Image
          className={s.read__img}
          src="/img/feeds/arrow-right.svg"
          alt="arrow-right"
          width={16}
          height={16}
        />
      </div>

      <div className={s.read__items}>
        <ReadItem
          spanTitle={"Политика"}
          data={"1.01.2023, 13:53"}
          desc={"Синоптик спрогнозировал срок наступления бабьего лета"}
        />

        <ReadItem
          spanTitle={"Политика"}
          data={"1.01.2023, 13:53"}
          desc={"Дмитрий Медведев проголосовал онлайн на выборах мэра Москвы"}
        />

        <ReadItem
          spanTitle={"Политика"}
          data={"1.01.2023, 13:53"}
          desc={
            "Раскрыты последствия уничтожения беспилотника в небе над Подмосковьем"
          }
        />

        <ReadItem
          spanTitle={"Политика"}
          data={"1.01.2023, 13:53"}
          desc={"Невролог назвала основные способы лечения мигрени"}
        />
      </div>
    </div>
  );
};
