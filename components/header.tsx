import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-purple-600">mandai.co.ke</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="/browse-cars" className="text-sm font-medium">
            Browse Cars
          </Link>
          <Link href="/sell-your-car" className="text-sm font-medium">
            Sell Your Car
          </Link>
          <Link href="/about-us" className="text-sm font-medium">
            About Us
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/sign-in">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link href="/list-your-car">
            <Button className="bg-purple-600 hover:bg-purple-700">List Your Car</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

