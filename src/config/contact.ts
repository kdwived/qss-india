/**
 * ============================================================================
 * LEAD FORM / CONTACT INTEGRATION CONFIG
 * ============================================================================
 * Both the quick QuoteModal popup and the full form on /contact currently
 * submit CLIENT-SIDE ONLY — they validate, show a success state, and stop.
 * No lead data leaves the browser yet, because no backend/API/CRM has been
 * connected. This file is the one place to wire that up.
 *
 * ==========================================================================
 * PASTE YOUR FORM API / WEBHOOK ENDPOINT HERE
 * ==========================================================================
 * .env.local → NEXT_PUBLIC_LEAD_FORM_ENDPOINT=https://your-endpoint.example/api/leads
 *
 * Works as-is with: a Formspree/Getform-style endpoint, a custom Next.js
 * API route (e.g. /api/lead), a Zapier/Make webhook, or a CRM's inbound
 * webhook URL. If the endpoint needs an API key, put the key in the
 * receiving backend/webhook config — never in a NEXT_PUBLIC_ variable,
 * since anything prefixed NEXT_PUBLIC_ ships to the browser and is
 * visible to anyone who views source.
 * ==========================================================================
 */

export const leadFormConfig = {
  endpoint: process.env.NEXT_PUBLIC_LEAD_FORM_ENDPOINT || "",
};

export const isLeadFormConfigured = !!leadFormConfig.endpoint;

export type LeadPayload = {
  name: string;
  phone: string;
  email?: string;
  company?: string;
  service: string;
  message?: string;
  source: string; // which form/page the lead came from, e.g. "quote_modal", "contact_page"
};

/**
 * Submits a lead if `leadFormConfig.endpoint` is set; otherwise resolves
 * immediately as a local-only "success" (current behavior) so the UI
 * doesn't need an if/else at every call site. Swap this implementation
 * for your CRM's SDK if you'd rather not use a plain fetch/webhook.
 */
export async function submitLead(payload: LeadPayload): Promise<{ ok: boolean }> {
  if (!leadFormConfig.endpoint) {
    // No backend configured yet — behaves as local-only success.
    return { ok: true };
  }
  try {
    const res = await fetch(leadFormConfig.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return { ok: res.ok };
  } catch {
    return { ok: false };
  }
}
