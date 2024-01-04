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
    <Paper p="lg" shadow="xs" withBorder radius="lg">
      <Group justify="space-between">
        <Title order={3}>{title}</Title>
        <Group>
          {tags.map((tagName) => {
            return <ProjectTag tagLabel={tagName} key={uniqid()} />;
          })}
          {Object.keys(socialLinks).map((logoName) => (
            <SocialLinks logo={logoName} key={uniqid()} />
          ))}
        </Group>
      </Group>
      <Divider my="sm" />
      <Group align="flex-start" grow>
        <Text w="50%">{description}</Text>
        <Anchor href={imageHref} target="_blank">
          <Image src={imageSrc}></Image>
        </Anchor>
      </Group>
    </Paper>
  );
}
