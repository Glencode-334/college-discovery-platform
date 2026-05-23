import { notFound } from "next/navigation";

import { colleges } from "@/data/college";

export default async function CollegeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const college = colleges.find(
    (college) => college.id === id
  );

  // Handle invalid route
  if (!college) {
    return notFound();
  }

  return (
    <section className="space-y-10">

      {/* Hero Image */}
      <img
        src={college.image}
        alt={college.name}
        className="h-[400px] w-full rounded-2xl object-cover"
      />

      {/* Header */}
      <div>

        <h1 className="text-5xl font-bold">
          {college.name}
        </h1>

        <p className="mt-2 text-lg text-gray-500">
          {college.location}
        </p>

      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-xl border p-6">
          <h3 className="font-semibold">
            Fees
          </h3>

          <p className="mt-2 text-2xl font-bold">
            ₹{college.fees.toLocaleString()}
          </p>
        </div>

        <div className="rounded-xl border p-6">
          <h3 className="font-semibold">
            Rating
          </h3>

          <p className="mt-2 text-2xl font-bold">
            ⭐ {college.rating}
          </p>
        </div>

        <div className="rounded-xl border p-6">
          <h3 className="font-semibold">
            Placement Rate
          </h3>

          <p className="mt-2 text-2xl font-bold">
            {college.placementRate}
          </p>
        </div>

      </div>

      {/* Overview */}
      <div>

        <h2 className="text-3xl font-bold">
          Overview
        </h2>

        <p className="mt-4 text-gray-600 leading-7">
          {college.description}
        </p>

      </div>

      {/* Courses */}
      <div>

        <h2 className="text-3xl font-bold mb-6">
          Courses
        </h2>

        <div className="space-y-4">

          {college.courses.map((course) => (
            <div
              key={course.name}
              className="rounded-xl border p-5"
            >

              <h3 className="font-semibold text-lg">
                {course.name}
              </h3>

              <p className="mt-1 text-gray-500">
                {course.duration}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* Reviews */}
      <div>

        <h2 className="text-3xl font-bold mb-6">
          Reviews
        </h2>

        <div className="space-y-4">

          {college.reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-xl border p-5"
            >

              <div className="flex items-center justify-between">

                <h3 className="font-semibold">
                  {review.user}
                </h3>

                <span>
                  ⭐ {review.rating}
                </span>

              </div>

              <p className="mt-3 text-gray-600">
                {review.comment}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}