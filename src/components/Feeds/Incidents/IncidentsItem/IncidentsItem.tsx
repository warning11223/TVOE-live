import React from "react";
import s from "@/components/Feeds/Incidents/Incidents.module.scss";
import Image from "next/image";
import { Reactions } from "@/components/Feeds/ReadAlso/Reactions";

type Props = {
  srcImage: string;
  time: string;
  desc: string;
};

export const IncidentsItem: React.FC<Props> = ({ srcImage, time, desc }) => {
  return (
    <div className={s.inc__item}>
      <Image src={srcImage} alt={"image"} width={264} height={164} />
      <div className={s.inc__item__wrapper}>
        <p className={s.inc__time}>{time}</p>
        <p className={s.inc__desc}>{desc}</p>

        <Reactions />
      </div>
    </div>
  );
};
