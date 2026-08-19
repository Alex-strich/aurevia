import { useState } from "react"
import aureviaLogo from "../assets/images/aurevia-logo.jpeg"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0B2E59]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Brand */}
        <a
          href="#home"
          className="flex w-70 items-center"
          aria-label="Aurevia Financial Advisory Ltd."
          onClick={closeMenu}
        >
          <img
            src={aureviaLogo}
            alt="Aurevia Financial Advisory Ltd."
            className="h-auto w-full object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#solutions"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Solutions
          </a>

          <a
            href="#platform"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Platform
          </a>

          <a
            href="#how-it-works"
            className="text-sm text-white/70 transition hover:text-white"
          >
            How We Work
          </a>

          <a
            href="#about"
            className="text-sm text-white/70 transition hover:text-white"
          >
            About
          </a>
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-[#C8A24A] px-5 py-2.5 text-sm font-medium text-[#0B2E59] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d6b775] md:block"
        >
          Book a Consultation
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/10 p-2 text-white md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="border-t border-white/10 bg-[#0B2E59] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">

            <a
              href="#solutions"
              onClick={closeMenu}
              className="text-sm text-white/75 transition hover:text-white"
            >
              Solutions
            </a>

            <a
              href="#platform"
              onClick={closeMenu}
              className="text-sm text-white/75 transition hover:text-white"
            >
              Platform
            </a>

            <a
              href="#how-it-works"
              onClick={closeMenu}
              className="text-sm text-white/75 transition hover:text-white"
            >
              How We Work
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="text-sm text-white/75 transition hover:text-white"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="w-fit rounded-full bg-[#C8A24A] px-5 py-2.5 text-sm font-medium text-[#0B2E59] transition hover:bg-[#d6b775]"
            >
              Book a Consultation
            </a>

          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar