import Image from "next/image";
import Link from "next/link";

interface SubscriptionListProps {
  img: string;
  channelName: string;
  link: string;
}
export const SubscriptionList = ({
  img,
  channelName,
  link,
}: SubscriptionListProps) => {
  return (
    <Link href={link}>
      <div className="flex h-[40px] items-center gap-x-5 rounded-md px-[12px] hover:bg-secondary">
        <div className="relative aspect-square h-[24px] w-[24px]  ">
          <Image
            src={img}
            fill
            alt="avatar"
            className="rounded-full object-contain"
          />
        </div>
        <p className="w-full">{channelName}</p>
      </div>
    </Link>
  );
};
