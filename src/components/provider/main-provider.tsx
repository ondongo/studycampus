'use client';
import { wowAnimation } from "@/utils";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import GlobalContextProvider from "./global-context-provider";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}


type IProps = {
  children: React.ReactNode;
};

export default function MainProvider({ children }: IProps) {
  const pathname = usePathname();
  useEffect(() => {
    wowAnimation();
  }, [pathname])
  return <GlobalContextProvider>{children}</GlobalContextProvider>;
}
