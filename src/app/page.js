import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="home-background"></div>

      {/* Main Content */}
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-white">Real Time Ticketing</h1>
          <p className="text-lg text-gray-300 text-center">
            Buy your ticket in real time
          </p>

          {/* Buttons */}
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </a>
            <Link
              href="/admin"
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            >
              Get Started
            </Link>
          </div>
        </main>
        <footer className="flex gap-6 flex-wrap items-center justify-center fixed bottom-0 left-0 w-full bg-black-400 text-white py-4 h-16">
          @2024 Ticketing System
        </footer>
      </div>
    </div>
  );
}
