import { Skeleton } from "../ui/skeleton";

export const CardListVideoSkeleton = () => {
  return (
    <article className="flex w-full flex-col gap-[12px]">
      <Skeleton className="h-[190px] w-full  overflow-hidden rounded-2xl bg-secondary sm:h-[185px] xl:h-[160px] " />

      <div className="flex h-[120px] w-full gap-x-[12px]">
        <Skeleton className="h-[36px] w-[36px] overflow-hidden rounded-full bg-secondary " />

        <div className="flex w-full flex-col gap-2">
          <Skeleton className="h-[24px] w-full bg-secondary" />
          <Skeleton className="h-[20px] w-1/2 bg-secondary" />
        </div>
      </div>
    </article>
  );
};
