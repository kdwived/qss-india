import Image from "next/image";
import { hospitalityServices } from "@/data/content";
import Reveal from "./Reveal";

export default function Hospitality() {
  return (
    <section className="relative bg-navy-950 py-24 md:py-28">
      <div className="container-px">
        <Reveal className="max-w-2xl mb-14">
          <span className="section-label">Hospitality & Support</span>
          <h2 className="heading-display font-display text-3xl md:text-4xl xl:text-5xl font-semibold text-white mt-5">
            Front-of-House & Administrative Staffing
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-2 relative aspect-[4/5] lg:aspect-auto rounded-sm overflow-hidden border border-white/10">
            <Image
              src="/images/hospitality/hotel-deployment-01.jpg"
              alt="QSS India hospitality staff deployed at a hotel"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
          </Reveal>

          <Reveal className="lg:col-span-3 grid sm:grid-cols-2 gap-5" stagger={0.06}>
            {hospitalityServices.map((h) => (
              <div key={h.title} className="card-glass rounded-sm p-6">
                <h3 className="text-white font-semibold text-[15px] mb-2">{h.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{h.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
