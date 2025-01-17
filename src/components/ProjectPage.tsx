import { Project } from "@/projectData";
import { CodeBlock, dracula } from "react-code-blocks";
const ProjectPage = ({ project }: { project: Project }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen">
      {/* Project Overview */}
      <section className="mb-10">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          {project.title}
        </h1>
        <p className="text-lg text-secondary-foreground">
          {project.longDescription}
        </p>
      </section>
      {/* Source Code and Demo Links */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Source Code & Demo
        </h2>
        <div className="flex space-x-4">
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
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Key Features
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {project.keyFeatures.map((feature) => (
              <li key={feature} className="text-secondary-foreground">
                {feature}
              </li>
            ))}
          </ul>
        </section>
      )}
      {/* Technologies Used */}
      {project.technologies && project.technologies.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Technologies Used
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {/* <li className="text-secondary-foreground">React</li>
          <li className="text-secondary-foreground">Tailwind CSS</li>
          <li className="text-secondary-foreground">Other Libraries/Frameworks</li> */}
            {project.technologies.map((tech) => (
              <li key={tech} className="text-secondary-foreground">
                {tech}
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
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Code Highlights & Design Choices
            </h2>
            {project.code.map((code, index) => {
              return (
                <div key={index}>
                  <div className="codeblock-wrapper">
                    <CodeBlock
                      text={code}
                      language="jsx"
                      showLineNumbers={false}
                      theme={dracula}
                      wrapLongLines={true}
                    />
                  </div>
                  <p className="text-secondary-foreground">
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
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Process and Workflow
          </h2>
          <p className="text-secondary-foreground whitespace-pre-line">
            {project.process}
          </p>
        </section>
      )}
      {/* Challenges and Solutions */}
      {project.challenges && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Challenges and Solutions
          </h2>
          <p>{project.challenges[0].challenge}</p>
          <p>{project.challenges[0].solution}</p>
          {/* <p className="text-secondary-foreground">
          Describe any challenges you faced during development and how you
          solved them. This could include technical problems or unexpected
          changes.
        </p> */}
        </section>
      )}
      {/* Visuals */}
      {project.demo && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Screenshots & Demos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.demo.map((source) => (
              <img
                key={source}
                src={`${source}`}
                // alt="Screenshot"
                className="rounded-lg shadow-md"
              />
            ))}
          </div>
        </section>
      )}

      {/* Outcomes and Impact */}
      {project.outcomes && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Outcomes and Impact
          </h2>
          <p className="text-secondary-foreground">{project.outcomes}</p>
        </section>
      )}

      {/* What You Learned */}
      {project.whatILearned && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            What I Learned
          </h2>
          <p className="text-secondary-foreground">{project.whatILearned}</p>
        </section>
      )}
    </div>
  );
};

export default ProjectPage;
