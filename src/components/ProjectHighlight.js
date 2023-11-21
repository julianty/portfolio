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
  if (mirror) {
    return (
      <Container className="my-3 px-5">
        <Row>
          <Col xs={"auto"} className="d-flex align-items-center ms-auto">
            {tags.map((tagName) => {
              console.log(tagName);
              return <ProjectTag tagLabel={tagName} key={uniqid()} />;
            })}
          </Col>
          <Col xs={"auto"}>
            <h3>{title}</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={9}>
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
          <Col xs={3}>
            <a href={imageHref} target="_blank" rel="noreferrer noopener">
              <Image src={imageSrc} thumbnail></Image>
            </a>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="my-3 px-5">
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
        <Col xs={9}>
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
