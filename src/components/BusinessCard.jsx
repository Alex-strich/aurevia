function BusinessCard() {
  return (
    <div className="grid gap-6">
      {/* FRONT */}
      <article className="group relative overflow-hidden rounded-2xl bg-[#0B2E59] p-7 text-white shadow-xl transition duration-500 hover:-translate-y-1 hover:shadow-2xl sm:p-8">
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#C8A24A]/10 blur-2xl" />

        <div className="relative">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#C8A24A]">
                AUREVIA
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/45">
                Financial Advisory Limited
              </p>
            </div>

            <div className="h-8 w-8 rounded-full border border-[#C8A24A]/60" />
          </div>

          <div className="mt-16">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">
              Managing Director
            </p>

            <h3 className="mt-2 text-2xl font-semibold tracking-tight">
              James Ndegwa
            </h3>

            <p className="mt-1 text-sm text-[#C8A24A]">
              FCPA(K)
            </p>
          </div>

          <p className="mt-8 max-w-sm text-sm leading-6 text-white/70">
            Helping Businesses Gain Visibility Into Performance,
            Profitability & Cash Flow
          </p>

          <div className="mt-8 border-t border-white/10 pt-5">
            <div className="grid gap-2 text-xs text-white/55 sm:grid-cols-3">
              <span>0721 387470</span>
              <span>aureviafa@gmail.com</span>
              <span>Nairobi, Kenya</span>
            </div>
          </div>

          <p className="mt-7 text-xs font-medium tracking-wide text-[#C8A24A]">
            Turning Data Into Better Decisions.
          </p>
        </div>
      </article>

      {/* BACK */}
      <article className="relative overflow-hidden rounded-2xl bg-white p-7 text-[#0B2E59] shadow-xl ring-1 ring-slate-200 transition duration-500 hover:-translate-y-1 hover:shadow-2xl sm:p-8">
        <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#C8A24A]/10 blur-3xl" />

        <div className="relative">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#C8A24A]">
            AUREVIA
          </p>

          <div className="mt-12">
            <p className="text-sm font-medium">
              Helping Businesses Gain Visibility Into:
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Profitability", "Cash Flow", "Performance"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <span className="text-[#C8A24A]">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-6">
            <p className="text-sm font-medium">
              Reporting Systems
              <span className="mx-2 text-[#C8A24A]">|</span>
              Business Advisory
            </p>
          </div>

          {/* Future QR placement */}
          <div className="mt-8 flex items-center justify-between gap-6">
            <p className="max-w-xs text-xs leading-5 text-slate-500">
              LinkedIn connection can be added here once the official profile
              URL is provided.
            </p>

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border-2 border-dashed border-[#C8A24A] text-[8px] font-medium uppercase tracking-wider text-[#C8A24A]">
              QR
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default BusinessCard
