import Contact from "@/components/contact";
import { projectData } from "@/project-data";
import ProjectHighlight from "@/project-highlight";
import Experience from "@/components/experience";
export default function HomePage() {
  return (
    <>
      <section className="hero flex flex-col mx-auto">
        <h1>Hi, I'm Julian</h1>
        <h4>Full Stack Developer</h4>
      </section>
      <section id="experience" className="p-4">
        <div className="flex items-center gap-2">
          <h2 className="text-muted">Past experience</h2>
          <hr className="flex-grow" />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <Experience
            title="Staff Research Associate"
            company="UC San Diego"
            bulletpoints={[
              "Conducted research in the application of Data Assimilation principles to the field of Machine Learning. Specifically, investigated the ability of principles of Information Theory and Precision Annealing to train a Multi-layer Perceptron neural network to extrapolate a chaotic time series.",
            ]}
          />
          <Experience
            title="Physics Workshop Coordinator"
            company="UC San Diego"
            bulletpoints={[
              "Coordinated and led workshops for undergraduate students in introductory physics courses.",
            ]}
          />
        </div>
      </section>
      <section id="projects" className="p-4">
        <div className="flex items-center gap-2">
          <h2 className="text-muted">What I've been working on</h2>
          <hr className="flex-grow" />
        </div>
        <div className="flex flex-col">
          <ProjectHighlight project={projectData[0]} />
          <ProjectHighlight project={projectData[1]} />
        </div>
      </section>
      <section id="contact" className="p-4">
        <Contact />
      </section>
    </>
  );
}
