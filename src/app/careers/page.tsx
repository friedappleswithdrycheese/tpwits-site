import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Careers | TPWITS",
  description:
    "Join the TPWITS team. We're looking for talented engineers and professionals who want to work on challenging projects with global clients.",
};

/* TODO: Replace with real job listings when positions are open */
const teamAreas = [
  {
    area: "Engineering",
    description:
      "We work on AI, cloud infrastructure, and enterprise systems for global clients. Our engineers solve hard problems across the full stack.",
  },
  {
    area: "Product & Design",
    description:
      "Shape user experiences and product strategy for complex enterprise applications. Research, design, and iterate with real users.",
  },
  {
    area: "Business Development",
    description:
      "Build relationships with clients and partners. Help organizations understand how technology can solve their most pressing challenges.",
  },
  {
    area: "Operations",
    description:
      "Keep the engine running. From project delivery to finance to people operations, every function matters.",
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
              Build great software with us.
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              We&apos;re always looking for talented engineers and professionals
              who want to work on challenging projects. If you care about craft
              and want to solve real problems for real clients, we should talk.
            </p>
          </div>
        </div>
      </section>

      {/* Team Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            label="Where You Fit In"
            title="We're a growing team."
            description="If you're passionate about building great software, we want to hear from you. Here are the areas we're building out."
            align="center"
          />

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {teamAreas.map((item) => (
              <div
                key={item.area}
                className="card-hover p-8"
              >
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {item.area}
                </h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom">
          <SectionHeading
            label="What We Offer"
            title="A place to do meaningful work."
            description="We invest in our people because great work comes from supported, trusted teams."
            align="center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Challenging Projects",
                description:
                  "Work on AI, cloud, and enterprise systems for clients across healthcare, finance, retail, and more.",
              },
              {
                title: "Learning & Growth",
                description:
                  "Budget for courses, conferences, and certifications. We want you to keep growing.",
              },
              {
                title: "Flexible Work",
                description:
                  "Remote-friendly with flexible hours. We trust our team to manage their own schedules.",
              },
              {
                title: "Competitive Compensation",
                description:
                  "Fair pay, performance bonuses, and benefits that reflect the value you bring.",
              },
              {
                title: "Small Team Feel",
                description:
                  "You won't be a cog in a machine. Your work will be visible and your voice will be heard.",
              },
              {
                title: "Global Clients",
                description:
                  "Work with organizations across the US, Middle East, and Europe on problems that matter.",
              },
            ].map((benefit) => (
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
            Interested? Send us your profile.
          </h2>
          <p className="text-lg text-white/60 leading-relaxed max-w-xl mx-auto mb-10">
            We don&apos;t have a formal application process for every role.
            If you think you&apos;d be a good fit, reach out and tell us
            about yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="mailto:careers@tpwits.com" variant="primary" size="lg">
              Email careers@tpwits.com
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Or Use the Contact Form
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
