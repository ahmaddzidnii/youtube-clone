"use client";

import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { UseSidebar } from "@/hooks/use-sidebar";
import { Button } from "@/components/ui/button";
import { YoutubeIconLogo } from "@/components/icon/youtube-icon-full";
import { SidebarLarge } from "@/components/sidebar/sidebar-components";

export const SidebarMobile = () => {
  const { isOpen, onClose } = UseSidebar();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="w-[270px]" side="left">
          <div className="-mt-5">
            <div className="flex h-full items-center">
              <Button
                className="p-2"
                variant="ghost"
                size="icon"
                onClick={() => {
                  onClose();
                }}
              >
                <RxHamburgerMenu className="h-[24px] w-[24px]" />
              </Button>

              <div className="ml-[16px] h-[20px] w-[90px]">
                <YoutubeIconLogo />
              </div>
            </div>
          </div>
          <SidebarLarge />
        </SheetContent>
      </Sheet>
    </>
  );
};
