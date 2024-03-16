import { Sidebar } from "@/components/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className=" flex h-[calc(100vh-56px)]">
        <Sidebar />
        <main className="relative h-full flex-1 overflow-auto overflow-x-hidden px-1  scrollbar  scrollbar-none lg:px-4  xl:scrollbar-thumb-[#606060]/40  xl:scrollbar-w-2">
          {children}
        </main>
      </div>
    </>
  );
}
