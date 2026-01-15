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
    <section id="skills">
      <SectionHeader>Skills and Certifications</SectionHeader>
      <div
        id="skills"
        className="flex flex-col gap-2 md:gap-8 w-5/6 md:w-3/4 mx-auto"
      >
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

        <div className="grid w-full grid-cols-[50px_1fr] grid-rows-[auto_auto] gap-x-10 p-4 ">
          <div className="border bg-neutral-900 p-2 w-[50px] h-[50px] text-foreground-muted flex items-center justify-center rounded-xl d">
            <IconCertificate />
          </div>
          <h4 className="text-xl w-full">Certifications</h4>
          <div className="col-start-2 flex flex-wrap gap-2 md:ml-8">
            <a
              href="https://www.credly.com/badges/f59ee321-6c4d-406b-95ea-91b80d8733a9/public_url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Amazon Web Services Cloud Practicioner Certification"
                src="	https://images.credly.com/size/220x220/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
                width={100}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsAndCertificationsSection;
