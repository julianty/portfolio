import { Stack, Group, Grid, Image, Title } from "@mantine/core";

import AboutMeCard from "../components/AboutMeCard";
import ProjectHighlight from "../components/ProjectHighlight";

import meInSuit from "../images/meInSuitSquare.jpg";
import toDoThumbnail from "../images/toDoProjectThumbnail.png";
import workoutTrackerThumbnail from "../images/workoutTrackerThumbnail.png";

function Homepage() {
  return (
    <Stack mt="xl">
      <Group justify="center" my="xl">
        <Image src={meInSuit} w={200} radius="md"></Image>
        <AboutMeCard />
      </Group>

      <Stack px="13%">
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
      </Stack>
    </Stack>
  );
}

export default Homepage;
