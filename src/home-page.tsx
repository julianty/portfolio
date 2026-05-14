import { Helmet } from "react-helmet-async";
import HeroSection from "./components/home/HeroSection";
import ExperienceSection from "./components/home/ExperienceSection";
import ProjectsSection from "./components/home/ProjectsSection";
import ContactSection from "./components/home/ContactSection";
import SkillsAndCertificationsSection from "./components/home/Skills/SkillsAndCertificationsSection";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Alexander Julian Ty — Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Alexander Julian Ty, a full-stack developer specializing in React, TypeScript, Next.js, and cloud infrastructure."
        />
        <link rel="canonical" href="https://alexanderjulianty.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alexanderjulianty.com/" />
        <meta property="og:title" content="Alexander Julian Ty — Full-Stack Developer" />
        <meta property="og:description" content="Portfolio of Alexander Julian Ty, a full-stack developer specializing in React, TypeScript, Next.js, and cloud infrastructure." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Alexander Julian Ty — Full-Stack Developer" />
        <meta name="twitter:description" content="Portfolio of Alexander Julian Ty, a full-stack developer specializing in React, TypeScript, Next.js, and cloud infrastructure." />
      </Helmet>
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsAndCertificationsSection />
      <ContactSection />
    </>
  );
}
