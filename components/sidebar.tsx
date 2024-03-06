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
import { SidebarLarge } from "./sidebar/sidebar-components";

export const Sidebar = () => {
  return (
    <>
      {/* Sidebar Medium */}
      <div className="hidden md:block">
        <aside className="w-[72px] p-[12px] xl:hidden">
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
      </div>
      {/* Sidebar Medium */}

      {/* Sidebar Besar */}
      <div className="hidden xl:block">
        <SidebarLarge />
      </div>
      {/* Sidebar Besar */}
    </>
  );
};
