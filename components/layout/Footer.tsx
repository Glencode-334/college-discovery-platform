export default function Footer() {

  return (
    <footer className="mt-20 border-t bg-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-gray-500 md:flex-row">

        <p>
          © 2026 CollegeHub. All rights reserved.
        </p>

        <div className="flex items-center gap-4">

          <span>
            Built with Next.js
          </span>

          <span>•</span>

          <span>
            TypeScript
          </span>

          <span>•</span>

          <span>
            TailwindCSS
          </span>

        </div>

      </div>

    </footer>
  );
}