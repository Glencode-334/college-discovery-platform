"use client";

import { useState } from "react";

import { colleges } from "@/data/college";

import CollegeCard from "@/components/college/CollegeCard";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

export default function PredictorPage() {

  const [exam, setExam] = useState("");

  const [rank, setRank] = useState("");

  const [results, setResults] = useState(colleges);

  const handlePredict = () => {

  const numericRank = Number(rank);

  let filtered = [];

  // Top Tier
  if (numericRank <= 500) {

    filtered = colleges.filter(
      (college) =>
        college.rating >= 4.8 &&
        college.fees <= 300000
    );

  }

  // Strong Tier
  else if (numericRank <= 2000) {

    filtered = colleges.filter(
      (college) =>
        college.rating >= 4.5 &&
        college.placementRate.includes("9")
    );

  }

  // Mid Tier
  else if (numericRank <= 5000) {

    filtered = colleges.filter(
      (college) =>
        college.rating >= 4.2
    );

  }

  // Wider Recommendation Pool
  else {

    filtered = colleges.filter(
      (college) =>
        college.rating >= 4.0
    );

  }

  setResults(filtered);
};

  return (
    <section className="space-y-8">

      {/* Heading */}
      <div>

        <h1 className="text-4xl font-bold">
          College Predictor
        </h1>

        <p className="mt-2 text-gray-500">
          Predict colleges based on your rank.
        </p>

      </div>

      {/* Form */}
      <div className="grid gap-4 md:grid-cols-3">

        <Input
          placeholder="Exam (e.g. JEE)"
          value={exam}
          onChange={(e) =>
            setExam(e.target.value)
          }
        />

        <Input
          placeholder="Enter Rank"
          type="number"
          value={rank}
          onChange={(e) =>
            setRank(e.target.value)
          }
        />

        <Button onClick={handlePredict}>
          Predict Colleges
        </Button>
        <p className="text-sm text-gray-500">
            Predictions are based on mock rank analysis and placement trends.
        </p>
      </div>

      {/* Results */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {results.map((college) => (

          <CollegeCard
            key={college.id}
            college={college}
          />

        ))}

      </div>

    </section>
  );
}