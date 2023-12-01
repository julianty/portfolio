import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { SocialLinks, LOGOS } from "./SocialLinks";

function AboutMeCard() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Alexander Julian Ty</Card.Title>
        {/* <Card.Text>
          San Diego based web-developer, amateur powerlifter, coffee enthusiast,
          avid gamer, aspiring game developer, former research scientist,
          hobbyist artist.
        </Card.Text> */}
        <Card.Text className="mb-0">
          Full-stack Web Developer, UI/UX Designer
        </Card.Text>
        <Card.Text className="mb-0">Based in San Diego, California</Card.Text>
        <Row>
          <Col>
            <Card.Text>
              <a href="mailto:alexanderjulianty@gmail.com">Send me an email</a>
            </Card.Text>
          </Col>
          <Col>
            <SocialLinks />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default AboutMeCard;
