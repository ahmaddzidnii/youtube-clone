import Image from "next/image";
import { TextAreaCustom } from "@/components/ui/text-area-custom";

export const InputComment = () => {
  return (
    <div className="flex gap-x-2">
      <div className="relative aspect-square h-[40px] w-[40px] overflow-hidden rounded-full">
        <Image
          alt="profile"
          src="https://yt3.ggpht.com/5TT-vjjGa5tRwdqjeQX75vK_jTSJJLuJQNlEmYx1eMWv3AnNRhoDtogqnuOZ9kxvoNdsR3Vj1w=s88-c-k-c0x00ffffff-no-rj"
          fill
        />
      </div>
      <TextAreaCustom />
    </div>
  );
};
