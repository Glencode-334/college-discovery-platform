"use client";

import { useCompareStore } from "@/store/compare-store";

import { Button } from "@/components/ui/button";

export default function ComparePage() {

  const {
    comparedColleges,
    removeCollege,
  } = useCompareStore();

  return (
    <section className="space-y-8">

      {/* Heading */}
      <div>

        <h1 className="text-4xl font-bold">
          Compare Colleges
        </h1>

        <p className="mt-2 text-gray-500">
          Compare colleges side-by-side.
        </p>

      </div>

      {/* Empty State */}
      {comparedColleges.length === 0 ? (

        <div className="rounded-2xl border p-10 text-center">

          <h2 className="text-2xl font-semibold">
            No colleges selected
          </h2>

          <p className="mt-3 text-gray-500">
            Add colleges to compare from the listing page.
          </p>

        </div>

      ) : (

        <div className="overflow-x-auto">

          <table className="w-full border-collapse rounded-xl overflow-hidden">

            <thead>

              <tr className="bg-gray-100 text-left">

                <th className="p-4">
                  Field
                </th>

                {comparedColleges.map((college) => (

                  <th
                    key={college.id}
                    className="p-4 min-w-[250px]"
                  >

                    <div className="space-y-3">

                      <img
                        src={college.image}
                        alt={college.name}
                        className="h-36 w-full rounded-lg object-cover"
                      />

                      <div>

                        <h2 className="text-lg font-semibold">
                          {college.name}
                        </h2>

                        <p className="text-sm text-gray-500">
                          {college.location}
                        </p>

                      </div>

                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() =>
                          removeCollege(college.id)
                        }
                      >
                        Remove
                      </Button>

                    </div>

                  </th>

                ))}

              </tr>

            </thead>

            <tbody>

              {/* Fees */}
              <tr className="border-t">

                <td className="p-4 font-medium">
                  Fees
                </td>

                {comparedColleges.map((college) => (

                  <td
                    key={college.id}
                    className="p-4"
                  >
                    ₹{college.fees.toLocaleString()}
                  </td>

                ))}

              </tr>

              {/* Rating */}
              <tr className="border-t">

                <td className="p-4 font-medium">
                  Rating
                </td>

                {comparedColleges.map((college) => (

                  <td
                    key={college.id}
                    className="p-4"
                  >
                    ⭐ {college.rating}
                  </td>

                ))}

              </tr>

              {/* Placement */}
              <tr className="border-t">

                <td className="p-4 font-medium">
                  Placement Rate
                </td>

                {comparedColleges.map((college) => (

                  <td
                    key={college.id}
                    className="p-4"
                  >
                    {college.placementRate}
                  </td>

                ))}

              </tr>

            </tbody>

          </table>

        </div>

      )}

    </section>
  );
}