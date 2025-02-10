import Contact from "./components/contact";
import { projectData } from "./project-data";
import ProjectHighlight from "./project-highlight";
export default function HomePage() {
  return (
    <>
      <section className="hero flex flex-col mx-auto">
        <h1>Hi, I'm Julian</h1>
        <h4>Full Stack Developer</h4>
      </section>
      <section id="projects" className="p-4">
        <div className="flex items-center gap-2">
          <h2 className="text-muted">What I've been working on</h2>
          <hr className="flex-grow" />
        </div>
        <div className="flex flex-col">
          <ProjectHighlight project={projectData[0]} />
        </div>
      </section>
      <section id="contact" className="p-4">
        <Contact />
      </section>
    </>
  );
}
