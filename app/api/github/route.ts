import { NextResponse } from "next/server";
import { getGitHubActivity } from "@/lib/github";

export async function GET() {
  // Use your GitHub username - can also be moved to environment variable
  const username = process.env.GITHUB_PERSONAL_USERNAME || "williamlandrade";

  try {
    const activity = await getGitHubActivity(username);

    // Limit to last 10 events and format the data
    const formattedActivity = activity.slice(0, 10).map((event: any) => ({
      id: event.id,
      type: event.type,
      repo: {
        name: event.repo.name,
        url: `https://github.com/${event.repo.name}`,
      },
      created_at: event.created_at,
      payload: event.payload,
    }));

    return NextResponse.json(formattedActivity);
  } catch (error) {
    console.error("Failed to fetch GitHub activity:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
