import { AboutSection } from "@/components/portfolio/about-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { PortfolioFooter } from "@/components/portfolio/portfolio-footer";
import { PortfolioNavigation } from "@/components/portfolio/portfolio-navigation";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SkillsSection } from "@/components/portfolio/skills-section";

export default function HomePage() {
  return (
    <main className="overflow-clip">
      <PortfolioNavigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <PortfolioFooter />
    </main>
  );
}
