import { Stack } from "@mantine/core";

import sentencePerDayThumbnail from "../images/sentencePerDayThumbnail.png";
import ProjectHighlightGeneric from "./ProjectHighlightGeneric";
import corporeSanoImg from "../images/man-working-out.jpeg";

const corporeSanoInfo = {
  image: corporeSanoImg,
  title: "Corpore Sano",
  technologies: ["firebase", "typescript", "react"],
  description: `
          A lightweight but feature rich workout tracker. Summarizes your
          workout history and presents users with data that can help guide their
          decisions.
         `,
  keyFeatures: `
          Key features: view weekly muscle stimulation, export data to CSV or
          JSON, create workout plans
  `,
  liveSite: "https://corpore-sano-2e626.web.app/",
  projectPage: "/projects/CorporeSano",
};

const sentencePerDayInfo = {
  image: sentencePerDayThumbnail,
  title: "Sentence Per Day",
  technologies: ["typescript", "mongodb"],
  description:
    "Learning a new language has been on my to-do list for a long time, and this application is meant to build a habit of translating a single sentence each day from the target language to English.",
  keyFeatures: "Notificiations",
  liveSite: "/",
  projectPage: "/",
};

export default function WebDevelopmentCardGrid() {
  return (
    <Stack align="flex-start">
      <ProjectHighlightGeneric info={corporeSanoInfo} />
      <ProjectHighlightGeneric info={sentencePerDayInfo} />
    </Stack>
  );
}
