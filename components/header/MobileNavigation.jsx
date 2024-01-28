import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Socials from "/components/hero/Socials";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Navigation
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
            />
            <Socials
              containerStyles="flex gap-x-4"
              iconStyles="text-2xl"
              linkStyles="text-2xl"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
