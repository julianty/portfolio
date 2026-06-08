import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "@/components/navbar";
import ProjectPage from "@/components/project-page";
import BarbellCVPage from "@/components/barbell-cv-page";
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

export function AppContent() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ScrollToTop />
      {/* <div id="main-stack" className="flex flex-col md:w-4/5 md:mx-auto"> */}
      <div
        id="main-stack"
        className="flex flex-col mx-auto min-h-screen w-full max-w-6xl px-4"
      >
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
          <Route
            path="/projects/birthday-ping"
            element={<ProjectPage project={projectData[4]} />}
          />
          <Route
            path="/projects/PomodoroTimer"
            element={<ProjectPage project={projectData[5]} />}
          />
          <Route path="/projects/BarbellCV" element={<BarbellCVPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
