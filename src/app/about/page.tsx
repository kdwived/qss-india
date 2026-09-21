import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Compliance from "@/components/Compliance";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Us & Compliance",
  description:
    "QSS India Manpower Outsourcing Services — 25+ years of history, PSARA / GST / ESI / EPF compliance, and operations across Hathras, Aligarh, Mathura, Lucknow, Meerut, Delhi and Uttarakhand.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="The Company Behind the Uniform"
        subtitle="Headquartered in Hathras, Uttar Pradesh, with six branch offices across North India — here's the story, the numbers, and the paperwork that backs them up."
        crumb="About"
        path="/about"
      />
      <About />
      <Compliance />
      <CTABanner />
    </>
  );
}
