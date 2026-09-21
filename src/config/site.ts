/**
 * ============================================================================
 * SITE CONFIG — single source of truth for canonical URL, brand identity
 * and third-party verification codes.
 *
 * Change the domain ONCE here when you deploy — every metadata export,
 * the sitemap, robots.txt and JSON-LD all read from this file instead of
 * hard-coding the URL in five different places.
 * ============================================================================
 */

export const siteConfig = {
  /** Replace with your real production domain before going live. */
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.qssindia.example",
  name: "QSS India",
  legalName: "QSS India Manpower Outsourcing Services",
  tagline: "Professional Workforce Solutions",
  phone: "+919319580926",
  phoneDisplay: "+91 9319580926",
  email: "qssindia4@gmail.com",

  // ==========================================================================
  // PASTE GOOGLE SEARCH CONSOLE VERIFICATION CODE HERE
  // (Search Console → Settings → Ownership verification → HTML tag →
  // copy only the `content="..."` value, not the whole tag)
  // ==========================================================================
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",

  // Social profiles — left empty deliberately; QSS India has not supplied
  // verified social accounts. Fill in and add to layout.tsx's JSON-LD
  // `sameAs` array only once real, active profiles exist.
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
};
