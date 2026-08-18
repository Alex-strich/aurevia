function WhyAurevia() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-14 text-[#0B2E59] lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">

          {/* Company */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#C8A24A]">
              About Aurevia
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.025em] sm:text-5xl">
              Turning Data Into Better Decisions.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-600">
              Aurevia Financial Advisory helps business owners and management
              teams gain visibility, control and confidence across financial
              and operational performance.
            </p>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              We combine finance expertise, reporting systems and process
              improvement to turn fragmented business data into actionable
              management insights that support better decisions and sustainable
              growth.
            </p>
          </div>

          {/* Founder Profile */}
          <div className="relative overflow-hidden rounded-2xl border border-[#0B2E59]/10 bg-[#0B2E59] p-7 text-white shadow-sm sm:p-9">

            {/* Subtle gold glow */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#C8A24A]/15 blur-3xl" />

            <div className="relative">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#C8A24A]">
                Founder & Managing Director
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                James Ndegwa
              </h3>

              <p className="mt-1 text-sm font-medium text-[#C8A24A]">
                FCPA(K)
              </p>

              <div className="mt-7 h-px w-12 bg-[#C8A24A]" />

              <p className="mt-7 text-sm leading-7 text-white/70">
                Finance professional and CFO with over 15 years of experience
                across financial management, reporting, controls and business
                performance.
              </p>

              <p className="mt-5 text-sm leading-7 text-white/70">
                Aurevia combines this finance expertise with automation, data
                analytics and business intelligence to build practical
                management reporting and decision support systems for growing
                businesses.
              </p>

              {/* Profile details */}
              <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/35">
                    Experience
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    15+ Years
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/35">
                    Focus
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Finance & Business Performance
                  </p>
                </div>
              </div>

              {/* LinkedIn placeholder */}
              <a
                href="https://www.linkedin.com/in/james-kahiga-10b33439/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center rounded-full border border-[#C8A24A]/50 bg-[#C8A24A]/10 px-5 py-2.5 text-sm font-medium text-[#C8A24A] transition duration-300 hover:-translate-y-0.5 hover:bg-[#C8A24A] hover:text-[#0B2E59]"
              >
                View LinkedIn Profile
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyAurevia