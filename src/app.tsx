import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router";
import Navbar from "@/components/navbar";
import ProjectPage from "@/components/project-page";
import { projectData } from "@/project-data";

import { ThemeProvider } from "@/components/theme-provider";
import { useEffect } from "react";
import HomePage from "@/home-page";
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <ScrollToTop />
        <div id="main-stack" className="flex flex-col md:w-4/5 md:mx-auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/projects/CorporeSano"
              element={<ProjectPage project={projectData[0]} />}
            />
            <Route
              path="/projects/juliantyart"
              element={<ProjectPage project={projectData[1]} />}
            />
            <Route
              path="/projects/JobPulse"
              element={<ProjectPage project={projectData[2]} />}
            />
            <Route
              path="/projects/WhatsForDinner"
              element={<ProjectPage project={projectData[3]} />}
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
