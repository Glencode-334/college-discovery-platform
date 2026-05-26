import Link from "next/link";

import { Button } from "@/components/ui/button";
export default function HomePage() {
  return (
    <section className="py-24">

      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">

          Discover Your
          <span className="block text-gray-500">
            Dream College
          </span>

        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">

          Explore colleges, compare placements, analyze fees,
          and make smarter career decisions.

        </p>

        {/* CTA Button */}
        <div className="mt-6">

          <Link href="/colleges">

            <Button size="lg">
              Explore Colleges
            </Button>

          </Link>

        </div>

      </div>

    </section>
  );
}