// Fetch recent Github Events using GraphQL
export async function getGitHubActivity(username: string) {
  const query = `
    query($username: String!) {
      user(login: $username) {
        repositories(
          first: 10
          orderBy: { field: PUSHED_AT, direction: DESC }
          privacy: PUBLIC
        ) {
          nodes {
            name
            url
            pushedAt
            defaultBranchRef {
              target {
                ... on Commit {
                  history(first: 5) {
                    nodes {
                      message
                      committedDate
                      author {
                        name
                      }
                    }
                  }
                }
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
    throw new Error("Failed to fetch GitHub activity");
  }

  const data = await response.json();

  // Transform GraphQL response to match REST API format for compatibility
  const repos = data.data.user.repositories.nodes;
  const events: any[] = [];

  repos.forEach((repo: any) => {
    const commits = repo.defaultBranchRef?.target?.history?.nodes || [];
    commits.forEach((commit: any) => {
      events.push({
        id: `${repo.name}-${commit.committedDate}`,
        type: "PushEvent",
        repo: {
          name: repo.name,
          url: repo.url,
        },
        created_at: commit.committedDate,
        payload: {
          commits: [{ message: commit.message }],
        },
      });
    });
  });

  return events.sort((a, b) =>
    new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
}

// Fetch user stats using GraphQL
export async function getGitHubStats(username: string) {
  const query = `
    query($username: String!) {
      user(login: $username) {
        name
        login
        bio
        avatarUrl
        url
        createdAt

        followers {
          totalCount
        }
        following {
          totalCount
        }

        repositories(first: 100, privacy: PUBLIC) {
          totalCount
          nodes {
            stargazerCount
            forkCount
          }
        }

        gists {
          totalCount
        }

        organizations {
          totalCount
        }

        contributionsCollection {
          contributionCalendar {
            totalContributions
          }
          totalCommitContributions
          totalIssueContributions
          totalPullRequestContributions
          totalPullRequestReviewContributions
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
    next: { revalidate: 86400 }, // Cache for 24 hours
  });

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub stats");
  }

  const data = await response.json();

  // Check for GraphQL errors
  if (data.errors) {
    console.error("GraphQL errors:", data.errors);
    throw new Error(`GraphQL error: ${data.errors[0]?.message || "Unknown error"}`);
  }

  const user = data.data?.user;

  if (!user) {
    console.error("No user data returned:", data);
    throw new Error("User not found or query failed");
  }

  // Calculate total stars across all repos
  const totalStars = user.repositories?.nodes?.reduce(
    (sum: number, repo: any) => sum + (repo.stargazerCount || 0),
    0
  ) || 0;

  // Calculate total forks
  const totalForks = user.repositories?.nodes?.reduce(
    (sum: number, repo: any) => sum + (repo.forkCount || 0),
    0
  ) || 0;

  return {
    ...user,
    totalStars,
    totalForks,
  };
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
