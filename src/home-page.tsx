import Contact from "@/components/contact";
import { projectData } from "@/project-data";
import ProjectHighlight from "@/project-highlight";
import Experience from "@/components/experience";
import SectionHeader from "./components/ui/section-header";
import SkillBadge from "./components/skill-badge";
import { IconBook } from "@tabler/icons-react";
import { Button } from "./components/ui/button";
export default function HomePage() {
  return (
    <>
      <section className="h-[90vh] flex flex-col justify-center items-center bg-linear-to-tr from-background to-foreground">
        <h1>Hi, I'm Julian</h1>
        <h4>Full Stack Developer</h4>
      </section>
      <section id="experience">
        <SectionHeader>Education & Experience</SectionHeader>
        <div className="flex flex-col gap-16 items-center">
          <Experience
            title="Staff Research Associate - Machine Learning"
            company="UC San Diego - Abarbanel Lab"
            bulletpoints={[
              "Conducted research in the application of Data Assimilation principles to the field of Machine Learning.",
              "Specifically, investigated the ability of principles of Information Theory and Precision Annealing to train a Multi-layer Perceptron neural network to extrapolate a chaotic time series.",
            ]}
            year="2018-2020"
          >
            <p>
              <a
                href="https://arxiv.org/abs/1902.05062"
                className="text-blue-500"
                target="_blank"
                rel="noreferrer"
              >
                arxiv link
              </a>{" "}
              to paper
            </p>
          </Experience>
          <Experience
            title="Physics Workshop Coordinator"
            company="UC San Diego - OASIS MSTP"
            bulletpoints={[
              "Coordinated and led workshops for undergraduate students in introductory physics courses.",
            ]}
            year="2016-2018"
          >
            <p>
              <a
                href="https://oasis.ucsd.edu/academic-services/mstp-folder/index.html"
                target="_blank"
                className="text-blue-500"
                rel="noreferrer"
              >
                Office website
              </a>
            </p>
          </Experience>
          <div className="flex justify-between w-full md:w-3/4 px-4">
            <div className="flex flex-1 gap-3">
              <IconBook className="text-muted md:block hidden" size="40px" />
              <div className="flex flex-col">
                <h3>B.S. Engineering Physics</h3>
                <p className="text-muted">
                  UC San Diego - Jacob's School of Engineering
                </p>
              </div>
            </div>
            <div>
              <p className="text-end text-md min-w-24">2015</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Button asChild variant={"secondary"}>
            <a
              href="https://drive.google.com/file/d/1ySSzTfMg72FYJPMgnBd4bdX_oepxST-H/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              View resume pdf
            </a>
          </Button>
        </div>
      </section>
      <section id="skills">
        <SectionHeader>Skills</SectionHeader>
        <div id="skills" className="flex flex-col gap-8 w-5/6 md:w-3/4 mx-auto">
          Languages
          <div className="flex flex-wrap gap-2 md:ml-8">
            <SkillBadge skill="HTML" />
            <SkillBadge skill="CSS" />
            <SkillBadge skill="JavaScript" />
            <SkillBadge skill="TypeScript" />
            <SkillBadge skill="Python" />
          </div>
          Front End Technologies
          <div className="flex flex-wrap gap-2 md:ml-8">
            <SkillBadge skill="React" />
            <SkillBadge skill="Tailwind" />
            <SkillBadge skill="Bootstrap" />
            <SkillBadge skill="Vite" />
          </div>
          Back End Technologies
          <div className="flex flex-wrap gap-2 md:ml-8">
            <SkillBadge skill="Express" />
            <SkillBadge skill="Node.js" />
            <SkillBadge skill="MongoDB" />
            <SkillBadge skill="PostgreSQL" />
            <SkillBadge skill="Firebase" />
            <SkillBadge skill="Supabase" />
          </div>
        </div>
      </section>
      <section id="projects">
        <SectionHeader>Projects</SectionHeader>
        <div className="flex flex-col flex-wrap lg:flex-row my-8">
          <ProjectHighlight project={projectData[0]} />
          <ProjectHighlight project={projectData[1]} />
          <ProjectHighlight project={projectData[2]} />
          {/* <ProjectHighlight project={projectData[2]} /> */}
        </div>
      </section>
      <section id="contact" className="flex flex-col h-[70vh]">
        <SectionHeader>Let's get in touch</SectionHeader>
        <Contact />
      </section>
    </>
  );
}
