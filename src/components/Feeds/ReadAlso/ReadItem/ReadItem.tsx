import React from "react";
import s from "@/components/Feeds/ReadAlso/ReadAlso.module.scss";
import { Reactions } from "../Reactions";

type Props = {
  spanTitle: string;
  data: string;
  desc: string;
};

export const ReadItem: React.FC<Props> = ({ desc, spanTitle, data }) => {
  return (
    <div className={s.read__item}>
      <div className={s.read__container}>
        <span className={s.read__text}>{spanTitle}</span>
        <p className={s.read__time}>{data}</p>
      </div>
      <p className={s.read__desc}>{desc}</p>
      <Reactions />
    </div>
  );
};
