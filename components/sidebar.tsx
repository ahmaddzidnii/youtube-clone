"use client";

import {
  SidebarLarge,
  SidebarMedium,
} from "@/components/sidebar/sidebar-components";
import { useSidebar } from "@/hooks/use-sidebar";

export const Sidebar = () => {
  const { sidebar_medium_open } = useSidebar();

  return (
    <>
      {/* Sidebar Medium */}
      <div className="hidden md:block xl:hidden">
        <SidebarMedium />
      </div>
      {/* Sidebar Medium */}

      {/* Sidebar Large */}
      <div className="hidden xl:block">
        {sidebar_medium_open ? <SidebarMedium /> : <SidebarLarge />}
      </div>
      {/* Sidebar Large */}
    </>
  );
};
