import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Process from "@/components/Process";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "From requirement analysis to continuous improvement — QSS India's 9-step client servicing process and illustrative mobilization framework.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="A Repeatable Playbook for Every Deployment"
        subtitle="A structured process behind every site — recruitment, verification, training, monitoring and ongoing feedback, mapped step by step."
        crumb="Process"
        path="/process"
      />
      <Process />
      <CTABanner />
    </>
  );
}
