import { MantineNavbar } from "../components/navbar";

import { Outlet } from "react-router-dom";

import Container from "react-bootstrap/Container";

import { Box, Center } from "@mantine/core";

function LandingPage() {
  return (
    <Center>
      <Box w={{ base: "100%", lg: "50%", sm: "75%" }}>
        <MantineNavbar />

        <Container fluid className="px-0">
          <Outlet />
        </Container>
      </Box>
    </Center>
  );
}

export default LandingPage;
