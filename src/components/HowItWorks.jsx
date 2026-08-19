function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect",
      description:
        "Bring financial and operational data together from the systems you already use.",
    },
    {
      number: "02",
      title: "Automate",
      description:
        "Replace repetitive reporting, reconciliation and finance workflows.",
    },
    {
      number: "03",
      title: "Analyse",
      description:
        "Turn processed data into dashboards, trends and actionable insights.",
    },
    {
      number: "04",
      title: "Act",
      description:
        "Give leadership the visibility needed to make faster, better decisions.",
    },
  ]

  return (
    <section
      id="how-it-works"
      className="bg-white px-6 py-16 text-[#0B2E59] lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#C8A24A]">
              How We Work
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
              From data to decisions.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-slate-500">
            Aurevia connects the workflow between your data, your reporting
            and the decisions that move your business forward.
          </p>
        </div>

        {/* Process */}
        <div className="relative mt-12">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-slate-200 md:block" />

          <div className="grid gap-5 md:grid-cols-4">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A24A]/60 hover:shadow-lg"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Step marker */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#C8A24A] bg-white text-sm font-semibold text-[#C8A24A] transition-all duration-300 group-hover:bg-[#0B2E59] group-hover:text-white">
                  {step.number}
                </div>

                <h3 className="mt-7 text-2xl font-semibold tracking-tight">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {step.description}
                </p>

                <div className="mt-6 h-px w-8 bg-[#C8A24A] transition-all duration-300 group-hover:w-16" />
              </article>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-12 flex flex-col gap-5 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-medium tracking-tight sm:text-xl">
            Connect.
            <span className="text-slate-400"> Automate.</span>{" "}
            <span className="text-slate-400">Analyse.</span>{" "}
            <span className="text-[#C8A24A]">Act.</span>
          </p>

          <a
            href="#contact"
            className="w-fit rounded-full bg-[#0B2E59] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#123E6D]"
          >
            Talk to Aurevia →
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks