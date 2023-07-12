import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";

function Homepage() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          Welcome to my website. Please use the navigation bar above to look
          around!
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
