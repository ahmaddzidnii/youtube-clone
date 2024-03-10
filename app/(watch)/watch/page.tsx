import { Button } from "@/components/ui/button";
import { ButtonInteractive } from "@/components/watch/button-interactive";
import { TextAreaCustom } from "@/components/watch/comment/text-area";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import {
  RecommendationVideoXLToUp,
  RecommendationVideoXltoBottom,
} from "@/components/watch/recommendation-video";
import { VideoPlayer } from "@/components/watch/video-player";
import Image from "next/image";
import { BsFilterLeft } from "react-icons/bs";

export const metadata = {
  title: "title video",
};

export default function WatchPage({
  searchParams,
}: {
  searchParams: { v: string };
}) {
  return (
    <main className="flex flex-col gap-[24px] py-[24px] xl:flex-row">
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

        <div className="flex">
          <div className="w-full flex-1">
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

          {/* Komponen Like dislike dll Mode Layar md ke atas */}
          <div className="hidden md:block">
            <ButtonInteractive />
          </div>
          {/* Komponen Like dislike dll Mode Layar md ke atas */}
        </div>

        {/* Komponen Like dislike dll Mode Layar md ke bawah */}
        <div className=" md:hidden">
          <ButtonInteractive />
        </div>
        {/* Komponen Like dislike dll Mode Layar md ke bawah */}

        {/* Lebar layar xl ke bawah */}
        {Array.from({ length: 20 }).map((_, i) => (
          <RecommendationVideoXltoBottom key={i} />
        ))}
        <Button variant="outline" className="rounded-3xl xl:hidden">
          Lebih Banyak
        </Button>
        {/* Lebar layar xl ke bawah */}

        {/* Komentar */}
        <div className="mb-8 mt-6 flex flex-col">
          <div className="mb-6 flex items-center gap-x-4 p-2">
            <h1 className="text-[20px] font-bold">7.601 Komentar</h1>
            <button className="inline-flex items-center gap-x-[1px] text-[14px]">
              <BsFilterLeft className="mr-2 h-6 w-6" /> Urutkan
            </button>
          </div>
          <div className="flex gap-x-2">
            <div className="relative aspect-square h-[40px] w-[40px] overflow-hidden rounded-full">
              <Image
                alt="profile"
                src="https://yt3.ggpht.com/5TT-vjjGa5tRwdqjeQX75vK_jTSJJLuJQNlEmYx1eMWv3AnNRhoDtogqnuOZ9kxvoNdsR3Vj1w=s88-c-k-c0x00ffffff-no-rj"
                fill
              />
            </div>
            <TextAreaCustom />
          </div>
          {/* List komentar */}
          <div className="mt-10 flex-col">
            {Array.from({ length: 8 }).map((_, i) => (
              <div className="flex gap-x-2" key={i}>
                <div className="relative aspect-square h-[40px] w-[40px] overflow-hidden rounded-full">
                  <Image
                    alt="profile"
                    src="https://yt3.ggpht.com/5TT-vjjGa5tRwdqjeQX75vK_jTSJJLuJQNlEmYx1eMWv3AnNRhoDtogqnuOZ9kxvoNdsR3Vj1w=s88-c-k-c0x00ffffff-no-rj"
                    fill
                  />
                </div>
                <div className="flex-1">
                  <div className="flex">
                    <h2 className="text-[13px] font-semibold">@madzChannel</h2>
                    <span className="text-[12px] text-muted-foreground">
                      1 hari yang lalu
                    </span>
                  </div>
                  <p className="text-[14px]">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                  <div className="flex items-center text-[12px]">
                    <Button
                      variant="ghost"
                      className=" aspect-square rounded-full p-0"
                    >
                      <AiOutlineLike className="h-6 w-6" />
                    </Button>
                    <span className="me-2">500</span>
                    <Button
                      variant="ghost"
                      className=" aspect-square rounded-full p-0"
                    >
                      <AiOutlineDislike className="h-6 w-6" />
                    </Button>
                    <span className="ml-2 font-semibold">Balas</span>
                  </div>
                  <Button
                    variant="ghost"
                    className="rounded-3xl hover:bg-blue-300"
                  >
                    <span className="text-[14px] text-blue-800">
                      11 Balasan
                    </span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          {/* List komentar */}
        </div>
        {/* Komentar */}
      </div>

      <div className="w-full xl:w-[405px]">
        <div className="flex flex-col gap-3">
          {/* Lebar layar xl ke atas */}
          {Array.from({ length: 20 }).map((_, i) => (
            <RecommendationVideoXLToUp key={i} />
          ))}
        </div>
        {/* Lebar layar xl ke atas */}
      </div>
    </main>
  );
}
