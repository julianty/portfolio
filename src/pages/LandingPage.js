import BootstrapNavbar from "../components/navbar";
import BootstrapCarousel from "../BootstrapCarousel";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";

import PortfolioPage from "./PortfolioPage";
import ResumePage from "./ResumePage";
import Homepage from "./Homepage";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
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

      <Navbar bg="dark" variant="dark" className="fixed-bottom">
        <Container>
          <Nav>
            <Nav.Link to="/">
              Created by Alexander Julian Ty with React
            </Nav.Link>
            <Nav.Link href="mailto:alexanderjulianty@gmail.com">
              Email me
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default LandingPage;
