import Card from "react-bootstrap/Card";
import { SocialLinks, LOGOS } from "./SocialLinks";

function AboutMeCard() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>About Me</Card.Title>
        <Card.Text>
          San Diego based web-developer, amateur powerlifter, coffee enthusiast,
          avid gamer, aspiring game developer, former research scientist,
          hobbyist artist.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <SocialLinks />
      </Card.Body>
    </Card>
  );
}

export default AboutMeCard;
