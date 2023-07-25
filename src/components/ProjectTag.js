import { Badge } from "react-bootstrap";

const TagLabels = {
  REACT: {
    text: "React",
    color: "primary",
  },
  JAVASCRIPT: {
    text: "Javascript",
    color: "primary",
  },
  FIREBASE: {
    text: "Firebase",
    color: "success",
  },
  ML: {
    text: "Machine Learning",
    color: "danger",
  },
  ARTICLE: {
    text: "Article",
    color: "secondary",
  },
  GAMEDEV: {
    text: "Game Development",
    color: "warning",
  },
};

export default function ProjectTag({ tagLabel }) {
  // Accepts a single string as the tag name and returns a JSX Badge element
  // with the appropriate text and color
  const { text, color } = TagLabels[tagLabel];
  return (
    <Badge pill bg={color}>
      {text}
    </Badge>
  );
}
