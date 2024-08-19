import {
  Button,
  Center,
  Group,
  Flex,
  Image,
  Paper,
  Stack,
  Text,
  Title,
  Space,
} from "@mantine/core";
import { styledIcons } from "../components/StyledIcons";

import womanDiary from "../images/woman-writing-in-diary.jpg";
const technologiesStyles = {
  withBorder: "true",
  //   padding: "md",
  p: "md",
};

export default function SentencePerDayPage() {
  return (
    <Stack>
      <Space h="xl" />
      <Flex direction={{ xs: "column-reverse", sm: "row" }} gap="lg">
        <Stack>
          <Flex direction={{ xs: "column", md: "row" }} gap="lg">
            <Title order={1}>Sentence Per Day</Title>
            <Group wrap="nowrap">
              {["typescript", "react", "mongodb"].map(
                (icon) => styledIcons[icon]
              )}
            </Group>
          </Flex>
          <Title order={3}>Summary</Title>
          <Text>
            A full-stack project with a React frontend and Express server
            backend utilizing MongoDB as a database
          </Text>
          <Text>Key features: Daily Sentence Diary, Social Networking</Text>
          <Button component="a" w={"100px"} href="/">
            Visit Site
          </Button>
        </Stack>
        <Image visibleFrom="sm" h={"250px"} src={womanDiary} />
      </Flex>
      <Title order={3}>Technologies</Title>
      <Group>
        <Paper {...technologiesStyles}>
          <Stack>
            <Title order={4}>Front-End</Title>
            <Group>
              <Stack>
                <Text>UI Libraries</Text>
                <Center>{styledIcons.mantine}</Center>
              </Stack>
              <Stack>
                <Text>State Management</Text>
                <Center>{styledIcons.redux}</Center>
              </Stack>
            </Group>
          </Stack>
        </Paper>
        <Paper {...technologiesStyles}>
          <Stack>
            <Title order={4}>Back-End</Title>
            <Group>
              <Stack>
                <Text>Hosting</Text>
                <Center>{styledIcons.googleAppEngine}</Center>
              </Stack>
              <Stack>
                <Text>Database</Text>
                <Center>{styledIcons.mongodb}</Center>
              </Stack>
            </Group>
          </Stack>
        </Paper>
      </Group>
    </Stack>
  );
}
