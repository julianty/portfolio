import { Group } from "@mantine/core";
import { LOGOS } from "./SocialLinks";
import ProjectCard from "./ProjectCard";

import chickenToDoThumbnail from "../images/chickenToDoThumbnail.png";
import workoutTrackerThumbnail from "../images/workoutTrackerThumbnail.png";
import sentencePerDayThumbnail from "../images/sentencePerDayThumbnail.png";
export default function WebDevelopmentCardGrid() {
  return (
    <Group align="flex-start">
      <ProjectCard
        title="Chicken To Do"
        text="Made with React and using Firebase from google
              as a BaaS, it is an attempt at emulating task trackers such as
              Milanote and Asana. Currently a work in progress"
        imgSrc={chickenToDoThumbnail}
        logo={LOGOS.GITHUB}
        href="https://github.com/julianty/chicken-to-do"
        tags={["REACT", "FIREBASE"]}
      />
      <ProjectCard
        title="Workout Tracker"
        text="Made with React and using Firebase from google
              as a BaaS, I intend to use it as a replacement for workout tracking apps"
        imgSrc={workoutTrackerThumbnail}
        logo={LOGOS.WEB}
        href="https://workout-tracker-2d69d.web.app/"
        tags={["REACT", "FIREBASE"]}
      />
      <ProjectCard
        title="Sentence Per Day"
        text="Learning a new language has been on my to-do list for a long time, and this application is meant to build a habit of translating a single sentence each day from the target language to English."
        imgSrc={sentencePerDayThumbnail}
        logo={LOGOS.GITHUB}
        href="https://github.com/julianty/sentence-per-day"
        tags={["REACT", "FIREBASE"]}
      />
    </Group>
  );
}
