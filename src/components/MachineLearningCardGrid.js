import MLPaperThumbnail from "../images/MLPaperThumbnail.png";
import ProjectCard from "./ProjectCard";
import { LOGOS } from "./SocialLinks";
import { Group } from "@mantine/core";
export default function MachineLearningCardGrid() {
  return (
    <Group align="flex-start">
      <ProjectCard
        title="Research Paper"
        text="An analysis of an intersection between Information Theory, Data
              Assimilation, and a particular method of training a neural
              network. Examines the possibility of determining a theoretically
              sufficient number of training examples to achieve a desired level
              of accuracy instead of an 'as much training data as possible'
              approach."
        imgSrc={MLPaperThumbnail}
        logo={LOGOS.ARXIV}
        href={"/"}
        tags={["ML", "ARTICLE"]}
      />
    </Group>
  );
}
