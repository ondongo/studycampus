"use client";

import useSticky from "@/hooks/use-sticky";

type IProps = {
  cls?: string;
  children: React.ReactNode;
};

export default function HeaderStickyWrapper({
  children,
  cls = "tp-header-mob-space tp-header-1",
}: IProps) {
  const { sticky } = useSticky();
  return (
    <div
      id="header-sticky"
      className={`${cls} ${sticky ? "tp-header-sticky" : ""}`}
    >
      {children}
    </div>
  );
}
