import { Link, Route, BrowserRouter as Router, Routes } from "react-router";
import Navbar from "./components/Navbar";
import ProjectPage from "./components/ProjectPage";
import SkillBadge from "./components/SkillBadge";
import { Project, projectData } from "./projectData";

import { ThemeProvider } from "./components/theme-provider";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div id="main-stack" className="flex flex-col ">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/projects/CorporeSano"
              element={<ProjectPage project={projectData[0]} />}
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

function HomePage() {
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
          {/* <div className="bg-card p-4 rounded-lg">
              <h3>Project 2</h3>
              <p>Project Description</p>
            </div>
            <div className="bg-card p-4 rounded-lg">
              <h3>Project 3</h3>
              <p>Project Description</p>
            </div> */}
        </div>
      </section>
    </>
  );
}

function ProjectHighlight({ project }: { project: Project }) {
  return (
    <div className="project-highlight">
      <div className="flex justify-between">
        <h3 className="project-title">{project.title}</h3>
        <div className="flex gap-1">
          {project.skills.map((skill) => (
            <SkillBadge skill={skill} key={skill} />
          ))}
        </div>
      </div>
      <p className="project-description">{project.description}</p>
      <Link to={`projects/${project.link}`}>
        <img className="rounded-lg" src={project.image} alt={project.title} />
      </Link>
    </div>
  );
}

export default App;
