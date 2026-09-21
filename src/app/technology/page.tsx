import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import OMS from "@/components/OMS";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Online Management System",
  description:
    "QSS India's cloud-based Online Management System — digital attendance, payroll, compliance and a live client dashboard for security and manpower operations.",
  alternates: { canonical: "/technology" },
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="Workforce Management, Digitized"
        subtitle="A cloud-based platform for digital management of security, housekeeping and outsourced manpower — from employee registration through payroll and compliance."
        crumb="Technology"
        path="/technology"
      />
      <OMS />
      <CTABanner />
    </>
  );
}
