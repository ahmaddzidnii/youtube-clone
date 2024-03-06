import { Sidebar } from "@/components/sidebar";
import { SidebarMobile } from "@/components/sidebar-mobile";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarMobile />
      <div className="flex h-[calc(100vh-56px)] gap-x-4">
        <Sidebar />
        <main className="h-full flex-1 overflow-y-auto   scrollbar scrollbar-thumb-[#606060]/40 scrollbar-w-2 ">
          {children}
        </main>
      </div>
    </>
  );
}
