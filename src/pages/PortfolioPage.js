import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";

import meInSuit from "../images/meInSuitCropped.jpg";
import AboutMeCard from "../components/AboutMeCard";
import WebDevelopmentCardGrid from "../components/WebDevelopmentCardGrid";
import MachineLearningCardGrid from "../components/MachineLearningCardGrid";
import GameDevelopmentCardGrid from "../components/GameDevelopmentCardGrid";

function PortfolioPage() {
  return (
    <Container fluid className="p-0">
      <Stack gap={5}>
        <Container>
          <Row>
            <h1>Projects</h1>
          </Row>
          <Row>
            <h2>Web Development</h2>
          </Row>
          <Row>
            <WebDevelopmentCardGrid />
          </Row>
          <Row>
            <h2>Machine Learning</h2>
            <MachineLearningCardGrid />
          </Row>
          <Row>
            <h2>Game Development</h2>
            <GameDevelopmentCardGrid />
          </Row>
        </Container>
        <Container fluid>
          <Row className="mx-auto">
            <Col className="col-3 offset-2">
              <h2>Contact Me</h2>
              <p>
                Please get in touch if you think our work could be mutually
                beneficial
              </p>
              <p>alexanderjulianty@gmail.com</p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Stack>
    </Container>
  );
}

export default PortfolioPage;
