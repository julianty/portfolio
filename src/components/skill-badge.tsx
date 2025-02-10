import { Badge } from "./ui/badge";

const skillMap: Record<string, string> = {
  JavaScript: "yellow",
  TypeScript: "#3b82f6",
  React: "#3b82f6",
  "Node.js": "green",
  Express: "green",
  MongoDB: "green",
  HTML: "red",
  CSS: "#3b82f6",
  Tailwind: "#3b82f6",
  Bootstrap: "purple",
  "Material-UI": "#3b82f6",
  Vite: "#3b82f6",
  Firebase: "#fb923c",
};

export default function SkillBadge({ skill }: { skill: string }) {
  if (!skillMap[skill]) {
    return <Badge>{skill}</Badge>;
  } else {
    return <Badge style={{ backgroundColor: skillMap[skill] }}>{skill}</Badge>;
  }
}
