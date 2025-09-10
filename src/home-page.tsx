import HeroSection from "./components/home/HeroSection";
import ExperienceSection from "./components/home/ExperienceSection";
import ProjectsSection from "./components/home/ProjectsSection";
import ContactSection from "./components/home/ContactSection";
import SkillsSection from "./components/home/Skills/SkillsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
