import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { IoIosMore } from "react-icons/io";
import { PiShareFatLight } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import { Button } from "../ui/button";

export const ButtonInteractive = () => {
  return (
    <div className="flex w-full md:justify-end">
      <div className="flex gap-x-3">
        <div>
          <Button
            variant="secondary"
            className="gap-x-2 rounded-e-[0px] rounded-s-3xl border-e border-muted
          "
          >
            <AiOutlineLike className="h-[24px] w-[24px]" />
            50 rb
          </Button>
          <Button variant="secondary" className="rounded-e-3xl rounded-s-[0px]">
            <AiOutlineDislike className="h-[24px] w-[24px]" />
          </Button>
        </div>
        <Button
          variant="secondary"
          className="hidden gap-x-2 rounded-3xl sm:inline-flex"
        >
          <PiShareFatLight className="h-[24px] w-[24px]" />
          Bagikan
        </Button>
        <Button
          variant="secondary"
          className="hidden gap-x-2 rounded-3xl sm:inline-flex"
        >
          <TfiDownload className="h-[24px] w-[24px]" />
          Download
        </Button>
        <Button variant="secondary" className=" aspect-square rounded-full p-0">
          <IoIosMore className="aspect-square h-[24px] w-[24px]" />
        </Button>
      </div>
    </div>
  );
};
