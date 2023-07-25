import { Card, Container } from "react-bootstrap";
import { SocialLinks } from "./SocialLinks";
import ProjectTag from "./ProjectTag";
import uniqid from "uniqid";

export default function ProjectCard({
  title,
  logo,
  href,
  imgSrc,
  text,
  tags = [],
}) {
  if (typeof tags == "string") {
    // Convert tag into an array in order to properly map
    console.log(tags);
    tags = [tags];
  }
  const onMouseEnter = (e) => {
    e.currentTarget.classList.add("shadow");
  };
  const onMouseLeave = (e) => {
    e.currentTarget.classList.remove("shadow");
  };
  const clickHandler = (e) => {
    window.open(href, "_blank");
  };
  return (
    <Card
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={clickHandler}
      style={{ cursor: "pointer" }}
    >
      <Card.Header className="d-flex justify-content-between">
        <Card.Title>{title}</Card.Title>
        <SocialLinks logo={logo} href={href} />
      </Card.Header>
      <Card.Img src={imgSrc} />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between"></Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer>
        {tags.map((tagLabel) => (
          <ProjectTag key={uniqid()} tagLabel={tagLabel} />
        ))}
        {/* <ProjectTag tagLabel="REACT" /> */}
      </Card.Footer>
    </Card>
  );
}
