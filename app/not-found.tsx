import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      <h2 className="text-4xl font-bold text-red-600">404 Not Found</h2>
      <p className="text-lg text-gray-600">Oops! Looks like the page you re looking for does not exist.</p>
      <Link className="font-semibold text-blue-500 transition-all duration-300 hover:underline" href="/">
        Go back to Home
      </Link>
    </div>
  )
}
