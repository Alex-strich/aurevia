import { useState } from "react"

const dashboards = [
  {
    id: "executive",
    label: "Executive",
    title: "Executive Dashboard",
    description:
      "A consolidated view of the financial indicators that matter most to leadership.",
  },
  {
    id: "sales",
    label: "Sales",
    title: "Sales Dashboard",
    description:
      "Monitor sales performance, revenue trends and commercial activity in one place.",
  },
  {
    id: "financial",
    label: "Financial",
    title: "Financial Performance",
    description:
      "Understand revenue, profitability, margins and financial performance over time.",
  },
  {
    id: "working-capital",
    label: "Working Capital",
    title: "Working Capital",
    description:
      "Track the financial resources tied up in day-to-day business operations.",
  },
]

function DashboardMockup({ dashboard }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 sm:px-5">
        <div>
          <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-slate-400">
            Aurevia Intelligence
          </p>

          <h3 className="mt-1 text-sm font-semibold text-[#0B2E59]">
            {dashboard.title}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="text-[9px] text-slate-400">Live data</span>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 border-b border-slate-100 sm:grid-cols-4">
        {[
          ["Revenue", "$2.84M", "+12.4%"],
          ["Gross Profit", "$1.21M", "+8.7%"],
          ["Margin", "42.6%", "+2.1%"],
          ["Working Capital", "$684K", "-5.3%"],
        ].map(([label, value, change]) => (
          <div
            key={label}
            className="border-b border-slate-100 px-4 py-4 last:border-r-0 sm:border-r sm:px-5"
          >
            <p className="text-[9px] uppercase tracking-[0.1em] text-slate-400">
              {label}
            </p>

            <p className="mt-1.5 text-base font-semibold tracking-tight text-[#0B2E59] sm:text-lg">
              {value}
            </p>

            <p className="mt-0.5 text-[9px] text-emerald-600">{change}</p>
          </div>
        ))}
      </div>

      {/* Dashboard */}
      <div className="grid gap-3 p-4 sm:p-5 lg:grid-cols-[1.6fr_0.8fr]">
        {/* Chart */}
        <div className="rounded-xl border border-slate-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-[#0B2E59]">
                Financial Performance
              </p>

              <p className="mt-0.5 text-[9px] text-slate-400">
                Revenue vs. target
              </p>
            </div>

            <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[8px] text-slate-500">
              12 months
            </span>
          </div>

          {/* Chart */}
          <div className="relative mt-5 h-32 sm:h-36">
            <div className="absolute inset-0 flex flex-col justify-between">
              {[1, 2, 3, 4].map((line) => (
                <div
                  key={line}
                  className="border-t border-dashed border-slate-100"
                />
              ))}
            </div>

            <svg
              viewBox="0 0 600 180"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
            >
              <defs>
                <linearGradient
                  id={`chartFill-${dashboard.id}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#C8A24A"
                    stopOpacity="0.22"
                  />

                  <stop
                    offset="100%"
                    stopColor="#C8A24A"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>

              <path
                d="M0 145 C45 125 55 130 90 112 S145 125 180 95 S235 90 270 78 S325 95 355 58 S420 68 450 48 S500 58 535 32 S570 45 600 20 L600 180 L0 180 Z"
                fill={`url(#chartFill-${dashboard.id})`}
              />

              <path
                d="M0 145 C45 125 55 130 90 112 S145 125 180 95 S235 90 270 78 S325 95 355 58 S420 68 450 48 S500 58 535 32 S570 45 600 20"
                fill="none"
                stroke="#C8A24A"
                strokeWidth="3"
              />
            </svg>
          </div>

          <div className="mt-2 flex justify-between text-[8px] text-slate-400">
            <span>Jan</span>
            <span>Mar</span>
            <span>May</span>
            <span>Jul</span>
            <span>Sep</span>
            <span>Dec</span>
          </div>
        </div>

        {/* Insight */}
        <div className="rounded-xl bg-[#0B2E59] p-4 text-white sm:p-5">
          <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#C8A24A]">
            Management Insight
          </p>

          <p className="mt-5 text-sm leading-6 text-white/70">
            Revenue is ahead of target while working capital requirements have
            reduced over the current reporting period.
          </p>

          <div className="mt-6 border-t border-white/10 pt-4">
            <p className="text-[9px] uppercase tracking-[0.12em] text-white/30">
              Attention
            </p>

            <p className="mt-1.5 text-sm font-medium">
              Margin performance requires review.
            </p>
          </div>

          <div className="mt-5 flex items-center gap-2 text-[9px] text-[#C8A24A]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8A24A]" />
            Actionable insight
          </div>
        </div>
      </div>
    </div>
  )
}

function Platform() {
  const [activeDashboard, setActiveDashboard] = useState("executive")

  const active = dashboards.find(
    (dashboard) => dashboard.id === activeDashboard
  )

  return (
    <section
      id="platform"
      className="bg-slate-50 px-6 py-20 text-[#0B2E59] lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8A24A]">
            Platform
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl">
            See the intelligence behind the decisions.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 lg:text-lg">
            Financial and operational information brought together into focused
            management views.
          </p>
        </div>

        {/* Dashboard tabs */}
        <div className="mt-8 flex gap-2 overflow-x-auto pb-1">
          {dashboards.map((dashboard) => (
            <button
              key={dashboard.id}
              type="button"
              onClick={() => setActiveDashboard(dashboard.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
                activeDashboard === dashboard.id
                  ? "bg-[#0B2E59] text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-[#0B2E59]"
              }`}
            >
              {dashboard.label}
            </button>
          ))}
        </div>

        {/* Active dashboard description */}
        <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-500">
          {active.description}
        </p>

        {/* Dashboard */}
        <div className="mt-7">
          <DashboardMockup dashboard={active} />
        </div>

        <p className="mt-4 text-center text-[10px] text-slate-400">
          Representative interface shown for demonstration.
        </p>
      </div>
    </section>
  )
}

export default Platform