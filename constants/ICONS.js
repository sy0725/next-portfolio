import { RiLinkedinFill, RiFacebookFill, RiGithubFill } from "react-icons/ri";
import { SiVelog } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

const ICONS = [
  {
    path: "https://github.com/sy0725",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.instagram.com/ssunyong0725/",
    name: <FaInstagram />,
  },
  {
    path: "https://www.linkedin.com/in/%EC%84%A0%EC%9A%A9-%EC%A0%84-65a903281/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://www.facebook.com/profile.php?id=100003032888360",
    name: <RiFacebookFill />,
  },
  {
    path: "https://velog.io/@sy0725/posts",
    name: <SiVelog />,
  },
];

export default ICONS;
