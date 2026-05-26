"use client";

import Link from "next/link";
import { toast } from "sonner";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { College } from "@/types/college";

import { useCompareStore } from "@/store/compare-store";

interface Props {
  college: College;
}

export default function CollegeCard({
  college,
}: Props) {

  const addCollege = useCompareStore(
    (state) => state.addCollege
  );

  const handleCompare = () => {

  addCollege(college);

  toast.success(
    `${college.name} added to compare`
  );
};

  return (

    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">

      {/* Image */}
      <Link href={`/colleges/${college.id}`}>

        <img
          src={college.image}
          alt={college.name}
          className="h-52 w-full object-cover cursor-pointer"
        />

      </Link>

      <CardContent className="p-5">

        {/* Name */}
        <Link href={`/colleges/${college.id}`}>

          <h2 className="text-xl font-semibold cursor-pointer hover:underline">
            {college.name}
          </h2>

        </Link>

        {/* Location */}
        <p className="mt-1 text-gray-500">
          {college.location}
        </p>

        {/* Stats */}
        <div className="mt-4 flex items-center justify-between text-sm">

          <span className="font-medium">
            ₹{college.fees.toLocaleString()}
          </span>

          <span>
            ⭐ {college.rating}
          </span>

        </div>

        {/* Placement */}
        <div className="mt-3 text-sm text-gray-600">

          Placement Rate:
          <span className="ml-1 font-medium">
            {college.placementRate}
          </span>

        </div>

        {/* Compare Button */}
        <Button
          className="mt-5 w-full"
          onClick={handleCompare}
        >
          Add to Compare
        </Button>

      </CardContent>

    </Card>
  );
}