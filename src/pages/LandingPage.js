import { MantineNavbar } from "../components/navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";

import PortfolioPage from "./PortfolioPage";
import ResumePage from "./ResumePage";
import Homepage from "./Homepage";
import CorporeSanoPage from "./CorporeSanoPage";
import { Box, Center } from "@mantine/core";

function LandingPage() {
  return (
    <Center>
      <Box w={{ base: "100%", lg: "50%", sm: "75%" }}>
        <MantineNavbar />

        <Container fluid className="px-0">
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/Portfolio" element={<PortfolioPage />}></Route>
            <Route path="/Resume" element={<ResumePage />}></Route>
            {/* <Route path="/Misc"></Route> */}
            <Route
              path="/projects/CorporeSano"
              element={<CorporeSanoPage />}
            ></Route>
          </Routes>
        </Container>
      </Box>
    </Center>
  );
}

export default LandingPage;
