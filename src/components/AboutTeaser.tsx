import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Users, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { company } from "@/data/content";

export default function AboutTeaser() {
  return (
    <section className="relative bg-navy-950 py-24 md:py-28 border-t border-white/5">
      <div className="container-px grid lg:grid-cols-2 gap-14 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10">
            <Image
              src="/images/hospitality/hotel-deployment-01.jpg"
              alt="QSS India security team stationed at a hotel entrance"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -top-6 -left-4 md:-left-8 card-glass rounded-sm px-6 py-5">
            <p className="heading-display text-3xl font-semibold text-white">1999</p>
            <p className="text-white/50 text-xs uppercase tracking-wide mt-1">
              Trusted Excellence Since
            </p>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2">
          <span className="section-label">Who We Are</span>
          <h2 className="heading-display font-display text-3xl md:text-4xl xl:text-5xl font-semibold text-white mt-5 mb-6 leading-tight">
            A Team You Can Actually See Yourself Deploying
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            {company.fullName} has spent 25+ years building the kind of
            workforce that shows up trained, verified and in uniform — not
            just on paper, but on your site. Every photo on this website is
            a real deployment, not stock.
          </p>

          <div className="grid grid-cols-3 gap-5 mb-9">
            <div className="flex flex-col items-start gap-2">
              <ShieldCheck size={20} className="text-brand-skyblue" />
              <p className="text-white text-sm font-semibold">PSARA Licensed</p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <Users size={20} className="text-brand-skyblue" />
              <p className="text-white text-sm font-semibold">1,800+ Workforce</p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <MapPin size={20} className="text-brand-skyblue" />
              <p className="text-white text-sm font-semibold">7 Locations</p>
            </div>
          </div>

          <Link href="/about" className="btn-outline">
            Our Full Story
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
