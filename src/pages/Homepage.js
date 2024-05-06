import { Stack, Group, Image, Title } from "@mantine/core";

import AboutMeCard from "../components/AboutMeCard";
import meInSuit from "../images/meInSuitSquare.jpg";
import { styledIcons } from "../components/StyledIcons";
import CorporeSanoProjectHighlight from "../components/CorporeSanoProjectHighlight";
import SentencePerDayProjectHighlight from "../components/SentencePerDayProjectHighlight";

const sectionStyles = {
  p: { lg: "lg" },
};
function Homepage() {
  console.log(styledIcons);
  return (
    <Stack m="md" gap="xl">
      <Group my="xl" justify="center">
        <Image m="md" src={meInSuit} w={200} radius="md"></Image>
        <AboutMeCard />
      </Group>
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
      <Group style={sectionStyles}>
        <Stack>
          <Title order={2}>Project Highlights</Title>
          <CorporeSanoProjectHighlight />
          <SentencePerDayProjectHighlight />
        </Stack>
      </Group>
    </Stack>
  );
}

export default Homepage;
