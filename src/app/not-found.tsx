import Link from "next/link";
import { ShieldAlert, ArrowRight, Home } from "lucide-react";

export const metadata = {
  title: "Page Not Found | QSS India",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center bg-white overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 grid-bg-light opacity-[0.35] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-[120px] pointer-events-none" />

      <div className="relative container-px text-center max-w-xl">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto mb-6 text-brand-blue shadow-sm">
          <ShieldAlert size={30} />
        </div>
        <p className="heading-display font-display text-6xl md:text-8xl font-bold text-blue-100 mb-2">
          404
        </p>
        <h1 className="heading-display font-display text-2xl md:text-4xl font-bold text-navy-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-ink-500 mb-8 leading-relaxed text-sm md:text-base">
          The page you are looking for doesn&apos;t exist, was renamed, or may have moved.
          Explore our services or connect with our support team.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-blue-700"
          >
            <Home size={16} />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50"
          >
            Contact Support
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
