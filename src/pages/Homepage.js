import { Stack, Group, Image, Title } from "@mantine/core";

import AboutMeCard from "../components/AboutMeCard";
import ProjectHighlight from "../components/ProjectHighlight";
import meInSuit from "../images/meInSuitSquare.jpg";
import { styledIcons } from "../components/StyledIcons";

const sectionStyles = {
  p: { lg: "lg" },
};
function Homepage() {
  return (
    <Stack m="md">
      <Group justify="center">
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
          <ProjectHighlight />
        </Stack>
      </Group>
    </Stack>
  );
}

export default Homepage;
