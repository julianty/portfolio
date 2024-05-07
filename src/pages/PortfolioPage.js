import { Stack, Title } from "@mantine/core";

import WebDevelopmentCardGrid from "../components/WebDevelopmentCardGrid";
import MachineLearningCardGrid from "../components/MachineLearningCardGrid";
import GameDevelopmentCardGrid from "../components/GameDevelopmentCardGrid";

function PortfolioPage() {
  return (
    <Stack px={{ md: "10%", sm: "0" }} gap="xl">
      <Title order={1}>Projects</Title>
      <Title order={2}>Web Development</Title>
      <WebDevelopmentCardGrid />
      <Title order={2}>Machine Learning</Title>
      <MachineLearningCardGrid />
      <Title order={2}>Game Development</Title>
      <GameDevelopmentCardGrid />
    </Stack>
  );
}

export default PortfolioPage;
