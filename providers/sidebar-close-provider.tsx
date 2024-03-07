"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useSidebar } from "@/hooks/use-sidebar";

export function SidebarCloseProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { onClose } = useSidebar();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    if (url) {
      onClose();
    }
  }, [pathname, searchParams]);

  return null;
}
