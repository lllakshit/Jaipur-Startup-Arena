import Link from "next/link";
import { CityExplorer } from "@/components/city-explorer";

export default function MapPage() {
  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-white/35 uppercase">
              Jaipur Startup Arena
            </p>
            <h1 className="mt-1 text-xl font-semibold tracking-tight text-white">
              Jaipur startup explorer
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link className="text-sm text-white/60 hover:text-white" href="/">
              Home
            </Link>
            <Link
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/80 hover:bg-white/5"
              href="/api/companies?city=jaipur"
            >
              API JSON
            </Link>
          </div>
        </div>

        <CityExplorer />
      </div>
    </main>
  );
}
