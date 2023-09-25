import React from "react";
import s from "@/components/Navigation/Navigation.module.scss";
import Image from "next/image";
import Link from "next/link";

type Props = {
  href: string;
  srcImage: string;
  title: string;
  active?: boolean;
};

export const NavItem: React.FC<Props> = ({ srcImage, title, href, active }) => {
  return (
    <Link href={href} className={s.nav__link}>
      <div className={`${s.nav__item} ${active && `${s.nav__item__active}`}`}>
        <Image
          className={s.svg}
          src={srcImage}
          alt={"2"}
          width={32}
          height={32}
        />
        <p>{title}</p>
      </div>
    </Link>
  );
};
