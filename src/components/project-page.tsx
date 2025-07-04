import { Project } from "@/project-data";
import { CodeBlock, dracula } from "react-code-blocks";
import SkillBadge from "./skill-badge";
import SectionHeader from "./ui/section-header";
const ProjectPage = ({ project }: { project: Project }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 min-h-screen">
      {/* Project Overview */}
      <section className="mb-10">
        <div className="flex gap-4 flex-col md:items-center md:flex-row">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {project.title}
          </h1>
          <div className="flex gap-2 flex-wrap">
            {project.technologies &&
              project.technologies.map((tech) => (
                <SkillBadge key={tech} skill={tech} />
              ))}
          </div>
        </div>
        <p className="text-lg text-secondary-foreground my-3 md:ml-8">
          {project.longDescription}
        </p>
      </section>
      {/* Source Code and Demo Links */}
      <section className="mb-10">
        <SectionHeader>Source Code & Demo</SectionHeader>
        <div className="flex space-x-4 md:ml-8">
          <a
            target="_blank"
            href={project.link.github}
            className="text-blue-500 underline"
          >
            View on GitHub
          </a>
          <a
            target="_blank"
            href={project.link.live}
            className="text-blue-500 underline"
          >
            Live Demo
          </a>
        </div>
      </section>
      {/* Key Features */}
      {project.keyFeatures && project.keyFeatures.length > 0 && (
        <section className="mb-10">
          <SectionHeader>Key Features</SectionHeader>
          <ul className="list-disc list-inside space-y-2 md:ml-8">
            {project.keyFeatures.map((feature) => (
              <li key={feature} className="text-secondary-foreground">
                {feature}
              </li>
            ))}
          </ul>
        </section>
      )}
      {/* Code Highlights and Design Choices */}
      {project.code &&
        project.codeCommentaries &&
        project.code.length == project.codeCommentaries.length && (
          <section className="mb-10">
            {/* <h2 className="text-2xl font-semibold text-foreground mb-4">
              Code Highlights & Design Choices
            </h2> */}
            <SectionHeader>Code Highlights & Design Choices</SectionHeader>
            {project.code.map((code, index) => {
              return (
                <div key={index} className="flex flex-col gap-4">
                  <div className="codeblock-wrapper md:ml-8">
                    <CodeBlock
                      text={code}
                      language="jsx"
                      showLineNumbers={false}
                      theme={dracula}
                      wrapLongLines={true}
                    />
                  </div>
                  <p className="text-secondary-foreground md:ml-8">
                    {project.codeCommentaries![index]}
                  </p>
                </div>
              );
            })}
          </section>
        )}
      {/* Process and Workflow */}
      {project.process && (
        <section className="mb-10">
          <SectionHeader>Process & Workflow</SectionHeader>
          <p className="text-secondary-foreground whitespace-pre-line md:ml-8">
            {project.process}
          </p>
        </section>
      )}
      {/* Challenges and Solutions */}
      {project.challenges && (
        <section className="mb-10">
          <SectionHeader>Challenges & Solutions</SectionHeader>
          {project.challenges.map((challenge) => (
            <div key={challenge.challenge} className="flex flex-col gap-4">
              <p className="md:ml-8">{challenge.challenge}</p>
              <p className="ml-4 md:ml-12">{challenge.solution}</p>
            </div>
          ))}
        </section>
      )}
      {/* Visuals */}
      {project.demo && (
        <section className="mb-10 w-full">
          <SectionHeader>Screenshots & Demos</SectionHeader>
          <div className="">
            {project.demo.map((source) => (
              <img
                key={source}
                src={`${source}`}
                // alt="Screenshot"
                className="rounded-lg shadow-md max-h-[500px] mx-auto"
              />
            ))}
          </div>
        </section>
      )}

      {/* Outcomes and Impact */}
      {project.outcomes && (
        <section className="mb-10">
          <SectionHeader>Outcomes & Impact</SectionHeader>
          <p className="text-secondary-foreground md:ml-8">
            {project.outcomes}
          </p>
        </section>
      )}

      {/* What You Learned */}
      {project.whatILearned && (
        <section className="mb-10">
          <SectionHeader>What I Learned</SectionHeader>
          <p className="text-secondary-foreground md:ml-8">
            {project.whatILearned}
          </p>
        </section>
      )}
    </div>
  );
};

export default ProjectPage;
