import { getFromCache, setInCache } from "./redis";

/**
 * Generic cache wrapper that implements cache-aside pattern
 *
 * @param key - Unique cache key
 * @param fetcher - Function that fetches fresh data if cache misses
 * @param ttl - Time to live in seconds
 * @returns Cached data or fresh data from fetcher
 */
export async function withCache<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttl: number
): Promise<T> {
  try {
    // Try to get from cache first
    const cached = await getFromCache<T>(key);

    if (cached !== null) {
      console.log(`✅ Cache HIT: ${key}`);
      return cached;
    }

    console.log(`❌ Cache MISS: ${key}`);
  } catch (error) {
    console.error(`Cache read error for ${key}, falling back to fetcher:`, error);
  }

  // Cache miss or error - fetch fresh data
  const data = await fetcher();

  // Store in cache (fire and forget - don't block on cache write)
  setInCache(key, data, ttl).catch((err) =>
    console.error(`Failed to cache ${key}:`, err)
  );

  return data;
}

/**
 * Cache key generators for different data types
 */
export const CACHE_KEYS = {
  GITHUB_STATS: (username: string) => `github:stats:${username}`,
  GITHUB_CONTRIBUTIONS: (username: string) => `github:contributions:${username}`,
  GITHUB_MERGED_CONTRIBUTIONS: (usernames: string[]) =>
    `github:merged:${usernames.sort().join(",")}`,
};

/**
 * Cache TTL (Time To Live) in seconds
 */
export const CACHE_TTL = {
  GITHUB_STATS: 86400, // 24 hours
  GITHUB_CONTRIBUTIONS: 3600, // 1 hour
  GITHUB_MERGED_CONTRIBUTIONS: 3600, // 1 hour
};
