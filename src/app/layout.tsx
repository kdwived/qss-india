import type { Metadata } from "next";
import Script from "next/script";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";
import { QuoteModalProvider } from "@/components/QuoteModalContext";
import QuoteModal from "@/components/QuoteModal";
import ExitIntentPrompt from "@/components/ExitIntentPrompt";
import { siteConfig } from "@/config/site";
import { analyticsConfig } from "@/config/analytics";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "QSS India | Professional Security, Manpower & Facility Support Services",
    template: "%s | QSS India",
  },
  description:
    "QSS India provides professional security, manpower, housekeeping and facility support solutions for organizations across India — PSARA licensed, GST registered, trusted since 1999.",
  alternates: { canonical: "/" },
  keywords: [
    "security services India",
    "security agency",
    "professional security services",
    "manpower services India",
    "manpower solutions",
    "facility management",
    "facility support services",
    "housekeeping services",
    "workforce solutions",
    "security company",
    "corporate security services",
    "commercial security services",
    "industrial security services",
    "professional workforce solutions",
    "PSARA licensed security",
    "QSS India",
  ],
  openGraph: {
    title: "QSS India | Professional Security, Manpower & Facility Support Services",
    description:
      "Professional workforce solutions — security, housekeeping, hospitality and manpower outsourcing. Trusted excellence since 1999.",
    url: siteUrl,
    siteName: "QSS India",
    images: ["/images/gallery/services-poster.jpg"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QSS India | Professional Security, Manpower & Facility Support Services",
    description:
      "Professional workforce solutions — security, housekeeping, hospitality and manpower outsourcing. Trusted excellence since 1999.",
    images: ["/images/gallery/services-poster.jpg"],
  },
  icons: {
    icon: "/images/logo/qss-logo.png",
  },
  robots: { index: true, follow: true },
  // Only rendered if NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION is set — see
  // src/config/site.ts for exactly where to paste the Search Console code.
  verification: siteConfig.googleSiteVerification
    ? { google: siteConfig.googleSiteVerification }
    : undefined,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteConfig.legalName,
      alternateName: siteConfig.name,
      url: siteUrl,
      logo: `${siteUrl}/images/logo/qss-logo.png`,
      foundingDate: "1999",
      description:
        "QSS India Manpower Outsourcing Services provides security services, housekeeping, hospitality staffing, skilled and semi-skilled manpower outsourcing, and payroll compliance management across North India.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2/58-59, Avas Vikas Colony, Near Water Tank",
        addressLocality: "Hathras",
        addressRegion: "Uttar Pradesh",
        postalCode: "204101",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          contactType: "customer service",
          areaServed: "IN",
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": siteUrl,
      name: siteConfig.legalName,
      image: `${siteUrl}/images/gallery/services-poster.jpg`,
      url: siteUrl,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "2/58-59, Avas Vikas Colony, Near Water Tank",
        addressLocality: "Hathras",
        addressRegion: "Uttar Pradesh",
        postalCode: "204101",
        addressCountry: "IN",
      },
      areaServed: ["Hathras", "Aligarh", "Mathura", "Lucknow", "Meerut", "Delhi", "Uttarakhand"],
      priceRange: "$$",
      parentOrganization: { "@id": `${siteUrl}/#organization` },
      makesOffer: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Security Services" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Manpower Outsourcing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Housekeeping Services" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hospitality Staffing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Payroll Management" } },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteConfig.name,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ==================================================================
            Google Analytics (GA4) — loads ONLY if NEXT_PUBLIC_GA_ID is set.
            See src/config/analytics.ts for where to paste the ID.
           ================================================================== */}
        {analyticsConfig.gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${analyticsConfig.gaId}');
              `}
            </Script>
          </>
        )}

        {/* ==================================================================
            Google Tag Manager — loads ONLY if NEXT_PUBLIC_GTM_ID is set.
           ================================================================== */}
        {analyticsConfig.gtmId && (
          <Script id="gtm-init" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${analyticsConfig.gtmId}');
            `}
          </Script>
        )}
      </head>
      <body className={`${oswald.variable} ${inter.variable} font-body antialiased bg-navy-950`}>
        <QuoteModalProvider>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <BackToTop />
          <QuoteModal />
          <ExitIntentPrompt />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
