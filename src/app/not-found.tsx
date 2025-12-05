import Link from "next/link";


export default function NotFound() {
  return (
    <div className="f-col f-center mt-12 gap-2">
      <h1 className="text-xl fw-600">404 - Not Found</h1>
      <p className="text-p2 fw-400 text-gray-11">The page you are looking for does not exist.</p>
      <div className="mt-8">
        <Link href="/" className="btn-outline btn rounded-md">
          Go Home
        </Link>
      </div>
    </div>
  );
}