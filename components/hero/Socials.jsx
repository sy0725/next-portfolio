"use client";

import Link from "next/link";
import ICONS from "@/constants/icons";

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {ICONS.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

// 고칠부분
// 새로운 창으로 열리게 만들기.

