/**
 * Texas Best Sprinklers lives in the billed Reactiv Labs / MyFence.com
 * PostHog organization as its own project. Do not use the MyFence token.
 */
export const SITE_ID = String(process.env.NEXT_PUBLIC_SITE_ID ?? "texas-best").trim() || "texas-best";

const TEXAS_BEST_PROJECT_KEY = "phc_C67BoWQhFDg8dJL4oLwRnGbwfdvJeZ3AFSwDw36UhQ5L";

export const POSTHOG_KEY =
  String(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "").trim() || TEXAS_BEST_PROJECT_KEY;

export const POSTHOG_HOST = String(process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com").trim();

export function posthogSuperProperties(): Record<string, string> {
  return {
    client: SITE_ID,
    site: SITE_ID,
  };
}
