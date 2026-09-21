/**
 * ============================================================================
 * ANALYTICS / TRACKING CONFIG
 * ============================================================================
 * Every ID below is intentionally BLANK. Nothing fires, and no third-party
 * script loads, until you paste real IDs into your .env.local file (see the
 * variable names next to each placeholder). This keeps the frontend free of
 * hard-coded tracking IDs and lets you swap them per-environment.
 *
 * After adding an ID and redeploying, `trackEvent()` below will automatically
 * forward events to window.gtag / window.dataLayer if that script is present
 * — you do not need to change any component code that already calls
 * `trackEvent(...)`.
 * ============================================================================
 */

export const analyticsConfig = {
  // ==========================================================================
  // PASTE GOOGLE ANALYTICS (GA4) ID HERE
  // .env.local → NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
  // ==========================================================================
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",

  // ==========================================================================
  // PASTE GOOGLE TAG MANAGER ID HERE
  // .env.local → NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
  // ==========================================================================
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",

  // ==========================================================================
  // PASTE META (FACEBOOK) PIXEL ID HERE
  // .env.local → NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXXXX
  // ==========================================================================
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",

  // ==========================================================================
  // PASTE LINKEDIN INSIGHT TAG ID HERE
  // .env.local → NEXT_PUBLIC_LINKEDIN_INSIGHT_ID=XXXXXXX
  // ==========================================================================
  linkedinInsightId: process.env.NEXT_PUBLIC_LINKEDIN_INSIGHT_ID || "",

  // ==========================================================================
  // PASTE GOOGLE ADS CONVERSION ID HERE
  // .env.local → NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX
  // ==========================================================================
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "",
};

export const isAnalyticsConfigured =
  !!analyticsConfig.gaId || !!analyticsConfig.gtmId;

/**
 * The full set of event names this site fires. Centralized here so the
 * event vocabulary is documented in one place — grep this file to see
 * every event name that can arrive in your analytics tool.
 */
export type AnalyticsEvent =
  | "quote_button_click"
  | "security_services_click"
  | "contact_click"
  | "phone_click"
  | "whatsapp_click"
  | "lead_form_open"
  | "lead_form_submit"
  | "lead_form_success"
  | "lead_form_error"
  | "navigation_click";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Fires an event name only — never personal form data (no name, phone,
 * email, or message contents are ever passed to analytics). No-ops
 * silently if no analytics script is loaded, so every call site in the
 * app can call this unconditionally without checking configuration first.
 */
export function trackEvent(event: AnalyticsEvent, params?: Record<string, string | number>) {
  if (typeof window === "undefined") return;
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", event, params ?? {});
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event, ...params });
    }
  } catch {
    // analytics must never break the site
  }
}
