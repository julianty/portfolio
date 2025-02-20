import { Badge } from "@/components/ui/badge";
import {
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandMongodb,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandTailwind,
  IconBrandBootstrap,
  IconBrandVite,
  IconBrandFirebase,
  IconBrandSupabase,
  IconBrandNextjs,
} from "@tabler/icons-react";
import PostgresqlSVG from "@/assets/PostgreSQL_logo.1.svg";
const iconMap: Record<string, React.ReactNode> = {
  JavaScript: <IconBrandJavascript />,
  TypeScript: <IconBrandTypescript />,
  React: <IconBrandReact />,
  "Node.js": <IconBrandNodejs />,
  Express: <strong>E</strong>,
  MongoDB: <IconBrandMongodb />,
  HTML: <IconBrandHtml5 />,
  CSS: <IconBrandCss3 />,
  Tailwind: <IconBrandTailwind />,
  Bootstrap: <IconBrandBootstrap />,
  "Material-UI": <>mui</>,
  Vite: <IconBrandVite />,
  Firebase: <IconBrandFirebase />,
  PostgreSQL: <img src={PostgresqlSVG} className="h-5"></img>,
  Supabase: <IconBrandSupabase />,
  "Next.js": <IconBrandNextjs />,
};

const skillMap: Record<string, string> = {
  JavaScript: "yellow",
  TypeScript: "#80ccff",
  React: "#80ccff",
  "Node.js": "#b3cccc",
  Express: "#b3cccc",
  MongoDB: "#59d465",
  HTML: "#ed537a",
  CSS: "#dd99ff",
  Tailwind: "#dd99ff",
  Bootstrap: " #dd99ff",
  "Material-UI": "#3b82f6",
  Vite: "#80ccff",
  Firebase: "#fb923c",
  PostgreSQL: "#59d465",
  Supabase: "#fb923c",
  "Next.js": "#3b82f6",
};

export default function SkillBadge({ skill }: { skill: string }) {
  if (!skillMap[skill]) {
    return <Badge>{skill}</Badge>;
  } else {
    return (
      <Badge
        style={{ backgroundColor: skillMap[skill] }}
        className="flex gap-1"
      >
        {iconMap[skill]}

        {skill}
      </Badge>
    );
  }
}
