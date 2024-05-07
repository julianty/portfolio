import chickenFeetThumbnail from "../images/chickenFeetThumbnail.png";
import { Stack } from "@mantine/core";
import ProjectHighlightGeneric from "./ProjectHighlightGeneric";

const chickenFeetInfo = {
  image: chickenFeetThumbnail,
  title: "Chicken Feet",
  technologies: [],
  description: `My first attempt at developing a game in Unity as a part of the
               'USC Games Unlocked' Course`,
  keyFeatures: null,
  siteLink: "/",
  projectPage: "/",
};

export default function GameDevelopmentCardGrid() {
  return (
    <Stack align="flex-start">
      <ProjectHighlightGeneric info={chickenFeetInfo} />
    </Stack>
  );
}
