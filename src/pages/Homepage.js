import { Stack, Group, Grid, Image, Title, Center, rem } from "@mantine/core";

import AboutMeCard from "../components/AboutMeCard";
import ProjectHighlight from "../components/ProjectHighlight";

import meInSuit from "../images/meInSuitSquare.jpg";
import toDoThumbnail from "../images/toDoProjectThumbnail.png";
import workoutTrackerThumbnail from "../images/workoutTrackerThumbnail.png";
import {
  IconBrandReact,
  IconBrandFirebase,
  IconBrandMongodb,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandPython,
} from "@tabler/icons-react";

const iconStyles = {
  width: rem(50),
  height: rem(50),
};

function Homepage() {
  return (
    <Stack m="md">
      <Group justify="center">
        <Image m="md" src={meInSuit} w={200} radius="md"></Image>
        <AboutMeCard />
      </Group>
      <Group justify="space-between" p={{ lg: "lg" }}>
        <Stack>
          <Title order={2}>Skills</Title>
          <Group>
            <IconBrandHtml5 style={iconStyles} />
            <IconBrandCss3 style={iconStyles} />
            <IconBrandJavascript style={iconStyles} />
            <IconBrandTypescript style={iconStyles} />
            <IconBrandPython style={iconStyles} />
          </Group>
        </Stack>
        <Stack>
          <Title order={2}>Frameworks</Title>
          <Group>
            <IconBrandReact style={iconStyles} />
            <IconBrandFirebase style={iconStyles} />
            <IconBrandMongodb style={iconStyles} />
          </Group>
        </Stack>
      </Group>
      {/* <Stack px="13%">
        <Title order={2}>Project Highlights</Title>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <ProjectHighlight
              title={"To Do Web Application"}
              tags={["REACT", "FIREBASE"]}
              description={
                "A work in progress for improving my productivity, this web application is built with React. This project is hosted on and utilizes cloud storage via Google Firebase."
              }
              imageSrc={toDoThumbnail}
              imageHref={"https://chicken-tasks.firebaseapp.com/"}
              socialLinks={{
                github: "https://github.com/julianty/chicken-to-do",
                web: "https://chicken-tasks.firebaseapp.com/",
              }}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <ProjectHighlight
              title={"Workout Tracker"}
              tags={["REACT", "FIREBASE"]}
              description={
                "A simple workout tracker project built with react and utilizing Redux for state management. Hosted and utilizes storage on google Firebase."
              }
              imageSrc={workoutTrackerThumbnail}
              imageHref={"https://workout-tracker-2d69d.firebaseapp.com/"}
              socialLinks={{
                github: "https://github.com/julianty/workout-tracker",
                web: "https://workout-tracker-2d69d.firebaseapp.com/",
              }}
            />
          </Grid.Col>
        </Grid>
      </Stack> */}
    </Stack>
  );
}

export default Homepage;
