import { NextResponse } from "next/server";
import { getGitHubStats } from "@/lib/github";

export async function GET() {
  const username = process.env.GITHUB_PERSONAL_USERNAME || "williamlandrade";

  try {
    const stats = await getGitHubStats(username);
    return NextResponse.json(stats);
  } catch (error) {
    console.error("Failed to fetch GitHub stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub stats" },
      { status: 500 }
    );
  }
}
