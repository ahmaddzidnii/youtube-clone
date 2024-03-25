"use client";
import Image from "next/image";
import Link from "next/link";
import { TextTruncate } from "./text-truncate";
import { IoIosMusicalNote } from "react-icons/io";

export const CardListVideo = ({
  video_id,
  video_title,
}: {
  video_id: string;
  video_title: string;
}) => {
  return (
    <article className="flex w-full flex-col">
      <Link
        href={{
          pathname: "/watch",
          query: {
            v: video_id,
          },
        }}
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
          <Image
            fill
            className="object-cover"
            src="https://i.ytimg.com/vi/QhubX_VQogk/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLCW21fVUJxW168IWA9C5awpUdYonA"
            alt="yt"
          />
          <div className="absolute bottom-2 right-2 rounded-md bg-[#000000CC] px-[4px]  py-[3px] ">
            <p className=" text-[12px] font-semibold text-white">5:10</p>
          </div>
        </div>
      </Link>

      <div className=" mt-[12px] flex h-[120px] w-full ">
        <Link href="/channel/UCX1C-5n5ZBhZzJZGQKwRkXg">
          <div className="relative me-[12px] h-[36px] w-[36px] overflow-hidden rounded-full ">
            <Image
              fill
              src="https://yt3.ggpht.com/O81FORDCuE3EJaMiDgAtIQiGnTqcTzpdw_qgSzKk3L77HtP4YVGEKQZWJG7C2yLepgiWZxYd=s88-c-k-c0x00ffffff-no-nd-rj"
              className="object-cover"
              alt=""
            />
          </div>
        </Link>
        <div className="flex flex-col text-[14px] ">
          <Link
            href={{
              pathname: "/watch",
              query: {
                v: video_id,
              },
            }}
          >
            <h1 className="line-clamp-2 h-[44px] font-semibold">
              Arsy Widianto, Tiara Andini - Masih Hatiku (Official Music Video)
            </h1>
          </Link>

          <div className="flex items-center gap-x-1 text-muted-foreground">
            <Link
              href="/channel/UCX1C-5n5ZBhZzJZGQKwRkXg"
              title="Arsy Widianto"
            >
              Arsy Widianto
            </Link>
            <span>
              <IoIosMusicalNote />
            </span>
          </div>
          <Link
            href={{
              pathname: "/watch",
              query: {
                v: video_id,
              },
            }}
            className="text-muted-foreground"
          >
            <p className="line-clamp-1">
              2,9 jt x ditonton • 2 minggu yang lalu
            </p>
          </Link>
        </div>
      </div>
    </article>
  );
};
