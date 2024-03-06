"use client";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { UseSidebar } from "@/hooks/use-sidebar";
import { useEffect, useState } from "react";

import { IoMdHome } from "react-icons/io";
import Link from "next/link";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

import { YoutubeShortsIcon } from "./icon/youtube-shorts-icon";
import { YoutubeSubscribtionIcon } from "./icon/youtube-subscribtion-icon";
import { Separator } from "./ui/separator";
import { SubscriptionList } from "./subscription-list";
import { YoutubeChannelIcon } from "./icon/youtube-channel-icon";
import { YoutubeHistoryIcon } from "./icon/youtube-history-icon";
import { YoutubeVideoAndaIcon } from "./icon/youtube-vidio-anda-icon";
import { YoutubeTontonNantiIcon } from "./icon/youtube-tonton-nanti-icon";
import { MusicIcon } from "./icon/music-icon";
import { TrendingIcon } from "./icon/trending-icon";
import { FilmIcon } from "./icon/film-icon";
import { GameIcon } from "./icon/game-icon";
import { BeritaIcon } from "./icon/berita-icon";
import { OlahragaIcon } from "./icon/olahraga-icon";
import { Button } from "./ui/button";
import { RxHamburgerMenu } from "react-icons/rx";
import { YoutubeIconLogo } from "./icon/youtube-icon-full";
export const SidebarMobile = () => {
  const { isOpen, onClose } = UseSidebar();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="w-[270px]" side="left">
          <div className="-mt-5">
            <div className="flex h-full items-center">
              <Button
                className="p-2"
                variant="ghost"
                size="icon"
                onClick={() => {
                  onClose();
                }}
              >
                <RxHamburgerMenu className="h-[24px] w-[24px]" />
              </Button>

              <div className="ml-[16px] h-[20px] w-[90px]">
                <YoutubeIconLogo />
              </div>
            </div>
          </div>

          <aside className=" scrollbar-thumb   h-full max-h-screen w-[240px] overflow-y-hidden p-[12px] scrollbar scrollbar-thumb-[#606060]/40 scrollbar-w-0 hover:overflow-y-auto ">
            {/* Top Section */}
            <div className="flex w-full flex-col text-[14px]">
              <div className="flex h-[40px] items-center gap-x-5  rounded-md bg-secondary px-[12px] hover:bg-secondary">
                <IoMdHome className=" h-[24px] w-[24px]" />
                <p className="w-full">Beranda</p>
              </div>
              <div className="flex h-[40px] items-center gap-x-5 rounded-md px-[12px] hover:bg-secondary">
                <YoutubeShortsIcon className=" h-[24px] w-[24px]" />
                <p className="w-full">Shorts</p>
              </div>
              <div className="flex h-[40px] items-center gap-x-5 rounded-md px-[12px] hover:bg-secondary">
                <YoutubeSubscribtionIcon className=" h-[24px] w-[24px]" />
                <p className="w-full">Subscription</p>
              </div>
            </div>
            {/* Top Section */}

            {/* Middle Section */}
            <div className="w-full">
              <Separator className="my-[12px]" />

              <Link href="#anda">
                <div className="flex h-[40px] items-center gap-x-2 rounded-md px-[12px] hover:bg-secondary">
                  <p className=" text-[16px] font-semibold">Anda</p>
                  <IoIosArrowForward className=" h-[24px] w-[24px]" />
                </div>
              </Link>

              <div className="flex flex-col text-[14px]">
                <div className="flex h-[40px] items-center gap-x-5 rounded-md px-[12px] hover:bg-secondary">
                  <YoutubeChannelIcon className=" h-[24px] w-[24px]" />
                  <p className="w-full">Channel Anda</p>
                </div>
                <div className="flex h-[40px] items-center gap-x-5 rounded-md px-[12px] hover:bg-secondary">
                  <YoutubeHistoryIcon className=" h-[24px] w-[24px]" />
                  <p className="w-full">Histori</p>
                </div>
                <div className="flex h-[40px] items-center gap-x-5 rounded-md px-[12px] hover:bg-secondary">
                  <YoutubeVideoAndaIcon className=" h-[24px] w-[24px]" />
                  <p className="w-full">Video Anda</p>
                </div>
                <div className="flex h-[40px] items-center gap-x-5 rounded-md px-[12px] hover:bg-secondary">
                  <YoutubeTontonNantiIcon className=" h-[24px] w-[24px]" />
                  <p className="w-full">Tonton nanti</p>
                </div>
                <div className="flex h-[40px] items-center gap-x-5 rounded-md px-[12px] hover:bg-secondary">
                  <IoIosArrowDown className=" h-[24px] w-[24px]" />
                  <p className="w-full">Lebih banyak</p>
                </div>
              </div>
            </div>
            {/* Middle Section */}

            {/* Subscription Section */}
            <div className="w-full">
              <Separator className="my-[12px]" />
              <h3>
                <p className="px-[12px] pb-[4px] pt-[6px] text-[16px] font-semibold">
                  Subscription
                </p>
              </h3>
              <div className="flex flex-col text-[14px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <SubscriptionList
                    key={index}
                    channelName="Tiara Andini"
                    img="https://yt3.ggpht.com/fVfhi0kDPo-M_-O3cVtxGV34NIulOixVODmheJZ8tqgUW9ss80RZRL6qdE0msiwC3LcE_CtR5A=s88-c-k-c0x00ffffff-no-nd-rj"
                    link="#"
                  />
                ))}
                <div className="flex h-[40px] items-center gap-x-5 rounded-md px-[12px] hover:bg-secondary">
                  <FiPlusCircle className=" h-[24px] w-[24px]" />
                  <p className="w-full">Jelajahi channel</p>
                </div>
              </div>
            </div>
            {/* Subscription Section */}

            {/* Explore Section */}
            <div className="w-full">
              <Separator className="my-[12px]" />
              <h3>
                <p className="px-[12px] pb-[4px] pt-[6px] text-[16px] font-semibold">
                  Eksplorasi
                </p>
              </h3>
              <div className="flex flex-col text-[14px]">
                <div className="flex h-[40px] items-center gap-x-5 rounded-md px-[12px] hover:bg-secondary">
                  <TrendingIcon className=" h-[24px] w-[24px]" />
                  <p className="w-full">Trending</p>
                </div>
                <div className="flex h-[40px] items-center gap-x-5 rounded-md px-[12px] hover:bg-secondary">
                  <MusicIcon className=" h-[24px] w-[24px]" />
                  <p className="w-full">Musik</p>
                </div>
                <div className="flex h-[40px] items-center gap-x-5 rounded-md px-[12px] hover:bg-secondary">
                  <FilmIcon className=" h-[24px] w-[24px]" />
                  <p className="w-full">Film</p>
                </div>
                <div className="flex h-[40px] items-center gap-x-5 rounded-md px-[12px] hover:bg-secondary">
                  <GameIcon className=" h-[24px] w-[24px]" />
                  <p className="w-full">Game</p>
                </div>
                <div className="flex h-[40px] items-center gap-x-5 rounded-md px-[12px] hover:bg-secondary">
                  <BeritaIcon className=" h-[24px] w-[24px]" />
                  <p className="w-full">Berita</p>
                </div>
                <div className="flex h-[40px] items-center gap-x-5 rounded-md px-[12px] hover:bg-secondary">
                  <OlahragaIcon className=" h-[24px] w-[24px]" />
                  <p className="w-full">Olahraga</p>
                </div>
              </div>
            </div>

            {/* Explore Section */}

            {/* Settings Section */}
            <div className="w-full">
              <Separator className="my-[12px]" />
              <div className="flex h-[40px] items-center gap-x-5 rounded-md px-[12px] hover:bg-secondary">
                <IoSettingsOutline className=" h-[24px] w-[24px]" />
                <p className="w-full text-[14px]">Setelan</p>
              </div>
            </div>
            {/* Settings Section */}
          </aside>
        </SheetContent>
      </Sheet>
    </>
  );
};
