import { GitHubStats } from "@/components/ui/GitHubStats";

const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  PROJECTS: "/projects",
};

const REDIS_CACHE_KEYS = {
  GITHUB_STATS: (username: string) => `github:stats:${username}`,
  GITHUB_CONTRIBUTIONS: (username: string) =>
    `github:contributions:${username}`,
  GITHUB_MERGED_CONTRIBUTIONS: (usernames: string[]) =>
    `github:merged-contributions:${usernames.sort().join(",")}`,
};

const REDIS_CACHE_TTL = {
  GITHUB_STATS: 86400, // 24 hours
  GITHUB_CONTRIBUTIONS: 3600, // 1 hour
};

export { ROUTES };
