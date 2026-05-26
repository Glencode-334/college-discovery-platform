"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { useCompareStore } from "@/store/compare-store";

export default function Navbar() {

  const pathname = usePathname();

  const comparedColleges = useCompareStore(
    (state) => state.comparedColleges
  );

  const navLinks = [
    {
      label: "Colleges",
      href: "/colleges",
    },
    {
      label: "Compare",
      href: "/compare",
    },
    {
      label: "Predictor",
      href: "/predictor",
    },
  ];

  return (
    <header className="border-b bg-white">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold"
        >
          CollegeHub
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm font-medium">

          {navLinks.map((link) => {

            const isActive =
              pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  isActive
                    ? "text-black font-semibold"
                    : "text-gray-500 hover:text-black"
                }`}
              >

                {link.label}

                {link.label === "Compare" &&
                  comparedColleges.length > 0 && (

                    <span className="ml-1 rounded-full bg-black px-2 py-1 text-xs text-white">

                      {comparedColleges.length}

                    </span>

                  )}

              </Link>
            );
          })}

        </nav>

      </div>

    </header>
  );
}