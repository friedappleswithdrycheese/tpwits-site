import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "About Us",
  description:
    "Learn about TPWITS — our mission, values, and the team behind enterprise technology solutions.",
  path: "/about",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
