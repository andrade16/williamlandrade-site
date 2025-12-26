// Fetch recent Github Events
export async function getGitHubActivity(username: string) {
  const response = await fetch(
    `https://api.github.com/users/${username}/events/public`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`, // Optional but increases rate limit
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    }
  );

  if (!response.ok) throw new Error("Failed to fetch GitHub activity");

  return response.json();
}

// Fetch user stats
export async function getGitHubStats(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    next: { revalidate: 86400 }, // Cache for 24 hours
  });

  return response.json();
}

// Fetch contribution graph data using GraphQL
export async function getGitHubContributions(username: string) {
  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                color
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables: { username },
    }),
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub contributions");
  }

  const data = await response.json();
  return data.data.user.contributionsCollection.contributionCalendar;
}

// Fetch and merge contributions from multiple users
export async function getMergedGitHubContributions(usernames: string[]) {
  // Fetch contributions for all users in parallel
  const contributionPromises = usernames.map((username) =>
    getGitHubContributions(username)
  );

  const allContributions = await Promise.all(contributionPromises);

  // Create a map to store merged contributions by date
  const dateMap = new Map<
    string,
    { contributionCount: number; date: string }
  >();

  // Merge all contributions
  allContributions.forEach((calendar) => {
    calendar.weeks.forEach((week: any) => {
      week.contributionDays.forEach((day: any) => {
        const existing = dateMap.get(day.date);
        if (existing) {
          // Add to existing count
          existing.contributionCount += day.contributionCount;
        } else {
          // Create new entry
          dateMap.set(day.date, {
            contributionCount: day.contributionCount,
            date: day.date,
          });
        }
      });
    });
  });

  // Calculate total contributions
  const totalContributions = Array.from(dateMap.values()).reduce(
    (sum, day) => sum + day.contributionCount,
    0
  );

  // Reconstruct the weeks structure
  const sortedDates = Array.from(dateMap.values()).sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Group by weeks (7 days per week)
  const weeks: any[] = [];
  let currentWeek: any[] = [];

  sortedDates.forEach((day, index) => {
    currentWeek.push({
      contributionCount: day.contributionCount,
      date: day.date,
      color: "", // GitHub doesn't return color for merged data
    });

    // Start a new week every 7 days or on last day
    if (
      currentWeek.length === 7 ||
      index === sortedDates.length - 1
    ) {
      weeks.push({ contributionDays: currentWeek });
      currentWeek = [];
    }
  });

  return {
    totalContributions,
    weeks,
  };
}
