import SectionHeader from "@/components/ui/section-header";
import SkillGroup from "./SkillGroup";
import {
  IconBracketsAngle,
  IconCertificate,
  IconDevices,
  IconStack2,
} from "@tabler/icons-react";

function SkillsAndCertificationsSection() {
  return (
    <section id="skills-section">
      <SectionHeader>Skills and Certifications</SectionHeader>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 md:gap-6">
        <SkillGroup
          title="Programming Languages"
          skills={["HTML", "CSS", "JavaScript", "TypeScript", "Python"]}
          icon={<IconBracketsAngle />}
        />
        <SkillGroup
          title="Front End Technologies"
          skills={["React", "Tailwind", "Bootstrap", "Vite"]}
          icon={<IconDevices />}
        />
        <SkillGroup
          title="Back End Technologies"
          skills={[
            "Express",
            "Node.js",
            "Next.js",
            "Vercel",
            "MongoDB",
            "PostgreSQL",
            "Firebase",
            "Supabase",
          ]}
          icon={<IconStack2 />}
        />

        <div className="grid w-full grid-cols-[44px_1fr] gap-x-4 gap-y-3 rounded-xl border border-border/50 bg-card/50 p-4 md:grid-cols-[52px_1fr] md:gap-x-6 md:p-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border/60 bg-background/70 text-muted-foreground shadow-sm md:h-12 md:w-12">
            <IconCertificate />
          </div>
          <h4 className="w-full self-center text-base font-semibold tracking-tight text-foreground md:text-lg">
            Certifications
          </h4>
          <div className="col-start-2 flex flex-wrap items-center gap-3 md:ml-2">
            <a
              href="https://www.credly.com/badges/f59ee321-6c4d-406b-95ea-91b80d8733a9/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-lg border border-border/60 bg-background/70 p-2 transition-colors hover:bg-muted/40"
            >
              <img
                alt="Amazon Web Services Cloud Practitioner Certification"
                src="https://images.credly.com/size/220x220/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
                className="h-14 w-14 rounded-md object-contain"
              />
              <span className="text-sm font-medium text-foreground group-hover:text-primary">
                AWS Cloud Practitioner
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsAndCertificationsSection;
