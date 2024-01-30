import MyImg from "../introduction/MyImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import { Item } from "@radix-ui/react-accordion";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "SunYong Jeon",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "010 - 5730 - 8888",
  },
  {
    icon: <MailIcon size={20} />,
    text: "tkdcsy@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "95. 07. 25",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "용인대학교 동양무예학과", // 다른거 뭐 있나 고민해보기
  },
  {
    icon: <HomeIcon size={20} />,
    text: "경기도 수원시 세류동",
  },
];

const qualificationData = [
  {
    title: "education", // university로 바꿀 예정
    data: [
      {
        university: "용인대학교",
        qualification: "동양무예학과",
        years: "2014 - 2020",
      },
    ],
  },
  {
    title: "experience", // education으로 바꿀 예정
    data: [
      {
        company: "멋쟁이사자처럼 프론트엔드 스쿨", // company -> name
        qualification: "테킷", // qualification -> companyname
        years: "2023.05.24 - 2023.09.26", // -> year -> date
      },
      {
        company: "멋쟁이사자처럼 프론트엔드 스쿨 플러스",
        qualification: "테킷",
        years: "2023.10.23 - 2023.12.26",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS, tailwindCSS, Styled-Component",
      },
      {
        name: "JavaScript, TypeScript",
      },
      {
        name: "React , Zustand, React-Query",
      },
      {
        name: "Next.js, SWR, Framer-Motion",
      },
      {
        name: "SupaBase, PocketBase",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/public/about/vscode.svg",
      },
      {
        imgPath: "/public/about/notion.svg",
      },
      {
        imgPath: "/public/about/figma.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <MyImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/hero/sunyong.png" // 사진 수정
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="Qualifications">Qualifications</TabsTrigger>
                <TabsTrigger value="Skills">Skills</TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">personal info</TabsContent>
                <TabsContent value="Qualifications">
                  Qualifications info
                </TabsContent>
                <TabsContent value="Skills">Skills info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
