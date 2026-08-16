function Solution() {
  const services = [
    {
      number: "01",
      title: "Automated Financial Reporting",
      description:
        "Reduce manual reporting and spreadsheet work with financial reporting processes built around your business data.",
      detail: "Less manual work",
    },
    {
      number: "02",
      title: "Executive Dashboards",
      description:
        "Give leadership a clear view of revenue, profitability, budgets, sales and working capital.",
      detail: "Better visibility",
    },
    {
      number: "03",
      title: "Financial Process Automation",
      description:
        "Automate repetitive finance workflows and reconciliations so your team can spend less time processing and more time analysing.",
      detail: "Smarter processes",
    },
    {
      number: "04",
      title: "Executive Intelligence",
      description:
        "Identify trends, exceptions and emerging issues that require management attention before they become larger problems.",
      detail: "Faster decisions",
    },
  ]

  return (
    <section
      id="solutions"
      className="bg-[#07111f] px-6 py-20 text-white lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c9a45c]">
            The Solution
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl">
            Turn complexity into clarity.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 lg:text-lg">
            Aurevia connects financial data, automates reporting and gives
            leadership the intelligence needed to act.
          </p>
        </div>

        {/* Services */}
        <div className="mt-14 grid border-t border-white/10 md:grid-cols-2 lg:mt-16">
          {services.map((service) => (
            <article
              key={service.number}
              className="group border-b border-white/10 p-6 transition-colors duration-300 hover:bg-white/[0.025] md:min-h-64 md:p-8 md:odd:border-r"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs font-semibold text-[#c9a45c]">
                  {service.number}
                </span>

                <span className="text-[10px] uppercase tracking-[0.16em] text-white/30">
                  {service.detail}
                </span>
              </div>

              <h3 className="mt-10 max-w-md text-xl font-semibold tracking-[-0.015em] transition-colors duration-300 group-hover:text-[#c9a45c] md:text-2xl">
                {service.title}
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-6 text-white/55 md:text-base md:leading-7">
                {service.description}
              </p>

              <div className="mt-6 h-px w-8 bg-[#c9a45c]/60 transition-all duration-300 group-hover:w-16" />
            </article>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between lg:mt-16">
          <p className="max-w-2xl text-base leading-7 text-white/65 lg:text-lg">
            From source data to management insight, Aurevia creates a more
            connected financial operating environment.
          </p>

          <a
            href="#platform"
            className="shrink-0 text-sm font-medium text-[#c9a45c] transition-colors duration-300 hover:text-white"
          >
            See the platform →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Solution