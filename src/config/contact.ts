export const leadFormConfig = {
  endpoint: "https://api.web3forms.com/submit",
  accessKey: "bf7722cc-64b3-4b43-98e6-6b334e93efa5",
};

export const isLeadFormConfigured =
  Boolean(leadFormConfig.endpoint) && Boolean(leadFormConfig.accessKey);

export type LeadPayload = {
  name: string;
  phone: string;
  email?: string;
  company?: string;
  city?: string;
  service: string;
  message?: string;
  source: string; // which form/page the lead came from, e.g. "quote_modal", "contact_page"
};

/**
 * Sends all public enquiry forms through Web3Forms.
 */
export async function submitLead(payload: LeadPayload): Promise<{ ok: boolean }> {
  if (!isLeadFormConfigured) {
    console.error("Web3Forms lead submission is not configured.");
    return { ok: false };
  }

  try {
    const res = await fetch(leadFormConfig.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        access_key: leadFormConfig.accessKey,
        subject: `QSS India enquiry: ${payload.service}`,
        from_name: "QSS India Website",
      }),
    });

    const result: { success?: boolean; message?: string } = await res.json();
    if (!res.ok || !result.success) {
      console.error("Web3Forms rejected lead submission.", {
        status: res.status,
        message: result.message,
      });
      return { ok: false };
    }

    return { ok: true };
  } catch (error) {
    console.error("Web3Forms lead submission failed.", error);
    return { ok: false };
  }
}
