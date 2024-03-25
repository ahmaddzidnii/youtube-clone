import Image from "next/image";

import { TextTruncate } from "@/components/text-truncate";
import { ChipBar } from "@/components/beranda/chip-bar";
import { CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const CardRecomendationVideo = () => {
  return (
    <div className="flex gap-2">
      <div className="relative aspect-video h-[100%] min-w-[168px] overflow-hidden rounded-xl ">
        <Image
          alt="tes"
          className=" object-cover"
          src="https://i.ytimg.com/vi/QhubX_VQogk/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLCW21fVUJxW168IWA9C5awpUdYonA"
          fill
        />
      </div>
      <div className="w-full">
        <h2 className="line-clamp-2 w-full pb-[4px] text-[14px] font-bold leading-snug">
          Arsy Widianto, Tiara Andini - Masih Hatiku (Official Music Video)
        </h2>
        <h3 className="text-[12px] text-muted-foreground">Arsy Widianto</h3>
        <p className="line-clamp-1 text-[12px] text-muted-foreground">
          2,9 jt x ditonton • 2 minggu yang lalu
        </p>
      </div>
    </div>
  );
};

export const RecommendationVideoXLToUp = () => {
  return (
    <div className="hidden lg:block">
      {/* Chip Bar */}
      <ChipBar>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Button
              size="sm"
              variant={index === 0 ? "default" : "secondary"}
              className=" h-8 rounded-xl p-4"
            >
              Baru diupload
            </Button>
          </CarouselItem>
        ))}
      </ChipBar>
      {/* Chip Bar */}

      <div className="flex flex-col gap-3">
        {Array.from({ length: 20 }).map((_, i) => (
          <CardRecomendationVideo key={i} />
        ))}
      </div>
    </div>
  );
};

export const RecommendationVideoXltoBottom = () => {
  return (
    <div className=" w-full lg:hidden">
      {/* Chip Bar */}
      <ChipBar>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Button
              size="sm"
              variant={index === 0 ? "default" : "secondary"}
              className="h-8 rounded-xl p-4"
            >
              Baru diupload
            </Button>
          </CarouselItem>
        ))}
      </ChipBar>
      {/* Chip Bar */}
      <div className="flex w-full flex-col gap-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <CardRecomendationVideo key={i} />
        ))}
      </div>
    </div>
  );
};
