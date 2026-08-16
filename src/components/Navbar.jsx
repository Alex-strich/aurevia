function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#07111f]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-semibold tracking-[0.2em] text-white"
        >
          AUREVIA
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
            How It Works
          </a>

          <a
            href="#why-aurevia"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Why Aurevia
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-[#c9a45c] px-5 py-2.5 text-sm font-medium text-[#07111f] transition hover:scale-[1.02] hover:bg-[#d6b775] md:block"
        >
          Book a Demo
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-lg border border-white/10 p-2 text-white md:hidden"
          aria-label="Open navigation menu"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Navbar