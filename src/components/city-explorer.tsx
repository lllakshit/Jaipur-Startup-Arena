"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import type { JaipurApiPayload } from "@/lib/data/jaipur";

const JaipurMap = dynamic(
  () => import("@/components/jaipur-map").then((module) => module.JaipurMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[420px] items-center justify-center rounded-[1.75rem] border border-white/10 bg-white/[0.03] text-sm text-white/45">
        Loading Jaipur map...
      </div>
    ),
  },
);

function getCompanyInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function CityExplorer() {
  const [payload, setPayload] = useState<JaipurApiPayload | null>(null);
  const [search, setSearch] = useState("");
  const [selectedSector, setSelectedSector] = useState("All");
  const [activeCompanyId, setActiveCompanyId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadCompanies() {
      const response = await fetch("/api/companies?city=jaipur", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Failed to load Jaipur companies");
      }

      const data = (await response.json()) as JaipurApiPayload;

      if (!cancelled) {
        setPayload(data);
        setActiveCompanyId(data.companies[0]?.id ?? null);
      }
    }

    loadCompanies().catch((error) => {
      console.error(error);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const sectors = useMemo(() => {
    if (!payload) {
      return ["All"];
    }

    return ["All", ...payload.domains];
  }, [payload]);

  const filteredCompanies = useMemo(() => {
    if (!payload) {
      return [];
    }

    const query = search.trim().toLowerCase();

    return payload.companies.filter((company) => {
      const matchesSector =
        selectedSector === "All" || company.sector === selectedSector;

      const matchesSearch =
        query.length === 0 ||
        company.name.toLowerCase().includes(query) ||
        company.neighborhood.toLowerCase().includes(query) ||
        company.sector.toLowerCase().includes(query) ||
        company.jobs.some((job) =>
          `${job.job_title} ${job.role} ${job.tags.join(" ")}`
            .toLowerCase()
            .includes(query),
        );

      return matchesSector && matchesSearch;
    });
  }, [payload, search, selectedSector]);

  useEffect(() => {
    if (!filteredCompanies.length) {
      setActiveCompanyId(null);
      return;
    }

    const stillVisible = filteredCompanies.some(
      (company) => company.id === activeCompanyId,
    );

    if (!stillVisible) {
      setActiveCompanyId(filteredCompanies[0].id);
    }
  }, [filteredCompanies, activeCompanyId]);

  const activeCompany =
    filteredCompanies.find((company) => company.id === activeCompanyId) ?? null;

  const totalVisibleJobs = filteredCompanies.reduce(
    (sum, company) => sum + company.jobs.length,
    0,
  );

  if (!payload) {
    return (
      <div className="grid gap-5 xl:grid-cols-[380px_minmax(0,1fr)]">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 text-white/55">
          Loading Jaipur company explorer...
        </div>
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 text-white/55">
          Fetching startup map and jobs dataset...
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-5 xl:grid-cols-[380px_minmax(0,1fr)]">
      <aside className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-4 xl:sticky xl:top-5 xl:h-[calc(100vh-3.5rem)] xl:overflow-y-auto">
        <div className="border-b border-white/10 pb-4">
          <p className="text-xs font-semibold tracking-[0.22em] text-white/35 uppercase">
            Jaipur alpha
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            Startup companies and job lanes
          </h2>
          <p className="mt-2 text-sm leading-6 text-white/50">
            Filter Jaipur startups by domain, inspect where they are located,
            and open the live map for a city-wide view.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <MetricCard label="Companies" value={String(filteredCompanies.length)} />
          <MetricCard label="Jobs" value={String(totalVisibleJobs)} />
          <MetricCard label="Updated" value={payload.lastUpdatedLabel} />
        </div>

        <div className="mt-4">
          <label className="text-xs font-semibold tracking-[0.22em] text-white/35 uppercase">
            Search
          </label>
          <input
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-orange-300/40"
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Company, role, tag, neighborhood"
            value={search}
          />
        </div>

        <div className="mt-4">
          <p className="text-xs font-semibold tracking-[0.22em] text-white/35 uppercase">
            Domains
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {sectors.map((sector) => {
              const isActive = sector === selectedSector;

              return (
                <button
                  className={`rounded-full border px-3 py-2 text-xs font-medium transition ${
                    isActive
                      ? "border-orange-300/60 bg-orange-300/20 text-orange-100"
                      : "border-white/10 bg-white/[0.03] text-white/60 hover:bg-white/8"
                  }`}
                  key={sector}
                  onClick={() => setSelectedSector(sector)}
                  type="button"
                >
                  {sector}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-5 space-y-3">
          {filteredCompanies.map((company) => {
            const isActive = company.id === activeCompany?.id;

            return (
              <button
                className={`w-full rounded-[1.4rem] border p-4 text-left transition ${
                  isActive
                    ? "border-orange-300/40 bg-orange-300/10"
                    : "border-white/10 bg-black/20 hover:bg-white/[0.04]"
                }`}
                key={company.id}
                onClick={() => setActiveCompanyId(company.id)}
                type="button"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.08] text-sm font-semibold text-white">
                    {getCompanyInitials(company.name)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-base font-semibold text-white">
                          {company.name}
                        </p>
                        <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                          {company.neighborhood}
                        </p>
                      </div>
                      <span className="rounded-full border border-white/10 px-2 py-1 text-[11px] text-white/55">
                        {company.jobs.length} roles
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-white/55">
                      {company.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] text-white/60">
                        {company.sector}
                      </span>
                      {company.hiringFocus.slice(0, 2).map((focus) => (
                        <span
                          className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/45"
                          key={focus}
                        >
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}

          {!filteredCompanies.length ? (
            <div className="rounded-[1.4rem] border border-dashed border-white/15 bg-black/20 p-5 text-sm text-white/50">
              No Jaipur companies match the current filters.
            </div>
          ) : null}
        </div>
      </aside>

      <section className="space-y-5">
        <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]">
          <div className="border-b border-white/10 px-5 py-4">
            <p className="text-xs font-semibold tracking-[0.22em] text-white/35 uppercase">
              Live map
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">
              Jaipur company explorer
            </h2>
          </div>

          <div className="p-4">
            <JaipurMap
              activeCompanyId={activeCompany?.id ?? null}
              companies={filteredCompanies}
              onSelectCompany={setActiveCompanyId}
            />
          </div>
        </div>

        {activeCompany ? (
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
            <div className="flex flex-col gap-4 border-b border-white/10 pb-5 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] text-white/35 uppercase">
                  Active company
                </p>
                <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white">
                  {activeCompany.name}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-white/55">
                  {activeCompany.description}
                </p>
                <p className="mt-3 text-sm text-white/45">
                  {activeCompany.address}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <a
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/75 hover:bg-white/5"
                  href={activeCompany.website}
                  rel="noreferrer"
                  target="_blank"
                >
                  Website
                </a>
                <a
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-orange-200"
                  href={activeCompany.careersUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Careers page
                </a>
              </div>
            </div>

            <div className="mt-5 grid gap-4 xl:grid-cols-2">
              {activeCompany.jobs.map((job) => (
                <article
                  className="rounded-[1.4rem] border border-white/10 bg-black/25 p-4"
                  key={job.id}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-white">
                        {job.job_title}
                      </p>
                      <p className="mt-1 text-sm text-white/45">
                        {job.department} · {job.experience_level} ·{" "}
                        {job.employment_type}
                      </p>
                    </div>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-white/55">
                      {job.role}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-white/55">
                    {job.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        className="rounded-full bg-white/[0.05] px-2.5 py-1 text-[11px] text-white/50"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-4 text-sm">
                    <div className="text-white/45">
                      <p>{job.source}</p>
                      <p className="mt-1">{job.date_posted}</p>
                    </div>
                    <a
                      className="rounded-full border border-white/10 px-4 py-2 font-medium text-white/80 hover:bg-white/5"
                      href={job.job_url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Open role
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-3">
      <p className="text-lg font-semibold text-white">{value}</p>
      <p className="mt-1 text-[11px] tracking-[0.2em] text-white/35 uppercase">
        {label}
      </p>
    </div>
  );
}
