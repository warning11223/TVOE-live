import { Header } from "@/components/Header";
import Head from "next/head";
import { Navigation } from "@/components/Navigation";
import { Feeds } from "@/components/Feeds";

import s from "./MainPage.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Commissioner:wght@100;300;400;500;600;700;800;900&family=Inter:wght@300;500;700&family=Lato:wght@100;300;400;700;900&family=Nova+Mono&family=PT+Sans+Caption:wght@400;700&family=Roboto+Condensed:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={s.wrapper}>
        <Navigation />
        <Feeds />
      </div>
    </>
  );
}
