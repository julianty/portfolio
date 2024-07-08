import { Button, Flex, Group, Image, Stack, Text, Title } from "@mantine/core";
import womanDiary from "../images/woman-writing-in-diary.jpg";
import { styledIcons } from "./StyledIcons";

export default function SentencePerDayProjectHighlight() {
  return (
    <Flex gap={"lg"} direction={{ sm: "row", xs: "column" }}>
      <Image
        style={{ borderRadius: 20 }}
        w={{ lg: "200px", md: "300px", sm: "200px" }}
        display={{ sm: "block", xs: "none" }}
        visibleFrom="sm"
        src={womanDiary}
      ></Image>
      <Stack justify="flex-start">
        <Group wrap="nowrap">
          <Title order={2}>Sentence Per Day</Title>
          {styledIcons.react}
          {styledIcons.mongodb}
        </Group>
        <Text>
          A language-learning app wherein users write a sentence describing
          their day in their target language. It is a full-stack project with a
          React frontend and Express server backend utilizing MongoDB as a
          database
        </Text>
        <Text>Key features: Daily Sentence Diary, Social Networking</Text>
        <Group>
          <Button component="a" href="/">
            Live Site
          </Button>
          <Button component="a" href="/projects/SentencePerDay">
            Project Page
          </Button>
        </Group>
      </Stack>
    </Flex>
  );
}
