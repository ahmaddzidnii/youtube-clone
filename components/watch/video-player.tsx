"use client";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Skeleton } from "@/components/ui/skeleton";

interface VideoPlayerProps {
  url: string;
  className?: string;
}
export const VideoPlayer = ({ url, className }: VideoPlayerProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return <Skeleton className="h-full w-full bg-secondary object-cover" />;
  }
  return (
    <ReactPlayer
      className={className}
      url={url}
      width="100%"
      height="100%"
      controls
    />
  );
};
