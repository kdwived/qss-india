import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SecurityServices from "@/components/SecurityServices";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Security Services — PSARA Licensed",
  description:
    "Trained security guards, bouncers, residential, commercial, event and industrial security — PSARA-certified personnel from QSS India.",
  alternates: { canonical: "/security" },
};

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security Services"
        title="PSARA-Certified Protection, Site to Site"
        subtitle="Trained personnel for every environment — residential societies, corporate offices, industrial sites and high-profile events."
        crumb="Security"
        path="/security"
      />
      <SecurityServices />
      <CTABanner />
    </>
  );
}
