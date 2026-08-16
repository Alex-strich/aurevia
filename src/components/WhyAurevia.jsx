function WhyAurevia() {
  const pillars = [
    {
      number: "01",
      title: "Finance Expertise",
      description:
        "Financial understanding sits at the centre of the solution, ensuring automation supports meaningful management decisions.",
    },
    {
      number: "02",
      title: "Automation",
      description:
        "Repetitive financial processes are structured and automated so teams can reduce manual work and focus on higher-value activity.",
    },
    {
      number: "03",
      title: "Business Intelligence",
      description:
        "Financial and operational data becomes a clearer source of insight for leadership, not simply another report to review.",
    },
  ]

  return (
    <section
      id="why-aurevia"
      className="bg-[#07111f] px-6 py-24 text-white lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#c9a45c]">
              Why Aurevia
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.025em] sm:text-5xl">
              Finance expertise built for a more intelligent business.
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-8 text-white/55">
              Aurevia combines financial expertise, automation and business
              intelligence to help leadership move beyond manual reporting.
            </p>
          </div>

          {/* Right */}
          <div className="border-t border-white/10">
            {pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="grid gap-6 border-b border-white/10 py-9 md:grid-cols-[70px_1fr]"
              >
                <span className="text-sm font-medium text-[#c9a45c]">
                  {pillar.number}
                </span>

                <div>
                  <h3 className="text-2xl font-semibold">{pillar.title}</h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/50">
                    {pillar.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Positioning statement */}
        <div className="mt-20 border-t border-white/10 pt-10">
          <p className="max-w-4xl text-2xl font-medium leading-relaxed tracking-tight sm:text-3xl">
            Not just reporting what happened.
            <span className="text-white/40">
              {" "}
              Helping leadership understand what it means and what to do next.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyAurevia