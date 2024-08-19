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
import manWorkingOutImage from "../images/man-working-out.jpeg";
const technologiesStyles = {
  withBorder: "true",
  //   padding: "md",
  p: "md",
};

export default function CorporeSanoPage() {
  return (
    <Stack>
      <Space h="xl" />
      <Flex direction={{ xs: "column-reverse", sm: "row" }} gap="lg">
        <Stack>
          <Flex direction={{ xs: "column", md: "row" }} gap="lg">
            <Title order={1}>Corpore Sano</Title>
            <Group wrap="nowrap">
              {["typescript", "react", "firebase"].map(
                (icon) => styledIcons[icon]
              )}
            </Group>
          </Flex>
          <Title order={3}>Summary</Title>
          <Text>
            A lightweight but feature rich workout tracker. Summarizes your
            workout history and presents users with data that can help guide
            their decisions.
          </Text>
          <Text>
            Key features: view weekly muscle stimulation, export data to CSV or
            JSON, create workout plans
          </Text>
          <Button
            component="a"
            w={"100px"}
            href="https://corpore-sano-2e626.web.app/"
          >
            Visit Site
          </Button>
        </Stack>
        <Image visibleFrom="sm" src={manWorkingOutImage} />
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
            <Text>Hosting, Database, Authentication</Text>
            <Center>{styledIcons.firebase}</Center>
          </Stack>
        </Paper>
      </Group>
    </Stack>
  );
}
