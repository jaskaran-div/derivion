const requestBuckets = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_BUCKETS = 10_000;
let lastCleanupAt = 0;

export function checkRateLimit(request: Request, scope: string) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientIp =
    request.headers.get("x-real-ip")?.trim() ||
    forwardedFor?.split(",")[0]?.trim();

  if (!clientIp) {
    return { limited: false, retryAfterSeconds: 0 };
  }

  const now = Date.now();
  if (now - lastCleanupAt >= 60_000) {
    for (const [bucketKey, existingBucket] of requestBuckets) {
      if (existingBucket.resetAt <= now) {
        requestBuckets.delete(bucketKey);
      }
    }
    lastCleanupAt = now;
  }

  const key = `${scope}:${clientIp}`;
  const bucket = requestBuckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    if (requestBuckets.size >= MAX_BUCKETS) {
      const oldestKey = requestBuckets.keys().next().value;
      if (oldestKey) requestBuckets.delete(oldestKey);
    }
    requestBuckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { limited: false, retryAfterSeconds: 0 };
  }

  if (bucket.count >= MAX_REQUESTS) {
    return {
      limited: true,
      retryAfterSeconds: Math.ceil((bucket.resetAt - now) / 1000),
    };
  }

  bucket.count += 1;
  return { limited: false, retryAfterSeconds: 0 };
}
