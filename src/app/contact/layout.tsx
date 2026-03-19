import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with TPWITS. Tell us about your project and schedule a free consultation with our technology experts.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
