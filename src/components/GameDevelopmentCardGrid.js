import chickenFeetThumbnail from "../images/chickenFeetThumbnail.png";
import { Group } from "@mantine/core";
import ProjectCard from "./ProjectCard";
import { LOGOS } from "./SocialLinks";

export default function GameDevelopmentCardGrid() {
  return (
    <Group align="flex-start">
      <ProjectCard
        title="Chicken Feet"
        text="My first attempt at developing a game in Unity as a part of the
               'USC Games Unlocked' Course"
        imgSrc={chickenFeetThumbnail}
        logo={LOGOS.GITHUB}
        href={"https://github.com/julianty/chicken-to-do"}
        tags={["GAMEDEV"]}
      />
    </Group>
  );
}
