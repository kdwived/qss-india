import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Manpower from "@/components/Manpower";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Manpower Outsourcing",
  description:
    "Skilled and semi-skilled manpower outsourcing — technical staff, computer operators, supervisors and custom recruitment, 1,800+ workforce deployed.",
  alternates: { canonical: "/manpower" },
};

export default function ManpowerPage() {
  return (
    <>
      <PageHero
        eyebrow="Manpower Outsourcing"
        title="Trained Workforce, On Your Timeline"
        subtitle="Every worker undergoes 40+ hours of professional training before deployment — skill development, safety protocols, client etiquette and compliance awareness."
        crumb="Manpower"
        path="/manpower"
      />
      <Manpower />
      <CTABanner />
    </>
  );
}
