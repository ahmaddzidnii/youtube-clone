import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";
import { ButtonInteractive } from "@/components/watch/button-interactive";
import {
  RecommendationVideoXLToUp,
  RecommendationVideoXltoBottom,
} from "@/components/watch/recommendation-video";
import { VideoPlayer } from "@/components/watch/video-player";
import { CommentComponent } from "@/components/watch/comment";
import { DescriptionComponent } from "@/components/watch/description/description-component";

export const metadata = {
  title: "Arsy Widianto, Tiara Andini - Masih Hatiku (Official Music Video)",
};

export default function WatchPage({
  searchParams,
}: {
  searchParams: { v: string };
}) {
  return (
    <main
      suppressHydrationWarning
      className="flex flex-col gap-[24px] py-[24px] lg:flex-row"
    >
      <div className="flex flex-1 flex-col gap-3">
        {/* VideoPlayer */}
        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
          {/* <Image alt="tes" src="https://placehold.co/1280x720" fill /> */}
          <VideoPlayer
            url={`https://youtu.be/${searchParams.v}`}
            className="absolute left-0 top-0"
          />
        </div>
        {/* VideoPlayer */}

        {/* Title */}
        <h1 className=" text-[20px] font-bold leading-snug">
          Arsy Widianto, Tiara Andini - Masih Hatiku (Official Music Video)
        </h1>
        {/* Title */}

        <div className="flex flex-wrap ">
          <div>
            <div className="flex w-full gap-x-4">
              <div className="flex gap-x-2">
                <div className="relative aspect-square h-[40px] w-[40px] overflow-hidden rounded-full pe-4">
                  <Image
                    alt="tes"
                    src="https://yt3.googleusercontent.com/5FF_yAK4Lj8v467ZvJEOcyI6kdhI5tVsgwXi2zzZv61fEAnjlwbdxpg_SaPpQDsQAo5CdBO0VA=s176-c-k-c0x00ffffff-no-rj"
                    fill
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[16px] font-semibold">Arsy Widianto</p>
                  <span className="text-[12px] text-muted-foreground">
                    2,5 jt subscribers
                  </span>
                </div>
              </div>
              <Button className="rounded-3xl">Subscribe</Button>
            </div>
          </div>

          {/* Komponen Like dislike dll */}
          <div className="mt-5 md:ms-auto md:mt-0">
            <ButtonInteractive />
          </div>
          {/* Komponen Like dislike dll */}
        </div>

        {/* Deskripsi */}
        <DescriptionComponent />
        {/* Deskripsi */}

        {/* Lebar layar xl ke bawah */}

        <RecommendationVideoXltoBottom />

        <Button variant="outline" className="rounded-3xl xl:hidden">
          Lebih Banyak
        </Button>
        {/* Lebar layar xl ke bawah */}

        {/* Komentar */}
        <CommentComponent />
        {/* Komentar */}
      </div>

      <div className="w-full lg:w-[405px]">
        <div className="flex flex-col gap-3">
          {/* Lebar layar xl ke atas */}

          <RecommendationVideoXLToUp />
        </div>
        {/* Lebar layar xl ke atas */}
      </div>
    </main>
  );
}
