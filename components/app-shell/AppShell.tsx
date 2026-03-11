"use client";

import { ReactNode } from "react";
import { TopNav } from "../nav/TopNav";
import { BottomNav } from "../nav/BottomNav";

type AppShellProps = {
  children: ReactNode;
  showTopNav?: boolean;
  showBottomNav?: boolean;
  title?: string;
  backHref?: string;
};

export function AppShell({
  children,
  showTopNav = true,
  showBottomNav = false,
  title,
  backHref,
}: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-center">
      {showTopNav && <TopNav title={title} backHref={backHref} />}
      <main className="flex-1">{children}</main>
      {showBottomNav && <BottomNav />}
    </div>
  );
}
