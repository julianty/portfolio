import { Button, Flex, Group, Image, Stack, Text, Title } from "@mantine/core";
import manWorkingOut from "../images/man-working-out.jpeg";
import { styledIcons } from "./StyledIcons";

export default function CorporeSanoProjectHighlight() {
  return (
    <Flex gap={"lg"} direction={{ sm: "row", xs: "column" }}>
      <Image
        style={{ borderRadius: 20 }}
        w={{ lg: "200px", md: "300px", sm: "200px" }}
        display={{ sm: "block", xs: "none" }}
        visibleFrom="sm"
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
          <Button component="a" href="https://corpore-sano-2e626.web.app/">
            Live Site
          </Button>
          <Button component="a" href="/projects/CorporeSano">
            Project Page
          </Button>
        </Group>
      </Stack>
    </Flex>
  );
}
