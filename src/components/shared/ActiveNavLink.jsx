"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveNavLink({ href, children }) {
  const pathname = usePathname();

  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname === href;

  return (
    <Link href={href}>
      <button
        className={`px-4 py-1 rounded-2xl ${
          isActive
            ? "text-[#ccff00] bg-[#3c470c]"
            : "text-[#9CA3AF] hover:bg-gray-800"
        }`}
      >
        {children}
      </button>
    </Link>
  );
}