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
  mirror,
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
    <Container className="my-3 p-5 border rounded">
      <Row>
        <Col xs={7}>
          <Row>
            <Row>
              <Col>
                {tags.map((tagName) => {
                  console.log(tagName);
                  return <ProjectTag tagLabel={tagName} key={uniqid()} />;
                })}
              </Col>
            </Row>
            <h3>{title}</h3>
          </Row>
          {description}
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
        <Col xs={5}>
          <a href={imageHref} target="_blank" rel="noreferrer noopener">
            <Image src={imageSrc} thumbnail></Image>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
