function Footer() {
  const navigation = [
    { label: "Solutions", href: "#solutions" },
    { label: "Platform", href: "#platform" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
  ]

  return (
    <footer className="bg-[#0B2E59] px-6 py-14 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-xl font-semibold tracking-[-0.02em]"
            >
              AUREVIA
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/40">
              Financial intelligence and automation for businesses ready to
              turn data into better decisions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#C8A24A]">
              Explore
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-white/50 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#C8A24A]">
              Contact
            </p>

            <div className="mt-5 space-y-3 text-sm text-white/50">
              <a
                href="mailto:hello@aurevia.com"
                className="block transition hover:text-white"
              >
                hello@aurevia.com
              </a>

              <a
                href="#contact"
                className="block transition hover:text-white"
              >
                Book a Consultation →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aurevia. All rights reserved.</p>

          <p>Financial Intelligence + Automation</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer