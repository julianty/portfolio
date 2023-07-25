import BootstrapNavbar from "../navbar";
import BootstrapCarousel from "../BootstrapCarousel";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";

import PortfolioPage from "./PortfolioPage";
import ResumePage from "./ResumePage";
import Homepage from "./Homepage";

function LandingPage() {
  return (
    <>
      <BootstrapNavbar></BootstrapNavbar>

      <Container fluid className="px-0">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Portfolio" element={<PortfolioPage />}></Route>
          <Route path="/Resume" element={<ResumePage />}></Route>
          {/* <Route path="/Misc"></Route> */}
        </Routes>
      </Container>
    </>
  );
}

export default LandingPage;
