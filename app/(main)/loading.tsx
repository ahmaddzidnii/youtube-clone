import { CardListVideoSkeleton } from "@/components/skeleton/card-list-video-skeleton";
import React from "react";

const loading = () => {
  return (
    <main>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <CardListVideoSkeleton key={i} />
        ))}
      </div>
    </main>
  );
};

export default loading;
