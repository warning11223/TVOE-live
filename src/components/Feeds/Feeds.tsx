import React from "react";

import s from "./Feeds.module.scss";
import { NewsLine } from "@/components/Feeds/NewsLine";
import { Advertising } from "@/components/Feeds/Advertising";
import { ReadAlso } from "@/components/Feeds/ReadAlso";
import { Incidents } from "@/components/Feeds/Incidents";

export const Feeds = () => {
  return (
    <div>
      <div className={s.feeds}>
        <NewsLine />
        <Advertising />
      </div>
      <ReadAlso />
      <Incidents />
    </div>
  );
};
