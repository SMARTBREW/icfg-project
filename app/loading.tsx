export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div
        className="h-16 w-16 animate-spin rounded-full border-2 border-gray-200 border-t-gray-900"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}
