import heroImage from "../assets/images/hero-financial-data.jpg"

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#07111f]"
    >
      {/* Background image */}
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Navy treatment */}
      <div className="absolute inset-0 -z-10 bg-[#07111f]/75" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07111f] via-[#07111f]/90 to-[#07111f]/30" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07111f] via-transparent to-[#07111f]/40" />

      {/* Content */}
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-20 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-[#c9a45c]">
            Financial Intelligence + Automation
          </p>

          {/* Headline */}
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
            Turn Your Business Data Into{" "}
            <span className="text-[#c9a45c]">
              Management Intelligence.
            </span>
          </h1>

          {/* Supporting copy */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            Aurevia helps businesses automate financial reporting, improve
            management visibility and turn fragmented financial and operational
            data into actionable intelligence.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#c9a45c] px-7 py-3.5 text-sm font-semibold text-[#07111f] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d6b775]"
            >
              Book a Demo
            </a>

            <a
              href="#platform"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:border-white/40 hover:bg-white/5"
            >
              Explore the Platform
              <span className="ml-2">↓</span>
            </a>
          </div>

          {/* Trust/detail line */}
          <div className="mt-12 flex items-center gap-3 text-sm text-white/45">
            <span className="h-px w-10 bg-[#c9a45c]/60" />
            <span>Finance · Automation · Business Intelligence</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero