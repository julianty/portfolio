import { Stack, Group, Image, Title, Space } from "@mantine/core";

import AboutMeCard from "../components/AboutMeCard";
import meInSuit from "../images/meInSuitSquare.jpg";
import { styledIcons } from "../components/StyledIcons";
import CorporeSanoProjectHighlight from "../components/CorporeSanoProjectHighlight";
import SentencePerDayProjectHighlight from "../components/SentencePerDayProjectHighlight";

const sectionStyles = {
  p: { lg: "lg" },
};
function Homepage() {
  return (
    <Stack m="md" gap="xl">
      <Space h="xl" />
      <Group my="xl" justify="center">
        <Image m="md" src={meInSuit} w={200} radius="md"></Image>
        <AboutMeCard />
      </Group>
      {/* Add some vertical space */}
      <Space h="xl" />
      <Group justify="space-between" style={sectionStyles}>
        <Stack>
          <Title order={2}>Skills</Title>
          <Group>
            {styledIcons.html}
            {styledIcons.css}
            {styledIcons.javascript}
            {styledIcons.typescript}
            {styledIcons.python}
          </Group>
        </Stack>
        <Stack>
          <Title order={2}>Frameworks</Title>
          <Group>
            {styledIcons.react}
            {styledIcons.firebase}
            {styledIcons.mongodb}
          </Group>
        </Stack>
      </Group>
      <Space h="xl" />
      <Group style={sectionStyles}>
        <Stack my="xl" gap="xl">
          <Title order={2}>Project Highlights</Title>
          <CorporeSanoProjectHighlight />
          <SentencePerDayProjectHighlight />
        </Stack>
      </Group>
    </Stack>
  );
}

export default Homepage;
