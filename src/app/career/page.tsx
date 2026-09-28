import type { Metadata } from "next";
import CareerPage from "./CareerPage";

export const metadata: Metadata = {
  title: "Career | Build Your Future with QSS India",
  description:
    "Join QSS India — opportunities in professional security, housekeeping, manpower outsourcing, administration and related support roles. Apply online today.",
  alternates: { canonical: "/career" },
  openGraph: {
    title: "Career at QSS India | Security & Manpower Roles",
    description:
      "Explore rewarding careers in security, housekeeping, manpower and administrative support with QSS India — trusted since 1999.",
    type: "website",
  },
};

export default function Page() {
  return <CareerPage />;
}
