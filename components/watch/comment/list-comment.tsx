import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";

import { CommentExpand } from "@/components/watch/comment/comment-expand";
import { InputReply } from "@/components/watch/comment/input-reply";
import { Button } from "@/components/ui/button";

interface ListCommentProps {
  comment_text: string;
  avatar_image: string;
  username: string;
  date: string | number;
}
export const ListComment = ({
  avatar_image,
  username,
  date,
  comment_text,
}: ListCommentProps) => {
  return (
    <div className="mt-10 flex-col">
      <div className="mt-2 flex gap-x-2">
        <div className="relative aspect-square h-[40px] w-[40px] overflow-hidden rounded-full">
          <Image alt={username} src={avatar_image} fill />
        </div>
        <div className="flex-1">
          <div className="flex">
            <h2 className="me-2 text-[13px] font-semibold">{username}</h2>
            <span className="text-[12px] text-muted-foreground">{date}</span>
          </div>
          <CommentExpand text={comment_text} maxLength={400} />
          <InputReply />

          <Button
            variant="ghost"
            className="rounded-3xl px-1 hover:bg-blue-300"
          >
            <IoMdArrowDropdown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};
