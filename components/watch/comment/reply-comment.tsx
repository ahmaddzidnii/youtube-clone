import Image from "next/image";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useState } from "react";

import { CommentExpand } from "@/components/watch/comment/comment-expand";
import { InputReply } from "@/components/watch/comment/input-reply";
import { Button } from "@/components/ui/button";
export const ReplyComment = () => {
  const [isExpandReply, setIsExpandReply] = useState(false);
  return (
    <>
      <Button
        onClick={() => setIsExpandReply(!isExpandReply)}
        variant="ghost"
        className="rounded-3xl ps-2 hover:bg-blue-300"
      >
        {isExpandReply ? (
          <IoMdArrowDropup className="h-6 w-6" />
        ) : (
          <IoMdArrowDropdown className="h-6 w-6" />
        )}
        <span className="text-[14px] text-blue-800">11 Balasan</span>
      </Button>
      {isExpandReply && (
        <div>
          {Array.from({ length: 11 }).map((_, i) => (
            <div className="mt-2 flex gap-x-2" key={i}>
              <div className="relative aspect-square h-[24px] w-[24px] overflow-hidden rounded-full">
                <Image
                  alt="profile"
                  src="https://yt3.ggpht.com/5TT-vjjGa5tRwdqjeQX75vK_jTSJJLuJQNlEmYx1eMWv3AnNRhoDtogqnuOZ9kxvoNdsR3Vj1w=s88-c-k-c0x00ffffff-no-rj"
                  fill
                />
              </div>
              <div className="flex-1">
                <div className="flex">
                  <h2 className="me-2 text-[13px] font-semibold">
                    @madzChannel
                  </h2>
                  <span className="text-[12px] text-muted-foreground">
                    1 hari yang lalu
                  </span>
                </div>
                <CommentExpand text={String(i + 1)} maxLength={400} />
                <InputReply />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
