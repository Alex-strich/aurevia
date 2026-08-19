function AutomationDemo() {
  const steps = [
    {
      number: "01",
      label: "Source Data",
      title: "Connect your business data",
      description:
        "Bring together financial, sales and operational information from the systems your business already uses.",
      items: ["Accounting", "Sales", "Operations"],
    },
    {
      number: "02",
      label: "Automated Processing",
      title: "Automate the work behind the numbers",
      description:
        "Data is structured, consolidated and processed through repeatable financial workflows.",
      items: ["Clean", "Consolidate", "Reconcile"],
    },
    {
      number: "03",
      label: "Dashboard",
      title: "Turn processed data into visibility",
      description:
        "Management dashboards surface the financial and operational indicators that matter.",
      items: ["Revenue", "Profitability", "Working Capital"],
    },
    {
      number: "04",
      label: "Executive Insight",
      title: "Know what needs attention",
      description:
        "Identify trends, exceptions and issues so leadership can move from information to action.",
      items: ["Trends", "Exceptions", "Actions"],
    },
  ]

  return (
    <section
      id="automation"
      className="bg-[#0B2E59] px-6 py-24 text-white lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#C8A24A]">
              Automation Demo
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.025em] sm:text-5xl lg:text-6xl">
              From source data to executive insight.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
              See how Aurevia connects fragmented information, automates
              financial processes and turns business data into clearer
              management intelligence.
            </p>
          </div>

          {/* Demo button */}
          <button
            type="button"
            className="group flex w-fit items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition hover:border-[#C8A24A]/60 hover:text-[#C8A24A]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C8A24A] text-[#0B2E59] transition-transform group-hover:scale-105">
              ▶
            </span>

            Watch the 60–90 sec demo
          </button>
        </div>

        {/* Automation flow */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="group relative bg-[#091625] p-7 transition-colors duration-300 hover:bg-[#0d1d30] lg:p-8"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#C8A24A]">
                  {step.number}
                </span>

                {index < steps.length - 1 && (
                  <span className="hidden text-white/20 lg:block">→</span>
                )}
              </div>

              {/* Label */}
              <p className="mt-10 text-[10px] font-medium uppercase tracking-[0.18em] text-white/35">
                {step.label}
              </p>

              {/* Title */}
              <h3 className="mt-3 text-xl font-semibold leading-snug">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-6 text-white/50">
                {step.description}
              </p>

              {/* Items */}
              <div className="mt-8 space-y-2 border-t border-white/10 pt-5">
                {step.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs text-white/60"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C8A24A]" />
                    {item}
                  </div>
                ))}
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#C8A24A] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Demonstration panel */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#091625]">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left */}
            <div className="flex flex-col justify-center border-b border-white/10 p-8 lg:border-b-0 lg:border-r lg:p-12">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#C8A24A]">
                The Aurevia workflow
              </p>

              <h3 className="mt-5 text-3xl font-semibold leading-tight">
                Less manual processing.
                <br />
                More management intelligence.
              </h3>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
                Instead of spending hours moving information between
                spreadsheets and reports, Aurevia creates a connected path
                from business data to management visibility.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm text-white/70">
                <span className="h-2 w-2 rounded-full bg-[#C8A24A]" />
                Automated financial workflow
              </div>
            </div>

            {/* Right visual */}
            <div className="relative min-h-[360px] p-6 lg:p-10">
              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-30">
                <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
              </div>

              {/* Flow visual */}
              <div className="relative flex h-full flex-col justify-center gap-4">
                {/* Source */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs text-[#C8A24A]">
                    DATA
                  </div>

                  <div className="h-px flex-1 bg-gradient-to-r from-[#C8A24A]/60 to-white/10" />

                  <div className="rounded-xl border border-white/10 bg-[#0B2E59] px-5 py-3">
                    <p className="text-[10px] uppercase tracking-[0.12em] text-white/30">
                      Source
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      Business Data
                    </p>
                  </div>
                </div>

                {/* Processing */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#C8A24A]/20 bg-[#C8A24A]/10 text-xs text-[#C8A24A]">
                    AUTO
                  </div>

                  <div className="h-px flex-1 bg-gradient-to-r from-[#C8A24A]/60 to-white/10" />

                  <div className="rounded-xl border border-white/10 bg-[#0B2E59] px-5 py-3">
                    <p className="text-[10px] uppercase tracking-[0.12em] text-white/30">
                      Process
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      Automated Workflow
                    </p>
                  </div>
                </div>

                {/* Dashboard */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs text-[#C8A24A]">
                    VIEW
                  </div>

                  <div className="h-px flex-1 bg-gradient-to-r from-[#C8A24A]/60 to-white/10" />

                  <div className="rounded-xl border border-white/10 bg-[#0B2E59] px-5 py-3">
                    <p className="text-[10px] uppercase tracking-[0.12em] text-white/30">
                      Output
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      Management Dashboard
                    </p>
                  </div>
                </div>

                {/* Insight */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#C8A24A]/20 bg-[#C8A24A]/10 text-xs text-[#C8A24A]">
                    ACT
                  </div>
                  
                  <div className="h-px flex-1 bg-gradient-to-r from-[#C8A24A]/60 to-white/10" />

                  <div className="rounded-xl border border-white/10 bg-[#0B2E59] px-5 py-3">
                    <p className="text-[10px] uppercase tracking-[0.12em] text-white/30">
                      Insight
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      Management Action
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="max-w-3xl text-lg leading-8 text-white/55">
            <span className="text-white">Connect.</span>{" "}
            <span className="text-white">Automate.</span>{" "}
            <span className="text-white">Analyse.</span>{" "}
            <span className="text-white">Act.</span>{" "}
          </p>
        </div>
      </div>
    </section>
  )
}

export default AutomationDemo