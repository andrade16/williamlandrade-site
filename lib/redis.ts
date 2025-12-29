import { Redis } from "@upstash/redis";

// Initialize Redis client with environment variables
// Get these from your Upstash dashboard: https://console.upstash.com/
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

/**
 * Redis client instance
 * Automatically handles connection and authentication
 */
export { redis };

/**
 * Health check function to verify Redis connection
 * Returns true if Redis is accessible, false otherwise
 */
export async function checkRedisHealth(): Promise<boolean> {
  try {
    const result = await redis.ping();
    return result === "PONG";
  } catch (error) {
    console.error("Redis health check failed:", error);
    return false;
  }
}

/**
 * Get a value from Redis with error handling
 * Returns null if key doesn't exist or if Redis fails
 */
export async function getFromCache<T>(key: string): Promise<T | null> {
  try {
    const data = await redis.get<T>(key);
    return data;
  } catch (error) {
    console.error(`Redis GET error for key "${key}":`, error);
    return null;
  }
}

/**
 * Set a value in Redis with TTL (in seconds) and error handling
 * Returns true if successful, false otherwise
 */
export async function setInCache<T>(
  key: string,
  value: T,
  ttl: number
): Promise<boolean> {
  try {
    await redis.setex(key, ttl, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Redis SET error for key "${key}":`, error);
    return false;
  }
}

/**
 * Delete a key from Redis
 * Returns true if successful, false otherwise
 */
export async function deleteFromCache(key: string): Promise<boolean> {
  try {
    await redis.del(key);
    return true;
  } catch (error) {
    console.error(`Redis DEL error for key "${key}":`, error);
    return false;
  }
}

/**
 * Delete multiple keys matching a pattern
 * Note: Use with caution, can be slow with many keys
 */
export async function deleteCachePattern(pattern: string): Promise<number> {
  try {
    const keys = await redis.keys(pattern);
    if (keys.length === 0) return 0;

    await redis.del(...keys);
    return keys.length;
  } catch (error) {
    console.error(`Redis pattern delete error for "${pattern}":`, error);
    return 0;
  }
}
