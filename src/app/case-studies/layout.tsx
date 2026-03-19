import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Case Studies",
  description:
    "Explore real results from TPWITS partnerships. See how we help businesses across healthcare, fintech, retail, and more transform with technology.",
  path: "/case-studies",
});

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
