function Problem() {
  const problems = [
    {
      number: "01",
      title: "Manual Reporting",
      description:
        "Too much time spent compiling reports, reconciling spreadsheets and preparing information for management.",
    },
    {
      number: "02",
      title: "Fragmented Data",
      description:
        "Financial and operational information sits across disconnected systems, files and processes.",
    },
    {
      number: "03",
      title: "Delayed Information",
      description:
        "Important financial signals arrive too late to support timely management decisions.",
    },
    {
      number: "04",
      title: "Poor Visibility",
      description:
        "Leadership lacks a clear, consolidated view of performance, profitability and working capital.",
    },
  ]

  return (
    <section
      id="problem"
      className="bg-white px-6 py-20 text-[#07111f] lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Introduction */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b58d45]">
              The Problem
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl">
              Financial information shouldn't slow your business down.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 lg:text-lg">
            As businesses grow, financial reporting and operational data become
            harder to manage. Manual processes create delays, fragmented
            information and limited visibility for decision-makers.
          </p>
        </div>

        {/* Problems */}
        <div className="mt-14 grid border-t border-slate-200 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {problems.map((problem) => (
            <article
              key={problem.number}
              className="group border-b border-slate-200 px-5 py-7 transition-all duration-300 hover:bg-slate-50 sm:min-h-56 sm:border-r lg:border-b-0 lg:px-6"
            >
              <span className="text-xs font-semibold text-[#b58d45]">
                {problem.number}
              </span>

              <h3 className="mt-6 text-lg font-semibold transition-colors duration-300 group-hover:text-[#b58d45]">
                {problem.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {problem.description}
              </p>

              <div className="mt-5 h-px w-6 bg-[#b58d45]/50 transition-all duration-300 group-hover:w-12" />
            </article>
          ))}
        </div>

        {/* Transition */}
        <div className="mt-14 max-w-3xl border-l-2 border-[#b58d45] pl-5 lg:mt-16">
          <p className="text-xl font-medium leading-8 tracking-[-0.015em] sm:text-2xl">
            Aurevia turns fragmented business data into a clearer picture of
            what is happening — and what needs attention.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Problem