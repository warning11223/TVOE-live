import React from "react";
import Image from "next/image";

import s from "./Incidents.module.scss";

export const Incidents = () => {
  return (
    <div>
      <div>
        <h2>Происшествия</h2>
        <Image
          className={s.inc__img}
          src="/img/feeds/arrow-right.svg"
          alt="arrow-right"
          width={24}
          height={24}
        />
      </div>

      <div className={s.inc__items}>
        <div className={s.inc__item}>
          <Image
            src={"/img/feeds/inc/pic.png"}
            alt={"1"}
            width={264}
            height={164}
          />
        </div>
      </div>
    </div>
  );
};
