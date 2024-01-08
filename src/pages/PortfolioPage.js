import { Paper, Stack, Title, Text } from "@mantine/core";

import WebDevelopmentCardGrid from "../components/WebDevelopmentCardGrid";
import MachineLearningCardGrid from "../components/MachineLearningCardGrid";
import GameDevelopmentCardGrid from "../components/GameDevelopmentCardGrid";

function PortfolioPage() {
  return (
    <Stack px={{ md: "10%", sm: "0" }} gap="md">
      <Title order={1}>Projects</Title>
      <Title order={2}>Web Development</Title>
      <WebDevelopmentCardGrid />
      <Title order={2}>Machine Learning</Title>
      <MachineLearningCardGrid />
      <Title order={2}>Game Development</Title>
      <GameDevelopmentCardGrid />
      <Paper shadow="sm">
        <Title order={2}>Contact Me</Title>
        <Text>
          Please get in touch if you think our work could be mutually beneficial
        </Text>
        <Text>alexanderjulianty@gmail.com</Text>
      </Paper>
    </Stack>
  );
}

export default PortfolioPage;
