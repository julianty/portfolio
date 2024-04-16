import { Group, Image, rem } from "@mantine/core";

import githubLogo from "../images/GitHub-Mark-120px-plus.png";
import linkedInLogo from "../images/LI-In-Bug.png";
import arxivLogo from "../images/arxiv-logomark-small.svg";
import webIcon from "../images/icons8-web-100.png";

import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
const LOGOS = {
  GITHUB: "github",
  LINKEDIN: "linkedin",
  ARXIV: "arxiv",
  WEB: "web",
};

const iconStyles = {
  width: rem(25),
  height: rem(25),
};

function SocialLinks(props) {
  switch (props.logo) {
    case LOGOS.GITHUB:
      return (
        <a href={props.href} target="_blank" rel="noreferrer">
          {/* <Image src={githubLogo} style={{ height: "20px" }} /> */}
          <IconBrandGithub style={{ ...iconStyles }} />
        </a>
      );

    case LOGOS.LINKEDIN:
      return (
        <a
          href="https://www.linkedin.com/in/alexander-julian-ty-98614687/"
          target="_blank"
          rel="noreferrer"
        >
          {/* <Image src={linkedInLogo} style={{ height: "20px" }} /> */}
          <IconBrandLinkedin />
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
    case LOGOS.WEB:
      return (
        <a href={props.href} target="_blank" rel="noreferrer">
          <Image src={webIcon} style={{ height: "20px" }} />
        </a>
      );

    default:
      return (
        <Group className="d-flex justify-content-end" style={{ gap: "10px" }}>
          <a
            href="https://github.com/julianty"
            target="_blank"
            rel="noreferrer"
          >
            {/* <Image src={githubLogo} style={{ height: "20px" }} /> */}
            <IconBrandGithub style={{ ...iconStyles, color: "white" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/alexander-julian-ty-98614687/"
            target="_blank"
            rel="noreferrer"
          >
            <IconBrandLinkedin
              style={{ ...iconStyles, color: "var(--mantine-color-blue-6)" }}
            />
          </a>
        </Group>
      );
  }
}

export { SocialLinks, LOGOS };
