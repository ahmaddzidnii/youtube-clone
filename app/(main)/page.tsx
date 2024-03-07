import { CardListVideo } from "@/components/card-list-video";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 gap-3 px-1 pt-[12px] sm:grid-cols-2 lg:grid-cols-3 lg:px-4 xl:grid-cols-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <CardListVideo video_id={String(i)} video_title="" key={i} />
        ))}
      </div>
    </main>
  );
}
