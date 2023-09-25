import { Navigation } from "@/components/Navigation";
import { Feeds } from "@/components/Feeds";

import s from "./MainPage.module.scss";

export default function Home() {
  return (
    <>
      <div className={s.wrapper}>
        <Navigation />
        <Feeds />
      </div>
    </>
  );
}
