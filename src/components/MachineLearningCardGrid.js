import MLPaperThumbnail from "../images/MLPaperThumbnail.png";
import ProjectCard from "./ProjectCard";
import ProjectHighlightGeneric from "./ProjectHighlightGeneric";
import { LOGOS } from "./SocialLinks";
import { Group, Stack } from "@mantine/core";

const mlPaperInfo = {
  image: MLPaperThumbnail,
  title: "Research Paper",
  technologies: [],
  description: `
        An analysis of an intersection between Information Theory, Data
              Assimilation, and a particular method of training a neural
              network. Examines the possibility of determining a theoretically
              sufficient number of training examples to achieve a desired level
              of accuracy instead of an 'as much training data as possible'
              approach.`,
  keyFeatures: undefined,
  siteLink: "https://arxiv.org/abs/1902.05062",
  projectPage: "/",
};

export default function MachineLearningCardGrid() {
  return (
    <Stack align="flex-start">
      <ProjectHighlightGeneric info={mlPaperInfo} />
    </Stack>
  );
}
