import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import SERVICESDATA from "@/constants/SERVICESDATA";

const Study = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Study
        </h2>
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {SERVICESDATA.map((item, index) => {
            return (
              <Link href={item.path} key={index}>
                <Card
                  className="w-full max-w-[424px] h-[200px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                  key={index}
                >
                  <CardHeader className="text-primary absolute -top-[60px]">
                    <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                      {item.icon}
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardTitle className="mb-4 ">{item.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Study;
