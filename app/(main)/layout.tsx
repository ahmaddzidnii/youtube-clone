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
        <main className="h-full flex-1 overflow-y-auto  px-1 pt-[12px] scrollbar  lg:px-4 xl:scrollbar-thumb-[#606060]/40  xl:scrollbar-w-2  ">
          {children}
        </main>
      </div>
    </>
  );
}
