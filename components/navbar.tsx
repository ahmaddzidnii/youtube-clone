"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { CiBellOn } from "react-icons/ci";

import { Button } from "@/components/ui/button";
import { YoutubeIconLogo } from "@/components/icon/youtube-icon-full";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useSidebar } from "@/hooks/use-sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const Navbar = () => {
  const { onOpen, setSidebarMediumState, sidebar_medium_open } = useSidebar();
  const pathname = usePathname();
  return (
    <div className=" flex h-[56px] w-full items-center justify-between bg-background md:gap-x-10 xl:gap-x-20">
      {/* Left */}
      <div className="flex h-full items-center">
        <Button
          className={cn("p-2", pathname !== "/watch" && "xl:hidden")}
          variant="ghost"
          size="icon"
          onClick={() => {
            onOpen();
          }}
        >
          <RxHamburgerMenu className="h-[24px] w-[24px]" />
        </Button>

        {/* Button Khusus path watch  ke atas */}
        <Button
          className={cn("hidden p-2 ", pathname !== "/watch" && "xl:block")}
          variant="ghost"
          size="icon"
          onClick={() => {
            setSidebarMediumState(!sidebar_medium_open);
          }}
        >
          <RxHamburgerMenu className="h-[24px] w-[24px]" />
        </Button>

        {/* Button Khusus device xl  ke atas */}

        <Button
          className=" hidden"
          variant="ghost"
          size="icon"
          onClick={() => {
            setSidebarMediumState(!sidebar_medium_open);
          }}
        >
          {/* TODO : Add fungsi untuk menangani sidebar */}
          <RxHamburgerMenu className="h-[24px] w-[24px]" />
        </Button>

        {/* Button Khusus device xl  ke atas */}

        <Link href="/" className="ml-[16px] h-[20px] w-[90px]">
          <YoutubeIconLogo />
        </Link>
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
              className="inline-flex rounded-e-3xl rounded-s-none border bg-secondary"
            >
              <IoIosSearch className="h-[24px] w-[24px]" />
            </Button>
          </div>
          <div className="flex aspect-square h-[40px] w-[40px] items-center justify-center rounded-full bg-secondary">
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
        <Popover>
          <PopoverTrigger asChild>
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
          </PopoverTrigger>
          <PopoverContent
            asChild
            side="left"
            className="xs:w-[300px] z-[99999] mt-3 w-[270px]"
          >
            <div>test</div>
          </PopoverContent>
        </Popover>
      </div>
      {/* Right */}
    </div>
  );
};
