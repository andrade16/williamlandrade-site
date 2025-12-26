import { NextResponse } from "next/server";
import { getMergedGitHubContributions } from "@/lib/github";

export async function GET() {
  // Add multiple GitHub usernames - personal and work accounts
  const usernames = [
    process.env.GITHUB_WORK_USERNAME || "andrade16",
    process.env.GITHUB_PERSONAL_USERNAME || "williamlandrade",
  ].filter(Boolean); // Remove any undefined values

  try {
    const contributions = await getMergedGitHubContributions(usernames);
    return NextResponse.json(contributions);
  } catch (error) {
    console.error("Failed to fetch GitHub contributions:", error);
    return NextResponse.json(
      { error: "Failed to fetch contribution data" },
      { status: 500 }
    );
  }
}
