import Link from "next/link";
import { ShieldAlert, ArrowRight, Home } from "lucide-react";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.2] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] aspect-square rounded-full bg-brand-blue/10 blur-3xl pointer-events-none" />

      <div className="relative container-px text-center max-w-xl">
        <div className="w-16 h-16 rounded-sm bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center mx-auto mb-8">
          <ShieldAlert size={28} className="text-brand-skyblue" />
        </div>
        <p className="heading-display text-6xl md:text-7xl font-semibold text-white/20 mb-4">
          404
        </p>
        <h1 className="heading-display text-2xl md:text-4xl font-semibold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-white/55 mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Let&apos;s get you back to somewhere useful.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <Home size={16} />
            Back to Home
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
