import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import githubLogo from "./images/GitHub-Mark-120px-plus.png";
import linkedInLogo from "./images/LI-In-Bug.png";
import arxivLogo from "./images/arxiv-logomark-small.svg";

const LOGOS = {
  GITHUB: "github",
  LINKEDIN: "linkedin",
  ARXIV: "arxiv",
};

function SocialLinks(props) {
  switch (props.logo) {
    case LOGOS.GITHUB:
      return (
        <a href={props.href} target="_blank" rel="noreferrer">
          <Image src={githubLogo} style={{ height: "20px" }} />
        </a>
      );

    case LOGOS.LINKEDIN:
      return (
        <a
          href="https://www.linkedin.com/in/alexander-julian-ty-98614687/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={linkedInLogo} style={{ height: "20px" }} />
        </a>
      );

    case LOGOS.ARXIV:
      return (
        <a
          href="https://arxiv.org/abs/1902.05062"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={arxivLogo} style={{ height: "20px" }} />
        </a>
      );

    case undefined:
      return;
    default:
      return (
        <Container
          className="d-flex justify-content-end"
          style={{ gap: "10px" }}
        >
          <a
            href="https://github.com/julianty"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={githubLogo} style={{ height: "20px" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/alexander-julian-ty-98614687/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={linkedInLogo} style={{ height: "20px" }} />
          </a>
        </Container>
      );
  }
}

export { SocialLinks, LOGOS };
