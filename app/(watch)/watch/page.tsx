import { TextTruncate } from "@/components/text-truncate";
import { Button } from "@/components/ui/button";
import { ButtonInteractive } from "@/components/watch/button-interactive";
import { VideoPlayer } from "@/components/watch/video-player";
import Image from "next/image";

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
      </div>
      {/* Komponen Like dislike dll Mode Layar md ke bawah */}
      <div className=" md:hidden">
        <ButtonInteractive />
      </div>
      {/* Komponen Like dislike dll Mode Layar md ke bawah */}
      <div className="w-full xl:w-[405px]">
        <div className="flex flex-col gap-3">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex gap-2">
              <div className="relative aspect-video w-[168px] overflow-hidden rounded-xl">
                <Image
                  alt="tes"
                  className="object-cover"
                  src="https://i.ytimg.com/vi/QhubX_VQogk/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLCW21fVUJxW168IWA9C5awpUdYonA"
                  fill
                />
              </div>
              <div className="w-full flex-1 ">
                <TextTruncate
                  className=" hidden h-[40px] w-full pb-[4px] text-[14px] font-bold leading-snug xl:block"
                  maxLength={40}
                  text="Arsy Widianto, Tiara Andini - Masih Hatiku (Official Music Video)"
                />
                <h2 className="text-[14px] font-bold leading-snug xl:hidden">
                  Arsy Widianto, Tiara Andini - Masih Hatiku (Official Music
                  Video)
                </h2>
                <h3 className="text-[12px] text-muted-foreground">
                  Arsy Widianto
                </h3>
                <p className="text-[12px] text-muted-foreground">
                  2,9 jt x ditonton <span>• 2 minggu yang lalu</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
