import Link from "next/link";
import { getJaipurSummary, jaipurCompanies, jaipurDomains } from "@/lib/data/jaipur";

const featuredCompanies = jaipurCompanies.slice(0, 6);
const summary = getJaipurSummary();

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020202] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-8%] h-[24rem] w-[24rem] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-[-8%] right-[5%] h-[20rem] w-[20rem] rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:56px_56px] opacity-25" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-10 pt-6 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between border-b border-white/10 pb-4 text-sm text-white/65">
          <span className="font-semibold tracking-[0.3em] text-white/70 uppercase">
            Jaipur Startup Arena
          </span>
          <nav className="flex items-center gap-3">
            <Link className="rounded-full border border-white/10 px-4 py-2 hover:bg-white/5" href="/map">
              Open map
            </Link>
            <Link
              className="rounded-full bg-orange-500 px-4 py-2 font-semibold text-white transition hover:bg-orange-600"
              href="/api/companies?city=jaipur"
            >
              API
            </Link>
          </nav>
        </header>

        <section className="grid flex-1 items-center gap-8 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-14">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-xs font-bold tracking-[0.32em] text-orange-200 uppercase">
                Curated Jaipur startup jobs
              </p>
              <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.86] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                JAIPUR
                <br />
                <span className="bg-gradient-to-b from-white via-white to-white/35 bg-clip-text text-transparent">
                  STARTUP ARENA
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-7 text-white/50 sm:text-xl">
                Discover Jaipur startups, filter companies by domain, inspect
                hiring lanes, and jump into a live map of where the city&apos;s
                startup momentum is clustering.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
                <p className="text-2xl font-bold text-white sm:text-3xl">
                  {summary.companyCount}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/35">
                  Companies
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
                <p className="text-2xl font-bold text-white sm:text-3xl">
                  {summary.jobCount}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/35">
                  Jobs tracked
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
                <p className="text-2xl font-bold text-white sm:text-3xl">
                  {summary.domainCount}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/35">
                  Domains
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-400 to-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:from-orange-500 hover:to-orange-700 shadow-md shadow-orange-500/20"
                href="/map"
              >
                Enter the arena
              </Link>
              <Link
                className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/5"
                href="/api/companies?city=jaipur"
              >
                Jaipur API
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs font-semibold tracking-[0.24em] text-white/35 uppercase">
                  Always fresh shape
                </p>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Purpose-built product structure highlighting Jaipur company cards, domain
                  filters, and API-backed map data.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs font-semibold tracking-[0.24em] text-white/35 uppercase">
                  Domain based
                </p>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  SaaS, AI, ecommerce, fintech, mobility, climate, and startup
                  operations are all filterable in one flow.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs font-semibold tracking-[0.24em] text-white/35 uppercase">
                  Live map
                </p>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Leaflet plus OpenStreetMap for a real Jaipur company map, not
                  a static mockup.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_0_80px_rgba(0,0,0,0.35)]">
              <div className="border-b border-white/10 px-5 py-4">
                <p className="text-xs font-semibold tracking-[0.28em] text-white/35 uppercase">
                  Jaipur preview
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
                  Startup clusters across Jaipur
                </h2>
              </div>

              <div className="space-y-4 p-5">
                <div className="rounded-[1.5rem] border border-orange-300/15 bg-gradient-to-br from-orange-500/20 via-white/[0.04] to-transparent p-5">
                  <p className="text-xs font-semibold tracking-[0.24em] text-orange-200 uppercase">
                    Hot zones
                  </p>
                  <p className="mt-3 text-xl font-semibold text-white">
                    Malviya Nagar, Jagatpura, Vaishali Nagar, Mansarovar,
                    Sitapura.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/55">
                    The Jaipur map focuses on startup pockets where product,
                    growth, operations, and engineering roles are most visible.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {jaipurDomains.map((domain) => (
                    <span
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-white/70"
                      key={domain}
                    >
                      {domain}
                    </span>
                  ))}
                </div>

                <div className="grid gap-3">
                  {featuredCompanies.map((company) => (
                    <article
                      className="rounded-2xl border border-white/10 bg-black/30 p-4"
                      key={company.id}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-lg font-semibold text-white">
                            {company.name}
                          </p>
                          <p className="text-sm text-white/45">
                            {company.neighborhood} · {company.sector}
                          </p>
                        </div>
                        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                          {company.jobs.length} roles
                        </span>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="rounded-2xl border border-amber-300/10 bg-amber-300/[0.06] p-4 text-sm leading-6 text-white/60">
                  Comprehensive Jaipur startup dataset for the product and API layer. Structured
                  for high scalability so it can easily expand into automated daily
                  refreshes later.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
