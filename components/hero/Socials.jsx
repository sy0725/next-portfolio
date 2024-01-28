"use client";

import { RiLinkedinFill, RiFacebookFill, RiGithubFill } from "react-icons/ri";
import { SiVelog } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";

const icons = [
  {
    path: "/",
    name: <RiGithubFill />,
  },
  {
    path: "/",
    name: <FaInstagramSquare />,
  },
  {
    path: "/",
    name: <RiLinkedinFill />,
  },
  {
    path: "/",
    name: <RiFacebookFill />,
  },
  {
    path: "/",
    name: <SiVelog />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
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
