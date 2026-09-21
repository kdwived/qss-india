import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutTeaser from "@/components/AboutTeaser";
import ExploreCards from "@/components/ExploreCards";
import VisionMission from "@/components/VisionMission";
import WhyQSS from "@/components/WhyQSS";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: {
    absolute: "QSS India | Manpower Outsourcing & Security Services",
  },
  description:
    "QSS India — 25+ years of excellence in security, housekeeping, hospitality and manpower outsourcing across Hathras, Aligarh, Mathura, Lucknow, Meerut, Delhi and Uttarakhand.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutTeaser />
      <ExploreCards />
      <VisionMission />
      <WhyQSS />
      <FAQ />
      <CTABanner />
    </>
  );
}
