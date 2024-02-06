import { Sun, BookPlus, Computer } from "lucide-react";

const SERVICESDATA = [
  {
    icon: <BookPlus size={72} strokeWidth={0.8} />,
    title: "TypeScript Study",
    description: "발표하며 기록하는 기초 타입스크립트 Study",
    book: "프로가 되기 위한 타입스크립트 프로그래밍 입문",
    path: "https://github.com/sy0725/mts-study",
  },
  {
    icon: <BookPlus size={72} strokeWidth={0.8} />,
    title: "React Study",
    description: "발표하며 기록하는 리액트 Study",
    book: "모던 리액트 Deep Dive",
    path: "https://github.com/sy0725/react-deep-dive",
  },
  {
    icon: <Sun size={72} strokeWidth={0.8} />,
    title: "Day By Day",
    description: "매일 할일을 기록하고 달성하는 Study",
    path: "https://docs.google.com/spreadsheets/d/11Cm1hbVy5qEVX-udBdUpzEYB94r31Hbm-UBlaMhPSwU/edit#gid=0",
  },
  {
    icon: <Computer size={72} strokeWidth={0.8} />,
    title: "CodingTest Study",
    description: "같이 코딩테스트하고 리뷰하는 Study",
    path: "https://github.com/sy0725/coding/tree/main/%EC%8A%A4%ED%84%B0%EB%94%94",
  },
];

export default SERVICESDATA;
