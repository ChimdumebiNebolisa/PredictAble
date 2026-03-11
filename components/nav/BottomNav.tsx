"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/today", label: "Today" },
  { href: "/timeline", label: "Timeline" },
  { href: "/schedule", label: "Schedule" },
  { href: "/profile", label: "Profile" },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-10 flex border-t border-line bg-center shadow-slab"
      role="navigation"
      aria-label="Main"
    >
      <ul className="flex w-full">
        {NAV_ITEMS.map(({ href, label }) => {
          const isActive = pathname === href || pathname.startsWith(href + "/");
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                className="flex min-h-touch flex-col items-center justify-center gap-0.5 px-2 py-2 text-sm font-medium text-dark-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-warm-orange focus-visible:outline-offset-2"
                aria-current={isActive ? "page" : undefined}
              >
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
