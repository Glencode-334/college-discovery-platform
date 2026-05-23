"use client";

import { useState } from "react";

import { colleges } from "@/data/college";

import CollegeCard from "@/components/college/CollegeCard";

import { Input } from "@/components/ui/input";

export default function CollegesPage() {

  // Search state
  const [search, setSearch] = useState("");

  // Filter colleges
  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="space-y-8">

      {/* Heading */}
      <div>

        <h1 className="text-4xl font-bold">
          Explore Colleges
        </h1>

        <p className="mt-2 text-gray-500">
          Search and compare top colleges.
        </p>

      </div>

      {/* Search Input */}
      <div className="max-w-md">

        <Input
          placeholder="Search colleges..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* College Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {filteredColleges.length > 0 ? (

          filteredColleges.map((college) => (
            <CollegeCard
              key={college.id}
              college={college}
            />
          ))

        ) : (

          <p className="text-gray-500">
            No colleges found.
          </p>

        )}

      </div>

    </section>
  );
}