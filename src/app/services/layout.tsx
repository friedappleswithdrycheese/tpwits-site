import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Our Services",
  description:
    "TPWITS technology services — research & strategy, AI & data, product engineering, cloud & security, and blockchain & enterprise solutions.",
  path: "/services",
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
