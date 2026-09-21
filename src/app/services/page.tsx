import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BusinessVerticals from "@/components/BusinessVerticals";
import Housekeeping from "@/components/Housekeeping";
import Hospitality from "@/components/Hospitality";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Manpower outsourcing, security, housekeeping, hospitality, payroll management and administrative support — QSS India's six core service verticals.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="One Team, Every Workforce Need"
        subtitle="From housekeeping and hospitality to skilled manpower and payroll — a single point of contact for every workforce need on your site."
        crumb="Services"
        path="/services"
      />
      <BusinessVerticals />
      <Housekeeping />
      <Hospitality />
      <CTABanner />
    </>
  );
}
