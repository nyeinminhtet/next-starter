import { CtaSection } from "@/components/shared/cta-section";
import { FeaturesSection } from "@/components/shared/features-section";
import { HeroSection } from "@/components/shared/hero-section";
import { SiteFooter } from "@/components/shared/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
      <SiteFooter />
    </div>
  );
}
