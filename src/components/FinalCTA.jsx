function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#c9a45c] px-6 py-24 text-[#07111f] lg:px-8 lg:py-32"
    >
      {/* Decorative elements */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#07111f]/10" />
      <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-[#07111f]/10" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#07111f]/60">
            Start the Conversation
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-7xl">
            Ready to see what your business could automate?
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#07111f]/65">
            Let's explore where better financial reporting, connected data and
            intelligent automation could create value for your business.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:hello@aurevia.com"
              className="inline-flex items-center justify-center rounded-full bg-[#07111f] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#102238]"
            >
              Book a Demo
            </a>

            <a
              href="mailto:hello@aurevia.com"
              className="inline-flex items-center justify-center rounded-full border border-[#07111f]/20 px-7 py-3.5 text-sm font-medium transition hover:border-[#07111f]/50 hover:bg-[#07111f]/5"
            >
              Contact Aurevia
            </a>
          </div>
        </div>

        <div className="mt-20 border-t border-[#07111f]/15 pt-6">
          <p className="text-sm text-[#07111f]/50">
            Finance · Automation · Business Intelligence
          </p>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA