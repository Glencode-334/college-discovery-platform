"use client";

import Link from "next/link";

import { useCompareStore } from "@/store/compare-store";

export default function Navbar() {

  const comparedColleges = useCompareStore(
    (state) => state.comparedColleges
  );

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

          <Link href="/colleges">
            Colleges
          </Link>

          <Link href="/compare">

            Compare

            {comparedColleges.length > 0 && (
              <span className="ml-1 rounded-full bg-black px-2 py-1 text-xs text-white">
                {comparedColleges.length}
              </span>
            )}

          </Link>

          <Link href="/predictor">
            Predictor
          </Link>

        </nav>

      </div>

    </header>
  );
}