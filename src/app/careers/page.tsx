import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Careers | TPWITS",
  description:
    "Join the TPWITS team. Explore open positions in AI, cloud, engineering, and more. Build your career with a global technology company that values innovation, growth, and people.",
};

const openPositions = [
  {
    title: "Senior AI Engineer",
    location: "San Francisco, USA",
    type: "Full-time",
    department: "AI & Data Innovation",
  },
  {
    title: "Full Stack Developer",
    location: "Lahore, Pakistan",
    type: "Full-time",
    department: "Digital Product Engineering",
  },
  {
    title: "Cloud Architect",
    location: "Remote",
    type: "Full-time",
    department: "Cloud & Infrastructure",
  },
  {
    title: "DevOps Engineer",
    location: "Dubai, UAE",
    type: "Full-time",
    department: "Cloud & Infrastructure",
  },
  {
    title: "UX Designer",
    location: "Remote",
    type: "Full-time",
    department: "Digital Product Engineering",
  },
];

const benefits = [
  {
    title: "Learning Budget",
    description:
      "Annual budget for courses, conferences, and certifications to keep your skills sharp.",
  },
  {
    title: "Flexible Hours",
    description:
      "Work when you are most productive. We trust our team to manage their own schedules.",
  },
  {
    title: "Remote-First",
    description:
      "Work from anywhere. Our distributed teams collaborate across time zones seamlessly.",
  },
  {
    title: "Health Coverage",
    description:
      "Comprehensive medical, dental, and vision insurance for you and your family.",
  },
  {
    title: "Equity & Bonuses",
    description:
      "Competitive compensation with performance bonuses and equity options for all employees.",
  },
  {
    title: "Paid Time Off",
    description:
      "Generous PTO policy plus company-wide recharge days to ensure you stay refreshed.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px]" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Careers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Join our team of innovators.
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              At TPWITS, we foster a culture of curiosity, collaboration, and
              continuous learning. Work on cutting-edge projects with talented
              people who are passionate about engineering tomorrow&apos;s digital
              reality.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            label="Open Positions"
            title="Find your next opportunity."
            description="We are always looking for exceptional talent to join our global team. Explore our current openings below."
            align="center"
          />

          <div className="max-w-4xl mx-auto space-y-4">
            {openPositions.map((position) => (
              <div
                key={position.title}
                className="card-hover p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {position.title}
                  </h3>
                  <p className="text-sm text-foreground-muted">
                    {position.department}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                  <span className="inline-flex items-center text-xs font-medium text-foreground-muted bg-background-alt px-3 py-1.5 rounded-full">
                    {position.location}
                  </span>
                  <span className="inline-flex items-center text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                    {position.type}
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
                  >
                    Apply Now &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom">
          <SectionHeading
            label="Benefits & Perks"
            title="Why you will love working here."
            description="We invest in our people because great work comes from happy, supported teams."
            align="center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding overflow-hidden bg-navy">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5 max-w-3xl mx-auto">
            Don&apos;t see a role that fits?
          </h2>
          <p className="text-lg text-white/60 leading-relaxed max-w-xl mx-auto mb-10">
            We are always eager to connect with talented individuals. Send us
            your resume and tell us how you can contribute to our mission.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Send Us Your Resume
          </Button>
        </div>
      </section>
    </>
  );
}
