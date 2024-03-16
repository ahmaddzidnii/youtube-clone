"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useSidebar } from "@/hooks/use-sidebar";

export function SidebarCloseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { onClose, isOpen } = useSidebar();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    if (url && isOpen) {
      onClose();
    }
  }, [pathname, searchParams]);

  return <>{children}</>;
}
