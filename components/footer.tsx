import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-semibold">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/how-it-works" className="text-muted-foreground hover:text-foreground">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-muted-foreground hover:text-foreground">
                  About us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/against-discrimination" className="text-muted-foreground hover:text-foreground">
                  Against Discrimination
                </Link>
              </li>
              <li>
                <Link href="/invite-friends" className="text-muted-foreground hover:text-foreground">
                  Invite friends
                </Link>
              </li>
              <li>
                <Link href="/gift-cards" className="text-muted-foreground hover:text-foreground">
                  Gift cards
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Become seller</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/add-vehicle" className="text-muted-foreground hover:text-foreground">
                  Add your vehicle
                </Link>
              </li>
              <li>
                <Link href="/business-account" className="text-muted-foreground hover:text-foreground">
                  Business account
                </Link>
              </li>
              <li>
                <Link href="/resource-center" className="text-muted-foreground hover:text-foreground">
                  Resource Center
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help-center" className="text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/covid-19" className="text-muted-foreground hover:text-foreground">
                  Updates for COVID-19
                </Link>
              </li>
              <li>
                <Link href="/trust-safety" className="text-muted-foreground hover:text-foreground">
                  Trust & Safety
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms of Use</Link>
            </div>
            <div className="flex items-center space-x-4">
              <select className="text-sm">
                <option>English</option>
                <option>Swahili</option>
              </select>
              <select className="text-sm">
                <option>KSh</option>
                <option>USD</option>
              </select>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            © 2023 mandai.co.ke. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

