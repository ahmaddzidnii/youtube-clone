"use client";

import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { IoIosMore, IoMdCut } from "react-icons/io";
import { PiShareFatLight } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import { useEffect, useState } from "react";
import { IoFlagOutline } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ResponseType } from "@/app/(watch)/watch/response";
import { formatNumber } from "@/utils/number-formater";

export const ButtonInteractive = ({ data }: { data: ResponseType }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className="flex w-full justify-end">
      <div className="flex gap-x-3">
        <div>
          <Button
            title="Saya suka ini"
            variant="secondary"
            className="gap-x-2 rounded-e-[0px] rounded-s-3xl border-e border-muted
          "
          >
            <AiOutlineLike className="h-[20px] w-[20px]" />
            {formatNumber({
              number: data?.items[0].statistics.likeCount,
              format: "truncated",
            })}
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
          className="hidden gap-x-2 rounded-3xl xs:inline-flex"
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

        {/* POPOVER BUTTON COLLAPSE */}
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
          <PopoverContent
            asChild
            className="w-[190px] overflow-hidden rounded-2xl p-0 shadow-md"
          >
            <div className="block py-2">
              <div
                role="button"
                className="inline-flex h-9 w-full items-center justify-start pe-3  ps-4 hover:bg-secondary sm:hidden "
              >
                <PiShareFatLight className="me-4 h-[24px] w-[24px]" /> Bagikan
              </div>
              <div
                role="button"
                className="inline-flex h-9 w-full items-center justify-start pe-3  ps-4 hover:bg-secondary sm:hidden "
              >
                <TfiDownload className="me-4 h-[24px] w-[24px]" /> Download
              </div>
              <div
                role="button"
                className="inline-flex h-9 w-full items-center justify-start pe-3  ps-4 hover:bg-secondary "
              >
                <IoMdCut className="me-4 h-[24px] w-[24px]" /> Clip
              </div>
              <div
                role="button"
                className="inline-flex h-9 w-full items-center justify-start pe-3  ps-4 hover:bg-secondary "
              >
                <IoFlagOutline className="me-4 h-[24px] w-[24px]" /> Laporkan
              </div>
            </div>
          </PopoverContent>
        </Popover>
        {/* POPOVER BUTTON COLLAPSE */}
      </div>
    </div>
  );
};
