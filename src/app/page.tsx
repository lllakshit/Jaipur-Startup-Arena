const stats = [
  { value: "250+", label: "early-stage roles tracked" },
  { value: "40+", label: "Jaipur startups in focus" },
  { value: "7", label: "startup districts mapped" },
];

const sectors = [
  "SaaS and AI",
  "D2C and commerce",
  "Fintech operations",
  "Design and product",
];

const districts = [
  {
    name: "Malviya Nagar",
    note: "operators, product teams, founder offices",
  },
  {
    name: "C-Scheme",
    note: "brand, growth, consulting, investor access",
  },
  {
    name: "Mansarovar",
    note: "full-stack talent, support, back-office scaleups",
  },
];

const steps = [
  {
    id: "01",
    title: "Scan the market",
    text: "A fast read on Jaipur's active startup pockets, hiring rhythm, and role density.",
  },
  {
    id: "02",
    title: "Find the right companies",
    text: "Shortlists for builders, operators, designers, marketers, and founder-office roles.",
  },
  {
    id: "03",
    title: "Move directly",
    text: "Clean next steps for applications, outreach, and staying visible as new roles open.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="hero-shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Jaipur Startup Arena</p>
            <h1 className="hero-title">
              Jaipur's startup scene,
              <span>framed for people who want in.</span>
            </h1>
            <p className="hero-text">
              A focused landing page for discovering startup momentum in Jaipur:
              who is building, where teams cluster, and how ambitious talent can
              enter the arena without noise.
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="mailto:llakshitmathur239@gmail.com">
                Share this project
              </a>
              <a className="secondary-link" href="https://github.com/lllakshit/Jaipur-Startup-Arena">
                View source
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="city-card city-card-main">
              <p className="card-kicker">City pulse</p>
              <h2>Pink City energy with startup discipline.</h2>
              <p>
                Jaipur is no longer just adjacent to startup activity. It is
                building its own layer of product teams, service operators, and
                ambitious founder-led companies.
              </p>
            </div>

            <div className="city-card city-card-accent">
              <p className="card-kicker">Current frame</p>
              <ul className="mini-list">
                <li>Hiring-ready startup districts</li>
                <li>Operator and product-heavy demand</li>
                <li>Built to be shared as a public city page</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </section>

      <section className="content-grid">
        <article className="feature-block">
          <p className="section-label">Why this exists</p>
          <h2>Not a generic job board. A city signal layer.</h2>
          <p>
            Jaipur Startup Arena is positioned as a shareable front door for
            founders, candidates, and collaborators who want a clear view of
            startup activity in Jaipur without the clutter of national portals.
          </p>
        </article>

        <article className="feature-block warm">
          <p className="section-label">Focus sectors</p>
          <div className="pill-grid">
            {sectors.map((sector) => (
              <span className="sector-pill" key={sector}>
                {sector}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="districts-section">
        <div className="section-head">
          <p className="section-label">Startup districts</p>
          <h2>Three zones where the Jaipur story feels immediate.</h2>
        </div>

        <div className="district-grid">
          {districts.map((district) => (
            <article className="district-card" key={district.name}>
              <h3>{district.name}</h3>
              <p>{district.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="steps-section">
        <div className="section-head">
          <p className="section-label">Experience design</p>
          <h2>A simple three-step flow for a public shareable landing page.</h2>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.id}>
              <span>{step.id}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div>
          <p className="section-label">Next move</p>
          <h2>Ready for Vercel, Render, or any other simple Next.js deploy path.</h2>
        </div>
        <p>
          The page is static-first, lightweight, and designed to preview well
          when the URL is shared.
        </p>
      </section>
    </main>
  );
}
