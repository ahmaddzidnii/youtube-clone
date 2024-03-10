"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { GrEmoji } from "react-icons/gr";
import TextareaAutosize from "react-textarea-autosize";

export const TextAreaCustom = () => {
  const [text, setText] = useState("");
  const [isComment, setIsComment] = useState(false);
  const [textIsEmpty, setTextIsEmpty] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length > 0) {
      setTextIsEmpty(false);
    } else {
      setTextIsEmpty(true);
    }
    setText(event.target.value);
  };

  return (
    <div className="w-full transition-colors duration-300 ease-in-out">
      <TextareaAutosize
        onHeightChange={(e) => {
          console.log(e);
        }}
        id="custom-textarea"
        value={text}
        placeholder="Tulis Komentar..."
        onFocus={() => {
          setIsComment(true);
        }}
        onChange={handleChange}
        className="duration-800  w-full max-w-full resize-none overflow-hidden rounded-none border-x-0 border-b-2 border-t-0 border-secondary pb-1 ps-0  outline-none transition-colors ease-in focus-visible:border-primary"
      />

      <div
        className={cn(
          "mt-1 flex w-full justify-between",
          !isComment && "hidden",
        )}
      >
        <Button variant="ghost" className=" aspect-square rounded-full p-0">
          <GrEmoji className="h-[30px] w-[30px]" />
        </Button>

        <div>
          <Button
            variant="ghost"
            className="rounded-3xl"
            onClick={() => {
              setIsComment(false);
            }}
          >
            Batal
          </Button>
          <Button
            disabled={textIsEmpty}
            className="ms-2 rounded-3xl bg-[#0540bf] text-white hover:bg-[#0556BF] disabled:bg-secondary disabled:text-muted-foreground"
          >
            Komentar
          </Button>
        </div>
      </div>
    </div>
  );
};
