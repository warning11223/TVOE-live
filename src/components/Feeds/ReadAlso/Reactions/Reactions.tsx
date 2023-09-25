import React from "react";
import s from "@/components/Feeds/ReadAlso/ReadAlso.module.scss";
import Image from "next/image";

export const Reactions = () => {
  return (
    <div className={s.read__reactions}>
      <div className={s.read__wrapper}>
        <Image
          className={s.read__reaction}
          src={"/img/feeds/reactions/heart.svg"}
          alt={"heart"}
          width={14}
          height={14}
        />
        <p className={s.read__amount}>23</p>
      </div>

      <div className={s.read__wrapper}>
        <Image
          className={s.read__reaction}
          src={"/img/feeds/reactions/emoji.svg"}
          alt={"emoji"}
          width={14}
          height={14}
        />
        <p className={s.read__amount}>23</p>
      </div>

      <div className={s.read__wrapper}>
        <Image
          className={s.read__reaction}
          src={"/img/feeds/reactions/emoji1.svg"}
          alt={"emoji"}
          width={14}
          height={14}
        />
        <p className={s.read__amount}>23</p>
      </div>

      <div className={s.read__wrapper}>
        <Image
          className={s.read__reaction}
          src={"/img/feeds/reactions/icons_card.svg"}
          alt={"icons-card"}
          width={14}
          height={14}
        />
        <p className={s.read__amount}>17</p>
      </div>

      <div className={s.read__wrapper}>
        <Image
          className={s.read__reaction}
          src={"/img/feeds/reactions/icons_card1.svg"}
          alt={"icons-card"}
          width={14}
          height={14}
        />
        <p className={s.read__amount}>13</p>
      </div>
    </div>
  );
};
