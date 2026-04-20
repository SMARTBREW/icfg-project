"use client";

import "./globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-8 text-black">
        <h2 className="font-['Inter'] text-2xl font-bold text-black">
          Something went wrong
        </h2>
        <p className="mt-4 text-center font-['Inter'] text-gray-600">
          Please try again in a moment.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="icfg-btn-primary mt-8 rounded-2xl px-8 py-3 font-['Inter'] font-[500]"
        >
          Try again
        </button>
        {process.env.NODE_ENV === "development" && (
          <pre className="mt-8 max-w-2xl text-left text-xs text-gray-500">
            {error.message}
          </pre>
        )}
      </body>
    </html>
  );
}
