import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us — Request a Quote",
  description:
    "Get in touch with QSS India — call, WhatsApp, email or fill our enquiry form for security, housekeeping and manpower outsourcing services.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Talk About Your Site"
        subtitle="Because your safety is not just our job, it's our commitment. Reach out for a customized proposal for your organization."
        crumb="Contact"
        path="/contact"
      />
      <Contact />
    </>
  );
}
