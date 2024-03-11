"use client";

import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GrEmoji } from "react-icons/gr";
import ReactTextareaAutosize from "react-textarea-autosize";

import { Button } from "@/components/ui/button";
export const InputReply = () => {
  const [isReply, setIsReply] = useState(false);
  const [text, setText] = useState("");
  const [textIsEmpty, setTextIsEmpty] = useState(true);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isReply) {
      textAreaRef.current?.focus();
    }
  }, [isReply]);

  const handleReply = () => {
    setIsReply(!isReply);
  };

  const handleCloseReply = () => {
    setIsReply(false);
  };

  const handleLikeComment = () => {
    //   TODO: handle like
    console.log("like comment");
  };
  const handleDislikeComment = () => {
    //   TODO: handle dislike
    console.log("dislike comment");
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length > 0) {
      setTextIsEmpty(false);
    } else {
      setTextIsEmpty(true);
    }
    setText(event.target.value);
  };

  const handleSubmitReply = () => {
    //   TODO: handle submit reply
    console.log({
      text,
    });
  };
  return (
    <>
      <div className="flex items-center text-[12px]">
        <Button
          onClick={handleLikeComment}
          variant="ghost"
          className=" aspect-square rounded-full p-0"
        >
          <AiOutlineLike className="h-6 w-6" />
        </Button>
        <span className="me-2">500</span>
        <Button
          onClick={handleDislikeComment}
          variant="ghost"
          className=" aspect-square rounded-full p-0"
        >
          <AiOutlineDislike className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleReply}
          className="ml-2 cursor-pointer rounded-3xl text-[12px] font-semibold"
        >
          Balas
        </Button>
      </div>

      {isReply && (
        <div className="flex gap-x-2">
          <div className="relative aspect-square h-[24px] w-[24px] overflow-hidden rounded-full">
            <Image
              alt="profile"
              src="https://yt3.ggpht.com/5TT-vjjGa5tRwdqjeQX75vK_jTSJJLuJQNlEmYx1eMWv3AnNRhoDtogqnuOZ9kxvoNdsR3Vj1w=s88-c-k-c0x00ffffff-no-rj"
              fill
            />
          </div>
          <div className="w-full transition-colors duration-300 ease-in-out">
            <ReactTextareaAutosize
              ref={textAreaRef}
              value={text}
              placeholder="Tulis Komentar..."
              onChange={handleChange}
              className="duration-800  w-full max-w-full resize-none overflow-hidden rounded-none border-x-0 border-b-2 border-t-0 border-secondary pb-1 ps-0  outline-none transition-colors ease-in focus-visible:border-primary"
            />

            <div className="mt-1 flex w-full justify-between">
              <Button
                variant="ghost"
                className=" aspect-square rounded-full p-0"
              >
                <GrEmoji className="h-[30px] w-[30px]" />
              </Button>

              <div>
                <Button
                  variant="ghost"
                  className="rounded-3xl"
                  onClick={handleCloseReply}
                >
                  Batal
                </Button>
                <Button
                  disabled={textIsEmpty}
                  className="ms-2 rounded-3xl bg-[#0540bf] text-white hover:bg-[#0556BF] disabled:bg-secondary disabled:text-muted-foreground"
                  onClick={handleSubmitReply}
                >
                  Komentar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
