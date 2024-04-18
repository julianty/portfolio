import { Button, Flex, Group, Image, Stack, Text, Title } from "@mantine/core";
import { styledIcons } from "./StyledIcons";

// interface info {
//   image: any;
//   title: String;
//   technologies: Array<String>;
//   description: String;
//   keyFeatures: String;
//   siteLink: String;
//   projectPage: String;
// }

export default function ProjectHighlightGeneric({ info }) {
  return (
    <Flex gap={"lg"} direction={{ sm: "row", xs: "column" }}>
      <Image
        style={{ borderRadius: 20 }}
        w={{ lg: "200px", md: "300px", sm: "200px" }}
        display={{ sm: "block", xs: "none" }}
        src={info.image}
      ></Image>
      <Stack justify="flex-start">
        <Group wrap="nowrap">
          <Title order={2}>{info.title}</Title>
          {info.technologies.map((tech) => styledIcons[tech])}
        </Group>
        <Text>{info.description}</Text>
        <Text>{info.keyFeatures}</Text>
        <Group>
          <Button component="a" href={info.siteLink}>
            Live Site
          </Button>
          <Button component="a" href={info.projectPage}>
            Project Page
          </Button>
        </Group>
      </Stack>
    </Flex>
  );
}
