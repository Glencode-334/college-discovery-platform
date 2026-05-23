import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {

  return (
    <section className="space-y-8">

      {/* Heading */}
      <div className="space-y-3">

        <Skeleton className="h-10 w-72" />

        <Skeleton className="h-5 w-96" />

      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {Array.from({ length: 6 }).map((_, index) => (

          <div
            key={index}
            className="space-y-4 rounded-xl border p-4"
          >

            <Skeleton className="h-52 w-full rounded-lg" />

            <Skeleton className="h-6 w-3/4" />

            <Skeleton className="h-4 w-1/2" />

            <Skeleton className="h-4 w-full" />

            <Skeleton className="h-10 w-full rounded-md" />

          </div>

        ))}

      </div>

    </section>
  );
}