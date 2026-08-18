function WhoWeServe() {
  const sectors = [
    "Healthcare",
    "Construction",
    "Professional Services",
    "Retail & Ecommerce",
    "Hospitality",
    "Growth-Oriented SMEs",
  ]

  return (
    <section className="bg-slate-50 px-6 py-16 text-[#0B2E59] lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-md">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#C8A24A]">
              Who We Serve
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Built for growing businesses.
            </h2>
          </div>

          <div className="flex max-w-3xl flex-wrap gap-2">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeServe
