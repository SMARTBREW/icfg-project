"use client";

import { useEffect } from "react";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-[4.5rem] py-20 text-black">
      <h2 className="font-['Inter'] text-2xl font-bold tracking-[-0.04em] text-black">
        Something went wrong
      </h2>
      <p className="mt-4 max-w-md text-center font-['Inter'] text-[1rem] tracking-[-0.01em] text-gray-600">
        We could not render this section. Please try again.
      </p>
      <button
        type="button"
        onClick={() => unstable_retry()}
        className="icfg-btn-primary mt-8 rounded-2xl px-8 py-3 font-['Inter'] font-[500]"
      >
        Try again
      </button>
      {process.env.NODE_ENV === "development" && (
        <details className="mt-10 max-w-2xl rounded-2xl border border-gray-200 bg-gray-100 p-4 text-left text-xs text-gray-600">
          <summary className="cursor-pointer font-['Inter'] text-sm text-black">
            Error details (development)
          </summary>
          <pre className="mt-4 overflow-x-auto whitespace-pre-wrap">
            {error.message}
          </pre>
        </details>
      )}
    </div>
  );
}
