"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

type Client = {
  name: string;
  logo: string;
};

const clients: Client[] = [
  { name: "Ministry of Electronics & Information Technology", logo: "/images/clients/meity.webp" },
  { name: "Inspector General, Registration & Stamps Department", logo: "/images/clients/registration-stamps-department.webp" },
  { name: "Labour Bureau", logo: "/images/clients/labour-bureau.webp" },
  { name: "Airports Authority of India", logo: "/images/clients/airports-authority-of-india.webp" },
  { name: "Uttar Pradesh Medical Supplies Corporation Limited", logo: "/images/clients/upmscl.webp" },
  { name: "Income Tax Department", logo: "/images/clients/income-tax-department.webp" },
  { name: "Defence Accounts Department", logo: "/images/clients/defence-accounts-department.webp" },
  { name: "Customs and Central Excise", logo: "/images/clients/customs-central-excise.webp" },
  { name: "National Disaster Management Authority", logo: "/images/clients/ndma.webp" },
  { name: "National Informatics Centre", logo: "/images/clients/nic.webp" },
  { name: "Indian Council of Agricultural Research", logo: "/images/clients/icar.webp" },
  { name: "Controller General of Accounts", logo: "/images/clients/controller-general-of-accounts.webp" },
  { name: "Uttar Pradesh Basic Education Council", logo: "/images/clients/up-basic-education-council.webp" },
  { name: "National Small Industries Corporation", logo: "/images/clients/nsic.webp" },
  { name: "Aligarh Development Authority", logo: "/images/clients/aligarh-development-authority.webp" },
  { name: "Cabinet Secretariat", logo: "/images/clients/cabinet-secretariat.webp" },
  { name: "Bharat Petroleum", logo: "/images/clients/bharat-petroleum.webp" },
  { name: "North Central Railway", logo: "/images/clients/north-central-railway.webp" },
  { name: "Election Commission of India", logo: "/images/clients/election-commission-of-india.webp" },
  { name: "Kendriya Vidyalaya Sangathan", logo: "/images/clients/kendriya-vidyalaya.webp" },
  { name: "Power Grid Corporation of India Limited", logo: "/images/clients/powergrid.webp" },
  { name: "Uttar Pradesh Power Corporation Limited", logo: "/images/clients/uppcl.webp" },
  { name: "U.P. Power Transmission Corporation Limited", logo: "/images/clients/upptcl.webp" },
  { name: "Aligarh Nagar Nigam", logo: "/images/clients/aligarh-nagar-nigam.webp" },
  { name: "वि.सु.द. — श्रम समर्पण सुरक्षा", logo: "/images/clients/visud-security-emblem.webp" },
  { name: "Uttar Pradesh Export Promotion Council", logo: "/images/clients/upepc.webp" },
  { name: "Doon Public School", logo: "/images/clients/doon-public-school.webp" },
  { name: "TEC", logo: "/images/clients/tec.webp" },
  { name: "National Technical Research Organisation", logo: "/images/clients/ntro.webp" },
  { name: "Tota Brand", logo: "/images/clients/tota-brand.webp" },
  { name: "RR Cinema", logo: "/images/clients/rr-cinema.webp" },
  { name: "Blinkit", logo: "/images/clients/blinkit.webp" },
  { name: "Hero", logo: "/images/clients/hero.webp" }
];

const midpoint = Math.ceil(clients.length / 2);
const ROW1 = clients.slice(0, midpoint);
const ROW2 = clients.slice(midpoint);

function ClientCard({ client }: { client: Client }) {
  return (
    <div className="qss-client-card" title={client.name}>
      <div className="qss-client-logo-wrap">
        <Image
          src={client.logo}
          alt={`${client.name} logo`}
          fill
          sizes="(max-width: 640px) 170px, 220px"
          className="qss-client-logo"
        />
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: Client[];
  direction: "ltr" | "rtl";
}) {
  const repeated = [...items, ...items, ...items];

  return (
    <div className="qss-marquee-mask" aria-hidden="true">
      <div
        className={
          direction === "ltr"
            ? "qss-marquee-track qss-marquee-ltr"
            : "qss-marquee-track qss-marquee-rtl"
        }
      >
        {repeated.map((client, index) => (
          <ClientCard
            key={`${direction}-${client.logo}-${index}`}
            client={client}
          />
        ))}
      </div>
    </div>
  );
}

export default function ClientMarquee() {
  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-[#f7faff] py-20 md:py-24"
      aria-labelledby="clients-heading"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[760px] -translate-x-1/2 rounded-full bg-blue-100/55 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-px relative z-10">
        <Reveal className="mb-12 text-center md:mb-14">
          <div className="section-label mb-4 justify-center">Our Valued Clients</div>

          <h2
            id="clients-heading"
            className="heading-display mb-5 font-display text-3xl font-bold text-navy-900 md:text-4xl lg:text-5xl"
          >
            Trusted by Leading Organisations
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-ink-500 md:text-lg">
            QSS India has worked with government departments, public institutions
            and private organisations across multiple sectors.
          </p>
        </Reveal>
      </div>

      <div className="relative z-10 space-y-5">
        <MarqueeRow items={ROW1} direction="ltr" />
        <MarqueeRow items={ROW2} direction="rtl" />
      </div>

      <div className="sr-only">
        <h3>QSS India clients</h3>
        <ul>
          {clients.map((client) => (
            <li key={client.logo}>{client.name}</li>
          ))}
        </ul>
      </div>

      <div className="container-px relative z-10 mt-12 text-center">
        <Link href="/clients" className="btn-outline inline-flex">
          View All Clients
        </Link>
      </div>
    </section>
  );
}
