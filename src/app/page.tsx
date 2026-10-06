import type { Metadata } from "next";
import VideoHero from "@/components/VideoHero";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutTeaser from "@/components/AboutTeaser";
import ExploreCards from "@/components/ExploreCards";
import VisionMission from "@/components/VisionMission";
import WhyQSS from "@/components/WhyQSS";
import Process from "@/components/Process";
import OMS from "@/components/OMS";
import Compliance from "@/components/Compliance";
import ClientMarquee from "@/components/ClientMarquee";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: {
    absolute:
      "QSS India | Professional Security, Manpower & Facility Management Services",
  },
  description:
    "QSS India — 25+ years of trusted excellence in security, manpower outsourcing, housekeeping and facility support. PSARA licensed. Serving government and private sector across Hathras, Aligarh, Mathura, Lucknow, Meerut, Delhi and Uttarakhand.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "QSS India | Professional Security, Manpower & Facility Management Services",
    description:
      "25+ years of professional security, manpower outsourcing and facility support. PSARA licensed. 2200+ workforce across North India.",
    images: ["/images/hero/poster.jpg"],
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      {/* 01 — Hero Video Section */}
      <VideoHero />

      {/* 02 — Professional Workforce Hero (light theme with blue dots) */}
      <Hero />

      {/* 03 — Key Numbers / Trust Strip */}
      <Stats />

      {/* 04 — About QSS India */}
      <AboutTeaser />

      {/* 05 — Main Service Categories */}
      <ExploreCards />

      {/* 06 — Vision / Mission / Values */}
      <VisionMission />

      {/* 07 — Why Choose QSS India */}
      <WhyQSS />

      {/* 08 — Approach & Deployment Process */}
      <Process />

      {/* 09 — Online Management System */}
      <OMS />

      {/* 10 — Statutory Compliance */}
      <Compliance />

      {/* 11 — Our Valued Clients Marquee */}
      <ClientMarquee />

      {/* 12 — Gallery */}
      <Gallery />

      {/* 13 — FAQ */}
      <FAQ />

      {/* 14 — CTA Banner */}
      <CTABanner />
    </>
  );
}
