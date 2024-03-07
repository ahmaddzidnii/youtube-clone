import { Sidebar } from "@/components/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex h-[calc(100vh-56px)]">
        <Sidebar />
        <main className="h-full flex-1 overflow-y-auto   scrollbar scrollbar-thumb-[#606060]/40 scrollbar-w-2 ">
          {children}
        </main>
      </div>
    </>
  );
}
