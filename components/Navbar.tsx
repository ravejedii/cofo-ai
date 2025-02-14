import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold gradient-text">
                COFO.AI
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#team"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Team
            </Link>
            <Link
              href="#roadmap"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Roadmap
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Button variant="default">Get Started</Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

