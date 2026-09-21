import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Real QSS India teams — security personnel, event security, residential deployments and hospitality staff across our client locations.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Photo Gallery"
        title="Real Teams, Real Deployments"
        subtitle="No stock photos — every image here is a real QSS India team across residential, commercial, industrial and hospitality sites."
        crumb="Gallery"
        path="/gallery"
      />
      <Gallery />
      <CTABanner />
    </>
  );
}
