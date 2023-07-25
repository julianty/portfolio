import { Container, Row, Col, Card } from "react-bootstrap";
import { SocialLinks } from "./SocialLinks";
import chickenFeetThumbnail from "../images/chickenFeetThumbnail.png";
import ProjectTag from "./ProjectTag";

export default function GameDevelopmentCardGrid() {
  return (
    <Container className="mx-auto">
      <Row>
        <Col md="3">
          <Card>
            <Card.Header>
              <Card.Title>Chicken Feet</Card.Title>
            </Card.Header>
            <Card.Img variant="top" src={chickenFeetThumbnail}></Card.Img>
            <Card.Body>
              My first attempt at developing a game in Unity as a part of the
              'USC Games Unlocked' Course
            </Card.Body>
            <Card.Footer>
              <ProjectTag tagLabel="GAMEDEV" />
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
