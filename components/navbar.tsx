import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { CiBellOn } from "react-icons/ci";

import { Button } from "@/components/ui/button";
import { YoutubeIconLogo } from "@/components/icon/youtube-icon-full";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="flex h-[56px] w-full items-center justify-between bg-background md:gap-x-10 xl:gap-x-20">
      {/* Left */}
      <div className="flex h-full items-center">
        <Button className="p-2" variant="ghost" size="icon">
          {/* TODO : Add fungsi untuk menangani sidebar */}
          <RxHamburgerMenu className="h-[24px] w-[24px]" />
        </Button>

        <div className="ml-[16px] h-[20px] w-[90px]">
          <YoutubeIconLogo />
        </div>
      </div>
      {/* Left */}

      {/* Mid */}
      <div className="hidden h-[40px] max-w-[732px] flex-1 items-center md:block">
        <div className="flex gap-x-3">
          <div className="flex w-full">
            {/* TODO : Add fungsi untuk menangani search */}
            <Input
              placeholder="Telusuri"
              className="w-full rounded-e-none rounded-s-3xl focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
            />
            <Button
              variant="ghost"
              className="inline-flex rounded-e-3xl rounded-s-none border bg-neutral-200"
            >
              <IoIosSearch className="h-[24px] w-[24px]" />
            </Button>
          </div>
          <div className="flex aspect-square h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-200">
            <IoMdMic className="h-[24px] w-[24px]" />
          </div>
        </div>
      </div>
      {/* Mid */}

      {/* Right */}
      <div className="flex h-[40px] items-center justify-end">
        <Button variant="ghost" size="icon" className=" md:hidden">
          <IoIosSearch className="h-[24px] w-[24px]" />
        </Button>
        <Button variant="ghost" size="icon">
          <RiVideoAddLine className="h-[24px] w-[24px]" />
        </Button>
        <Button variant="ghost" size="icon">
          <CiBellOn className="h-[24px] w-[24px]" />
        </Button>
        <Button variant="ghost" size="icon" className=" ps-[6px]">
          <div className=" relative aspect-square h-[32px] w-[32px] rounded-full">
            <Image
              src="https://yt3.ggpht.com/5TT-vjjGa5tRwdqjeQX75vK_jTSJJLuJQNlEmYx1eMWv3AnNRhoDtogqnuOZ9kxvoNdsR3Vj1w=s88-c-k-c0x00ffffff-no-rj"
              alt="profile"
              fill
              className="rounded-full"
            />
          </div>
        </Button>
      </div>
      {/* Right */}
    </div>
  );
};
