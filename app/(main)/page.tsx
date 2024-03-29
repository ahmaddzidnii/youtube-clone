import { ChipBar } from "@/components/beranda/chip-bar";
import { CardListVideo } from "@/components/card-list-video";
import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export default async function Home() {
  const fetch = new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 2000);
  });

  await fetch;
  return (
    <div className="h-full w-full">
      {/* Chip Bar */}
      <ChipBar className="mt-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className={cn(index !== 0 && "")}>
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

      <div className="  grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <CardListVideo video_id="QhubX_VQogk" video_title="" key={i} />
        ))}
      </div>
    </div>
  );
}
