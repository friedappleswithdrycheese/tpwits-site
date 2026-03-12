import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Blog | TPWITS",
  description:
    "Insights, thought leadership, and technical resources from the TPWITS team. Stay informed on AI, cloud, cybersecurity, Web3, and digital transformation trends.",
};

const blogPosts = [
  {
    title: "How AI Agents Are Redefining Enterprise Automation",
    excerpt:
      "Explore how autonomous AI agents are moving beyond simple chatbots to orchestrate complex workflows, make real-time decisions, and transform business operations at scale.",
    category: "AI",
    date: "Feb 28, 2026",
    readTime: "8 min read",
    gradient: "linear-gradient(135deg, #E8713A 0%, #F5A44C 100%)",
    slug: "ai-agents-enterprise-automation",
  },
  {
    title: "Cloud Cost Optimization: A FinOps Playbook for 2026",
    excerpt:
      "Cloud spending continues to grow unchecked for many organizations. Learn proven FinOps strategies to reduce your cloud bill by up to 40% without sacrificing performance.",
    category: "Cloud",
    date: "Feb 15, 2026",
    readTime: "6 min read",
    gradient: "linear-gradient(135deg, #262626 0%, #171717 100%)",
    slug: "cloud-cost-optimization-finops",
  },
  {
    title: "Zero Trust Architecture: Beyond the Buzzword",
    excerpt:
      "Zero trust is more than a marketing term. We break down the practical steps to implement a zero trust security model across your organization, from identity to network.",
    category: "Cybersecurity",
    date: "Feb 3, 2026",
    readTime: "10 min read",
    gradient: "linear-gradient(135deg, #262626 0%, #171717 100%)",
    slug: "zero-trust-architecture-guide",
  },
  {
    title: "Building Scalable dApps: Lessons from Production",
    excerpt:
      "Real-world insights from deploying decentralized applications at scale, including smart contract optimization, gas efficiency, and cross-chain interoperability patterns.",
    category: "Web3",
    date: "Jan 22, 2026",
    readTime: "12 min read",
    gradient: "linear-gradient(135deg, #262626 0%, #171717 100%)",
    slug: "building-scalable-dapps",
  },
  {
    title: "The Product Engineering Mindset: Ship Faster, Learn Sooner",
    excerpt:
      "Why traditional software development fails modern product teams and how adopting a product engineering mindset accelerates delivery, reduces waste, and drives better outcomes.",
    category: "Engineering",
    date: "Jan 10, 2026",
    readTime: "7 min read",
    gradient: "linear-gradient(135deg, #E8713A 0%, #F5A44C 100%)",
    slug: "product-engineering-mindset",
  },
  {
    title: "MLOps Maturity Model: From Notebooks to Production AI",
    excerpt:
      "A practical framework for evaluating and advancing your organization's ML operations maturity, from ad-hoc experimentation to fully automated, production-grade AI pipelines.",
    category: "AI",
    date: "Dec 28, 2025",
    readTime: "9 min read",
    gradient: "linear-gradient(135deg, #262626 0%, #171717 100%)",
    slug: "mlops-maturity-model",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px]" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Insights &amp; Resources
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              Thought leadership, technical deep-dives, and practical guides
              from the engineers, architects, and strategists at TPWITS.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <article key={post.slug} className="card-hover overflow-hidden">
                {/* Gradient Top */}
                <div
                  className="h-48 relative"
                  style={{ background: post.gradient }}
                >
                  <span className="absolute top-4 left-4 inline-flex items-center text-xs font-bold text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground leading-snug mb-3">
                    {post.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-foreground-subtle">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
                    >
                      Read more &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom text-center">
          <SectionHeading
            label="Stay Updated"
            title="Subscribe to our newsletter."
            description="Get the latest insights on AI, cloud, cybersecurity, and digital transformation delivered to your inbox."
            align="center"
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your work email"
              className="w-full sm:flex-1 px-5 py-3.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
            <button className="w-full sm:w-auto px-7 py-3.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
