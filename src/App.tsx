import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router";
import Navbar from "./components/navbar";
import ProjectPage from "./components/project-page";
import { projectData } from "./project-data";

import { ThemeProvider } from "./components/theme-provider";
import { useEffect } from "react";
import HomePage from "./home-page";
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

export default App;
