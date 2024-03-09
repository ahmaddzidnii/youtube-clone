import { CardListVideo } from "@/components/card-list-video";

export default async function Home() {
  const fetch = new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 2000);
  });

  await fetch;
  return (
    <main>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <CardListVideo video_id="QhubX_VQogk" video_title="" key={i} />
        ))}
      </div>
    </main>
  );
}
