import { TextTruncate } from "@/components/text-truncate";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { IoIosMusicalNote } from "react-icons/io";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 gap-3 px-1 pt-[12px] sm:grid-cols-2 lg:grid-cols-3 lg:px-4 xl:grid-cols-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <Link href={`/video/${i}`} key={i}>
            <article className="flex w-full flex-col gap-[12px]">
              <div className="relative h-[160px]  w-full overflow-hidden rounded-2xl">
                <Image
                  fill
                  className="object-cover"
                  src="https://i.ytimg.com/vi/QhubX_VQogk/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLCW21fVUJxW168IWA9C5awpUdYonA"
                  alt="yt"
                />
              </div>

              <div className="flex h-[120px] w-full gap-x-[12px]">
                <div>
                  <div className="relative h-[36px] w-[36px] overflow-hidden rounded-full ">
                    <Image
                      fill
                      src="https://yt3.ggpht.com/O81FORDCuE3EJaMiDgAtIQiGnTqcTzpdw_qgSzKk3L77HtP4YVGEKQZWJG7C2yLepgiWZxYd=s88-c-k-c0x00ffffff-no-nd-rj"
                      className="object-cover"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col text-[14px] ">
                  <TextTruncate
                    className="h-[44px] font-semibold "
                    text="Arsy Widianto, Tiara Andini - Masih Hatiku (Official Music Video)"
                    maxLength={60}
                  />
                  <div className="flex items-center gap-x-1 text-muted-foreground">
                    <p>Arsy Widianto</p>
                    <span>
                      <IoIosMusicalNote />
                    </span>
                  </div>
                  <div className="text-muted-foreground">
                    <p>2,9 jt x ditonton</p>
                    <p>11 hari yang lalu</p>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
