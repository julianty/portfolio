import { Container, Row, Col, Image } from "react-bootstrap";
import ProjectTag from "./ProjectTag";
import { SocialLinks, LOGOS } from "./SocialLinks";
import uniqid from "uniqid";
export default function ProjectHighlight({
  title,
  tags,
  description,
  imageSrc,
  imageHref,
  socialLinks,
}) {
  /* 
  Inputs
    title: string
    tags: [string]
    description: string
    imageSrc: fileImport
    imageHref: string(hyperlink)
    socialLinks: {LOGOS: string(hyperlink)}
  */
  return (
    <Container className="my-3">
      <Row>
        <Col xs={"auto"}>
          <h3>{title}</h3>
        </Col>
        <Col className="d-flex align-items-center">
          {tags.map((tagName) => {
            console.log(tagName);
            return <ProjectTag tagLabel={tagName} key={uniqid()} />;
          })}
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <a href={imageHref} target="_blank" rel="noreferrer noopener">
            <Image src={imageSrc} thumbnail></Image>
          </a>
        </Col>
        <Col xs={8}>
          <Row>{description}</Row>
          <Row>
            <Col>
              {Object.keys(socialLinks).map((logo) => {
                return (
                  <SocialLinks
                    logo={logo}
                    href={socialLinks[logo]}
                    key={uniqid()}
                  />
                );
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
