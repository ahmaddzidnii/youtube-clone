"use client";

import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { IoIosMore } from "react-icons/io";
import { PiShareFatLight } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useEffect, useState } from "react";

export const ButtonInteractive = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className="flex w-full md:justify-end">
      <div className="flex gap-x-3">
        <div>
          <Button
            title="Saya suka ini"
            variant="secondary"
            className="gap-x-2 rounded-e-[0px] rounded-s-3xl border-e border-muted
          "
          >
            <AiOutlineLike className="h-[20px] w-[20px]" />
            50 rb
          </Button>
          <Button
            title="Saya tidak suka ini"
            variant="secondary"
            className="rounded-e-3xl rounded-s-[0px]"
          >
            <AiOutlineDislike className="h-[20px] w-[20px]" />
          </Button>
        </div>
        <Button
          title="Bagikan"
          variant="secondary"
          className="hidden gap-x-2 rounded-3xl sm:inline-flex"
        >
          <PiShareFatLight className="h-[20px] w-[20px]" />
          Bagikan
        </Button>
        <Button
          title="Download"
          variant="secondary"
          className="hidden gap-x-2 rounded-3xl sm:inline-flex"
        >
          <TfiDownload className="h-[20px] w-[20px]" />
          Download
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              disabled={!isMounted}
              variant="secondary"
              className=" aspect-square rounded-full p-0"
            >
              <IoIosMore className="aspect-square h-[20px] w-[20px]" />
            </Button>
          </PopoverTrigger>
          <PopoverContent sideOffset={2} className="w-[200px] p-0 shadow-md">
            <div className="flex flex-col">
              <span className="cursor-pointer bg-secondary p-3 hover:bg-secondary">
                Komentar teratas
              </span>
              <span className="cursor-pointer p-3 hover:bg-secondary">
                Terbaru dulu
              </span>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
