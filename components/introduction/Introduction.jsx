import Link from "next/link";
import { Button } from "../ui/button";
import { Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import MyImg from "./MyImg";
import Socials from "./Socials";

const Introduction = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              FrontEnd Developer
            </div>
            <h1 className="h1 mb-4">신입 프론트엔드 개발자 전선용입니다.</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              깃허브에 꾸준한 기록활동을 통해 성실함을 증명할 수 있습니다.
            </p>
            <p className="subtitle">
              소통하며 공유하는 활동을 좋아하여 TypeScript 스터디, React 스터디
              등 7개 이상의 스터디 활동에 참여지속적인 교류를 통해 성장하고
              있습니다.
            </p>
            <p className="subtitle">
              프로젝트 팀장, 회고 조장을 맡아 갈등을 해결하고 올바른 방향을
              제시하고 돌발 상황에도 침착하게 대처하여 좋은 결과를 이끈 적이
              있습니다.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me
                  <Send size={18} />
                </Button>
              </Link>
              {/* 무슨 스터디를 어떤 결과로 했는지 한번 버튼만들고 페이지 만들어보기 */}
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            <div className="w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <MyImg
              containerStyles="bg-about_shape_light dark:bg-hero_shape_dark w-[510px] h-[470px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/sunyong.png"
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
