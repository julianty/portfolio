import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";

import AboutMeCard from "../AboutMeCard";
import meInSuit from "../images/meInSuitSquare.jpg";
function Homepage() {
  return (
    <Container>
      <Container className="p-3 my-5">
        <Row className="justify-content-center align-items-center">
          <Col className="col-3 px-0 shadow">
            <Image src={meInSuit} fluid></Image>
          </Col>
          <Col className="col-5 px-0 shadow">
            <AboutMeCard />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col>
            Welcome to my website. Please use the navigation bar above to look
            around!
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Homepage;
