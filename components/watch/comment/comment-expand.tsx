"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CommentExpandProps {
  className?: string;
  text: string;
  maxLength: number;
}

export const CommentExpand = ({
  className,
  text,
  maxLength,
}: CommentExpandProps) => {
  const [isExpand, setIsExpand] = useState(false);

  const truncated = (text: string, maxLength: number): string => {
    if (text?.length <= maxLength) {
      return text;
    }
    return text?.slice(0, maxLength) + "...";
  };

  const shouldShowExpandButton = text?.length > maxLength;

  const textRender = isExpand ? text : truncated(text, maxLength);

  return (
    <>
      <p className={cn("overflow-hidden text-[14px]", className)}>
        {textRender}
      </p>
      {shouldShowExpandButton && (
        <div className="text-[14px] font-medium">
          {!isExpand ? (
            <Button
              variant="link"
              className="rounded-3xl px-0"
              onClick={() => setIsExpand(true)}
            >
              Baca selengkapnya
            </Button>
          ) : (
            <Button
              variant="link"
              className="rounded-3xl px-0"
              onClick={() => setIsExpand(false)}
            >
              Lebih sedikit
            </Button>
          )}
        </div>
      )}
    </>
  );
};
