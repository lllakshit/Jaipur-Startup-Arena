import { NextRequest, NextResponse } from "next/server";
import { getJaipurPayload } from "@/lib/data/jaipur";

export function GET(request: NextRequest) {
  const city = request.nextUrl.searchParams.get("city");

  if (!city) {
    return NextResponse.json(
      { error: "Missing required query parameter: city" },
      { status: 400 },
    );
  }

  if (city !== "jaipur" && city !== "jpr") {
    return NextResponse.json(
      {
        error: "Unsupported city",
        supportedCities: ["jaipur", "jpr"],
      },
      { status: 400 },
    );
  }

  return NextResponse.json(getJaipurPayload());
}
