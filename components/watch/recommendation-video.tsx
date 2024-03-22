import Image from "next/image";

import { TextTruncate } from "@/components/text-truncate";
import { ChipBar } from "@/components/beranda/chip-bar";
import { CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

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
          <div className="flex gap-2" key={i}>
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
                className="h-[40px] w-full pb-[4px] text-[14px] font-bold leading-snug"
                maxLength={65}
                text="Arsy Widianto, Tiara Andini - Masih Hatiku (Official Music Video)"
              />

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
      <div className="flex flex-col gap-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <div className="flex gap-2" key={i}>
            <div className="relative aspect-video h-[90%] w-[100px] overflow-hidden rounded-xl sm:w-[168px]">
              <Image
                alt="tes"
                className=" object-cover"
                src="https://i.ytimg.com/vi/QhubX_VQogk/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLCW21fVUJxW168IWA9C5awpUdYonA"
                fill
              />
            </div>
            <div className="w-full flex-1 ">
              <TextTruncate
                className="w-full pb-[2px] text-[12px] font-bold !leading-[0px] sm:hidden"
                maxLength={60}
                text="Arsy Widianto, Tiara Andini - Masih Hatiku (Official Music Video)"
              />
              <h2 className="hidden w-full pb-[4px] text-[14px] font-bold leading-snug sm:block sm:text-wrap">
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
  );
};
