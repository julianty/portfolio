import HeroSection from "./components/home/HeroSection";
import ExperienceSection from "./components/home/ExperienceSection";
import ProjectsSection from "./components/home/ProjectsSection";
import ContactSection from "./components/home/ContactSection";
import SkillsAndCertificationsSection from "./components/home/Skills/SkillsAndCertificationsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <SkillsAndCertificationsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
