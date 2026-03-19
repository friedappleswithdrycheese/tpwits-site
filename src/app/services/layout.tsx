import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Our Services",
  description:
    "Explore TPWITS technology services — AI & data innovation, digital product engineering, cloud infrastructure, Web3, cybersecurity, and more.",
  path: "/services",
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
