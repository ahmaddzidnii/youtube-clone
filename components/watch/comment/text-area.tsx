"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useLayoutEffect, useState } from "react";
import { GrEmoji } from "react-icons/gr";

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

  useLayoutEffect(() => {
    const textarea = document.getElementById("custom-textarea");
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  }, [text]);

  return (
    <div className="w-full transition-colors duration-300 ease-in-out">
      <Textarea
        id="custom-textarea"
        onFocus={() => {
          setIsComment(true);
        }}
        placeholder="Tambahkan komentar..."
        className=" border-none pb-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-text"
        onChange={handleChange}
        value={text}
      />
      <Separator
        className={cn("-pt-1 ms-3 bg-secondary", isComment && "bg-primary")}
      />
      <div
        className={cn(
          "mt-3 flex w-full justify-between",
          !isComment && "hidden",
        )}
      >
        <Button
          variant="ghost"
          className="ms-2  aspect-square rounded-full p-0"
        >
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
