import Link from "next/link";

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
        <div className="mt-10">

          <Link
            href="/colleges"
            className="inline-flex items-center rounded-lg bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition-colors"
          >
            Explore Colleges
          </Link>

        </div>

      </div>

    </section>
  );
}