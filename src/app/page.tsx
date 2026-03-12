import Hero from "@/components/sections/Hero";
import AISection from "@/components/sections/AISection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Stats from "@/components/sections/Stats";
import CaseStudies from "@/components/sections/CaseStudies";
import Awards from "@/components/sections/Awards";
import TechStack from "@/components/sections/TechStack";
import EngagementModels from "@/components/sections/EngagementModels";
import Industries from "@/components/sections/Industries";
import Partnerships from "@/components/sections/Partnerships";
import Insights from "@/components/sections/Insights";
import Testimonials from "@/components/sections/Testimonials";
import ContactFormSection from "@/components/sections/ContactFormSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AISection />
      <ServicesOverview />
      <Stats />
      <CaseStudies />
      <Awards />
      <TechStack />
      <EngagementModels />
      <Industries />
      <Partnerships />
      <Insights />
      <Testimonials />
      <ContactFormSection />
    </>
  );
}
