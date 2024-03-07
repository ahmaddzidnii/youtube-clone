"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { IoIosArrowUp, IoMdHome } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";

import { YoutubeShortsIcon } from "@/components/icon/youtube-shorts-icon";
import { YoutubeSubscribtionIcon } from "@/components/icon/youtube-subscribtion-icon";
import { Separator } from "@/components/ui/separator";
import { SubscriptionList } from "@/components/subscription-list";
import { YoutubeChannelIcon } from "@/components/icon/youtube-channel-icon";
import { YoutubeHistoryIcon } from "@/components/icon/youtube-history-icon";
import { YoutubeVideoAndaIcon } from "@/components/icon/youtube-vidio-anda-icon";
import { YoutubeTontonNantiIcon } from "@/components/icon/youtube-tonton-nanti-icon";
import { MusicIcon } from "@/components/icon/music-icon";
import { TrendingIcon } from "@/components/icon/trending-icon";
import { FilmIcon } from "@/components/icon/film-icon";
import { GameIcon } from "@/components/icon/game-icon";
import { BeritaIcon } from "@/components/icon/berita-icon";
import { OlahragaIcon } from "@/components/icon/olahraga-icon";
import { useShowMore } from "@/hooks/use-show-more";

export const SidebarMedium = () => {
  return (
    <aside className="w-[72px] pe-[12px]">
      <div className="flex h-full w-full flex-col  text-[10px]">
        <div className=" flex h-[74px] w-[64px] flex-col items-center justify-center gap-2  rounded-md hover:bg-secondary ">
          <IoMdHome className=" h-[24px] w-[24px]" />
          <p className="w-full text-center">Beranda</p>
        </div>
        <div className=" flex h-[74px] w-[64px] flex-col items-center justify-center gap-2  rounded-md hover:bg-secondary ">
          <YoutubeShortsIcon className=" h-[24px] w-[24px]" />
          <p className="w-full text-center">Shorts</p>
        </div>
        <div className=" flex h-[74px] w-[64px] flex-col items-center justify-center gap-2  rounded-md hover:bg-secondary ">
          <YoutubeSubscribtionIcon className=" h-[24px] w-[24px]" />
          <p className="w-full text-center">Subscription</p>
        </div>
        <div className=" flex h-[74px] w-[64px] flex-col items-center justify-center gap-2  rounded-md hover:bg-secondary ">
          <YoutubeVideoAndaIcon className=" h-[24px] w-[24px]" />
          <p className="w-full text-center">Anda</p>
        </div>
      </div>
    </aside>
  );
};

export const SidebarLarge = () => {
  const { showMore, setShowMore } = useShowMore();

  return (
    <aside className=" scrollbar-thumb h-full max-h-screen w-[240px] overflow-y-hidden py-[12px] pe-[12px] scrollbar scrollbar-thumb-[#606060]/40 scrollbar-w-2 hover:overflow-y-auto ">
      {/* Top Section */}
      <div className="flex w-full flex-col text-[14px]">
        <Link
          href="/"
          className="flex h-[40px] items-center gap-x-5  rounded-md bg-secondary px-[12px] hover:bg-secondary"
        >
          <IoMdHome className=" h-[24px] w-[24px]" />
          <p className="w-full">Beranda</p>
        </Link>
        <Link
          href="/shorts"
          className="flex h-[40px] items-center gap-x-5 rounded-md px-[12px] hover:bg-secondary"
        >
          <YoutubeShortsIcon className=" h-[24px] w-[24px]" />
          <p className="w-full">Shorts</p>
        </Link>
        <Link
          href="/subscription"
          className="flex h-[40px] items-center gap-x-5 rounded-md px-[12px] hover:bg-secondary"
        >
          <YoutubeSubscribtionIcon className=" h-[24px] w-[24px]" />
          <p className="w-full">Subscription</p>
        </Link>
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
          <div id="show-more" className={showMore ? "block" : "hidden"}>
            <div className="flex h-[40px] items-center gap-x-5 rounded-md px-[12px] hover:bg-secondary">
              <AiOutlineLike className=" h-[24px] w-[24px]" />
              <p className="w-full">Video yang disukai</p>
            </div>
          </div>
          {/* Button Show More */}
          {showMore ? (
            <div
              role="button"
              onClick={() => setShowMore(false)}
              className="flex h-[40px] items-center gap-x-5 rounded-md px-[12px] hover:bg-secondary"
            >
              <IoIosArrowUp className=" h-[24px] w-[24px]" />
              <p className="w-full">Lebih Sedikit</p>
            </div>
          ) : (
            <div
              role="button"
              onClick={() => setShowMore(true)}
              className="flex h-[40px] items-center gap-x-5 rounded-md px-[12px] hover:bg-secondary"
            >
              <IoIosArrowDown className=" h-[24px] w-[24px]" />
              <p className="w-full">Lebih banyak</p>
            </div>
          )}
          {/* Button Show More */}
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
  );
};
