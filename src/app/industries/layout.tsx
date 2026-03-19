import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Industries",
  description:
    "TPWITS brings deep domain expertise across healthcare, fintech, retail, education, energy, and more. Industry-specific solutions that address your unique challenges.",
  path: "/industries",
});

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
