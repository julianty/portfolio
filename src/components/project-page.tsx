import { Helmet } from "react-helmet-async";
import { Project } from "@/project-data";
import { CodeBlock, dracula } from "react-code-blocks";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import SkillBadge from "./skill-badge";
import SectionHeader from "./ui/section-header";
const ProjectPage = ({ project }: { project: Project }) => {
  return (
    <div className="mx-auto min-h-screen max-w-4xl px-4 py-8 md:px-6 md:py-12">
      <Helmet>
        <title>{project.title} — Alexander Julian Ty</title>
        <meta name="description" content={project.description} />
        <link
          rel="canonical"
          href={`https://alexanderjulianty.com/projects/${project.pageLink}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://alexanderjulianty.com/projects/${project.pageLink}`} />
        <meta property="og:title" content={`${project.title} — Alexander Julian Ty`} />
        <meta property="og:description" content={project.description} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${project.title} — Alexander Julian Ty`} />
        <meta name="twitter:description" content={project.description} />
      </Helmet>
      {/* Project Overview */}
      <section className="mb-12">
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {project.title}
        </h1>
        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <SkillBadge key={tech} skill={tech} />
            ))}
          </div>
        )}
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {project.longDescription}
        </p>
      </section>
      {/* Source Code and Demo Links */}
      {(project.link.github || project.link.live) && (
        <section className="mb-12">
          <SectionHeader>Source Code & Demo</SectionHeader>
          <div className="flex flex-wrap gap-3">
            {project.link.github && (
              <a
                target="_blank"
                rel="noreferrer"
                href={project.link.github}
                className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-card/50 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <IconBrandGithub size={16} />
                View on GitHub
              </a>
            )}
            {project.link.live && (
              <a
                target="_blank"
                rel="noreferrer"
                href={project.link.live}
                className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <IconExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </section>
      )}
      {/* Key Features */}
      {project.keyFeatures && project.keyFeatures.length > 0 && (
        <section className="mb-12">
          <SectionHeader>Key Features</SectionHeader>
          <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            {project.keyFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
      )}
      {/* Code Highlights and Design Choices */}
      {project.code &&
        project.codeCommentaries &&
        project.code.length == project.codeCommentaries.length && (
          <section className="mb-12">
            <SectionHeader>Code Highlights & Design Choices</SectionHeader>
            <div className="flex flex-col gap-8">
              {project.code.map((code, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="overflow-hidden rounded-xl border border-border/50">
                    <div className="max-h-96 overflow-y-auto">
                      <CodeBlock
                        text={code}
                        language="jsx"
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLongLines={true}
                      />
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {project.codeCommentaries![index]}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      {/* Process and Workflow */}
      {project.process && (
        <section className="mb-12">
          <SectionHeader>Process & Workflow</SectionHeader>
          <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground md:text-base">
            {project.process}
          </p>
        </section>
      )}
      {/* Challenges and Solutions */}
      {project.challenges && (
        <section className="mb-12">
          <SectionHeader>Challenges & Solutions</SectionHeader>
          <div className="flex flex-col gap-6">
            {project.challenges.map((challenge) => (
              <div
                key={challenge.challenge}
                className="rounded-xl border border-border/50 bg-card/50 p-5"
              >
                <p className="text-sm font-semibold text-foreground md:text-base">
                  {challenge.challenge}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {challenge.solution}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
      {/* Visuals */}
      {project.demo && project.demo.length > 0 && (
        <section className="mb-12">
          <SectionHeader>Screenshots & Demos</SectionHeader>
          <div className="flex flex-col gap-6">
            {project.demo.map((demo) => {
              if (demo.type === "gif") {
                return (
                  <img
                    key={demo.src}
                    src={demo.src}
                    alt={`${project.title} demo`}
                    className="mx-auto max-h-[500px] rounded-xl border border-border/50 shadow-sm"
                  />
                );
              } else if (demo.type === "video") {
                return (
                  <div key={demo.src} className="flex flex-col gap-2">
                    {demo.commentary && (
                      <p className="text-sm font-medium text-muted-foreground">
                        {demo.commentary}
                      </p>
                    )}
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="rounded-xl border border-border/50 shadow-sm"
                    >
                      <source src={demo.src} type="video/mp4" />
                    </video>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </section>
      )}

      {/* Outcomes and Impact */}
      {project.outcomes && (
        <section className="mb-12">
          <SectionHeader>Outcomes & Impact</SectionHeader>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {project.outcomes}
          </p>
        </section>
      )}

      {/* What You Learned */}
      {project.whatILearned && (
        <section className="mb-12">
          <SectionHeader>What I Learned</SectionHeader>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {project.whatILearned}
          </p>
        </section>
      )}
    </div>
  );
};

export default ProjectPage;
