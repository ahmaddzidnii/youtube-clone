import { Button } from "@/components/ui/button";
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
    <main className="flex flex-col gap-[24px] py-[24px] lg:flex-row">
      <div className="flex flex-1 flex-col gap-3">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
          <Image alt="tes" src="https://placehold.co/1280x720" fill />
        </div>
        <h1 className=" text-[20px] font-bold leading-snug">
          Arsy Widianto, Tiara Andini - Masih Hatiku (Official Music Video)
        </h1>
        <div className="flex">
          <div className="flex w-full gap-x-4">
            <div className="flex gap-x-2">
              <div className="relative aspect-square h-[40px] w-[40px] overflow-hidden rounded-full pe-4">
                <Image alt="tes" src="https://placehold.co/32x32" fill />
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
          {/* Komponen Like dislike dll */}
          <div className="flex w-full justify-end">s</div>
          {/* Komponen Like dislike dll */}
        </div>
      </div>
      <div className="w-[420px]"></div>
    </main>
  );
}
