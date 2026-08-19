import heroImage from "../assets/images/hero-financial-data.jpg"

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#0B2E59] pt-20"
    >
      {/* Background image */}
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Brand treatment */}
      <div className="absolute inset-0 -z-10 bg-[#0B2E59]/80" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0B2E59] via-[#0B2E59]/95 to-[#0B2E59]/45" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0B2E59] via-transparent to-[#0B2E59]/30" />

      {/* Content */}
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-20 lg:px-8 lg:py-24">
        <div className="max-w-4xl">
          
          {/* Positioning */}
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C8A24A]" />

            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#C8A24A]">
              Financial Advisory · Automation · Intelligence
            </p>
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
            Financial clarity for{" "}
            <span className="text-[#C8A24A]">
              growing businesses.
            </span>
          </h1>

          {/* Supporting copy */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            Aurevia combines financial expertise, automation and business intelligence
            to build practical reporting systems that give growing businesses clearer
            visibility and better decision support.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#C8A24A] px-7 py-3.5 text-sm font-semibold text-[#0B2E59] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d6b775]"
            >
              Book a Consultation
            </a>

            <a
              href="#automation"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:border-white/40 hover:bg-white/5"
            >
              See How Aurevia Works
              <span className="ml-2">↓</span>
            </a>
          </div>

          {/* Corporate descriptor */}
          <div className="mt-12 border-t border-white/10 pt-5">
            <p className="text-sm tracking-wide text-white/45">
              AUREVIA · FINANCIAL ADVISORY LTD.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero