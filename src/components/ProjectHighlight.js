import ProjectTag from "./ProjectTag";
import { SocialLinks } from "./SocialLinks";
import uniqid from "uniqid";

import {
  Paper,
  Group,
  Title,
  Text,
  Image,
  Divider,
  Anchor,
  AspectRatio,
  Box,
  Spoiler,
} from "@mantine/core";

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
    <Paper p="lg" radius="lg">
      <Paper bg={"grey"} radius="lg" p="sm">
        <Image h="300px" src={imageSrc} fit="contain"></Image>
      </Paper>
      <Group justify="space-between">
        <Anchor href={imageHref} target="_blank">
          <Title order={3}>{title}</Title>
        </Anchor>
        <Group>
          {tags.map((tagName) => {
            return <ProjectTag tagLabel={tagName} key={uniqid()} />;
          })}
          {Object.keys(socialLinks).map((logoName) => (
            <SocialLinks
              logo={logoName}
              key={uniqid()}
              href={socialLinks[logoName]}
            />
          ))}
        </Group>
      </Group>
      <Group align="flex-start" grow>
        <Spoiler maxHeight={50} showLabel="Show more" hideLabel="Hide">
          <Text w="100%">{description}</Text>
        </Spoiler>
      </Group>
    </Paper>
  );
}
