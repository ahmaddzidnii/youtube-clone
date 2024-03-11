"use client";

import Image from "next/image";
import { BsFilterLeft } from "react-icons/bs";

import { CommentExpand } from "@/components/watch/comment/comment-expand";
import { ReplyComment } from "@/components/watch/comment/reply-comment";
import { InputComment } from "@/components/watch/comment/input-comment";
import { InputReply } from "@/components/watch/comment/input-reply";

export const CommentComponent = () => {
  return (
    <div className="mb-8 mt-5 flex flex-col">
      <div className="mb-6 flex items-center gap-x-4 p-2">
        <h1 className="text-[20px] font-bold">7.601 Komentar</h1>
        <button className="inline-flex items-center gap-x-[1px] text-[14px]">
          <BsFilterLeft className="mr-2 h-6 w-6" /> Urutkan
        </button>
      </div>
      <InputComment />
      {/* List komentar */}
      <div className="mt-5 flex-col">
        {Array.from({ length: 10 }).map((_, i) => (
          <div className="mt-2 flex gap-x-2" key={i}>
            <div className="relative aspect-square h-[40px] w-[40px] overflow-hidden rounded-full">
              <Image
                alt="profile"
                src="https://yt3.ggpht.com/5TT-vjjGa5tRwdqjeQX75vK_jTSJJLuJQNlEmYx1eMWv3AnNRhoDtogqnuOZ9kxvoNdsR3Vj1w=s88-c-k-c0x00ffffff-no-rj"
                fill
              />
            </div>
            <div className="flex-1">
              <div className="flex">
                <h2 className="me-2 text-[13px] font-semibold">@madzChannel</h2>
                <span className="text-[12px] text-muted-foreground">
                  1 hari yang lalu
                </span>
              </div>
              <CommentExpand
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora veritatis sunt sequi inventore veniam odio consequatur fuga! Doloribus facere similique assumenda eveniet maxime tempora ex fuga dolore ab non ipsa corrupti pariatur, alias, debitis ratione necessitatibus maiores. Sit esse molestiae id rerum fugit nostrum illo laudantium temporibus soluta voluptates ab voluptas perspiciatis voluptatem, sequi, tempore debitis assumenda sunt aspernatur incidunt. Iste, aperiam perferendis nostrum nobis eligendi sit alias odit et exercitationem excepturi voluptate, asperiores corporis, ut molestiae cupiditate odio? Aspernatur laboriosam dolor dolores ipsa eaque eum totam commodi quae, voluptates fugit est sint assumenda ratione molestias distinctio sapiente"
                maxLength={400}
              />
              <InputReply />

              <ReplyComment />
            </div>
          </div>
        ))}
      </div>
      {/* List komentar */}
    </div>
  );
};
