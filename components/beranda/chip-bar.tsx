import { Button } from "@/components/ui/button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const ChipBar = () => {
  return (
    <div className="relative h-14 overflow-hidden">
      <div className="flex h-full touch-pan-x items-center overflow-x-auto scrollbar-none">
        <Button
          size="sm"
          variant="secondary"
          className="me-4 h-8 rounded-xl p-4"
        >
          Baru diupload
        </Button>
        <Button
          size="sm"
          variant="secondary"
          className="me-4 h-8 rounded-xl p-4"
        >
          Baru diupload
        </Button>
        <Button
          size="sm"
          variant="secondary"
          className="me-4 h-8 rounded-xl p-4"
        >
          Baru diupload
        </Button>
        <Button
          size="sm"
          variant="secondary"
          className="me-4 h-8 rounded-xl p-4"
        >
          Baru diupload
        </Button>
        <Button
          size="sm"
          variant="secondary"
          className="me-4 h-8 rounded-xl p-4"
        >
          End
        </Button>
      </div>

      <div className="absolute right-0 top-0 z-[888] flex h-full items-center">
        <div>
          <FaAngleRight className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};
