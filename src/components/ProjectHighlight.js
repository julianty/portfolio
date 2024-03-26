import { Button, Flex, Group, Image, Stack, Text, Title } from "@mantine/core";
import manWorkingOut from "../images/man-working-out.jpeg";
import { styledIcons } from "./StyledIcons";

export default function ProjectHighlight() {
  return (
    <Flex gap={"lg"} direction={{ sm: "row", xs: "column" }}>
      <Image
        style={{ borderRadius: 20 }}
        w={{ lg: "200px", md: "300px", sm: "200px" }}
        display={{ sm: "block", xs: "none" }}
        src={manWorkingOut}
      ></Image>
      <Stack justify="flex-start">
        <Group wrap="nowrap">
          <Title order={2}>Corpore Sano</Title>
          {styledIcons.firebase}
          {styledIcons.react}
        </Group>
        <Text>
          A lightweight but feature rich workout tracker. Summarizes your
          workout history and presents users with data that can help guide their
          decisions.
        </Text>
        <Text>
          Key features: view weekly muscle stimulation, export data to CSV or
          JSON, create workout plans
        </Text>
        <Group>
          <Button>Live Site</Button>
          <Button>Project Page</Button>
        </Group>
      </Stack>
    </Flex>
  );
}
