import Image from "next/image";
import { ShieldCheck, Users, MapPin, Award } from "lucide-react";
import { about, company } from "@/data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative bg-navy-950 py-24 md:py-32 overflow-hidden">
      <div className="container-px grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <h2 className="heading-display font-display text-3xl md:text-4xl xl:text-5xl font-semibold text-white mb-7 leading-tight">
            25+ Years of Trusted Workforce & Security Excellence
          </h2>
          <div className="space-y-5 text-white/65 leading-relaxed text-[15px] md:text-base">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-5 mt-10">
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-brand-skyblue shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-white text-sm font-semibold">PSARA Licensed</p>
                <p className="text-white/45 text-xs mt-1">Fully compliant security operations</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="text-brand-skyblue shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-white text-sm font-semibold">1,800+ Workforce</p>
                <p className="text-white/45 text-xs mt-1">Deployed across client sites</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-brand-skyblue shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-white text-sm font-semibold">7 Locations</p>
                <p className="text-white/45 text-xs mt-1">UP, Delhi & Uttarakhand</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="text-brand-skyblue shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-white text-sm font-semibold">Govt. & Private Sector</p>
                <p className="text-white/45 text-xs mt-1">Trusted across both sectors</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="relative">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10">
            <Image
              src="/images/security/team-lineup-01.jpg"
              alt={`${company.fullName} security team on deployment`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 md:-left-10 card-glass rounded-sm px-6 py-5 hidden sm:block">
            <p className="heading-display text-3xl font-semibold text-white">1999</p>
            <p className="text-white/50 text-xs uppercase tracking-wide mt-1">Trusted Excellence Since</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
