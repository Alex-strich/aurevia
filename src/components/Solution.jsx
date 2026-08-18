function Solution() {
  const services = [
    {
      number: "01",
      title: "Financial Leadership",
      items: [
        "Fractional CFO Services",
        "Budgeting & Forecasting",
        "Cash Flow Management",
        "Financial Planning & Analysis",
      ],
    },
    {
      number: "02",
      title: "Business Visibility",
      items: [
        "Executive Dashboards",
        "KPI Reporting",
        "Profitability Analysis",
        "Management Reporting Systems",
      ],
    },
    {
      number: "03",
      title: "Finance Transformation",
      items: [
        "Financial Process Improvement",
        "Reporting Automation",
        "Data Consolidation",
        "Finance Systems Optimization",
      ],
    },
  ]

  return (
    <section
      id="solutions"
      className="bg-[#0B2E59] px-6 py-20 text-white lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#C8A24A]">
            Our Services
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.025em] sm:text-5xl">
            Finance expertise built around better decisions.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/65">
            Aurevia combines financial leadership, business visibility and
            finance transformation to help growing businesses understand
            performance and act with confidence.
          </p>
        </div>

        <div className="mt-14 grid border-t border-white/10 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="border-b border-white/10 p-7 md:min-h-72 md:border-b-0 md:border-r md:p-8 last:border-r-0"
            >
              <span className="text-sm font-medium text-[#C8A24A]">
                {service.number}
              </span>

              <h3 className="mt-8 text-2xl font-semibold">
                {service.title}
              </h3>

              <ul className="mt-6 space-y-3">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-white/60"
                  >
                    <span className="text-[#C8A24A]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solution