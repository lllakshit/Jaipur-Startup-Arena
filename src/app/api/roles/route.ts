import { NextRequest, NextResponse } from "next/server";
import { jaipurCompanies } from "@/lib/data/jaipur";

export function GET(request: NextRequest) {
  const city = request.nextUrl.searchParams.get("city");

  if (city && city !== "jaipur" && city !== "jpr") {
    return NextResponse.json(
      {
        error: "Unsupported city",
        supportedCities: ["jaipur", "jpr"],
      },
      { status: 400 },
    );
  }

  // Aggregate role data across all jobs
  const roleMap = new Map<string, { jobCount: number; companies: Set<string> }>();

  jaipurCompanies.forEach((company) => {
    company.jobs.forEach((job) => {
      const current = roleMap.get(job.role) || {
        jobCount: 0,
        companies: new Set<string>(),
      };
      current.jobCount += 1;
      current.companies.add(company.name);
      roleMap.set(job.role, current);
    });
  });

  // Convert to array and shape for JSON response
  const roles = Array.from(roleMap.entries()).map(([roleName, stats]) => ({
    role: roleName,
    activeJobs: stats.jobCount,
    hiringCompanies: Array.from(stats.companies),
  }));

  // Sort by job count descending
  roles.sort((a, b) => b.activeJobs - a.activeJobs);

  return NextResponse.json({
    city: "jaipur",
    success: true,
    totalRoles: roles.length,
    roles,
  });
}
