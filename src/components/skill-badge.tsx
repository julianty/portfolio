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
  IconBrandPython,
  IconBrandVercel,
  IconBrandPrisma,
  IconApi,
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
  Python: <IconBrandPython />,
  Vercel: <IconBrandVercel />,
  Prisma: <IconBrandPrisma />,
  RESTful: <IconApi />,
};

const colors: Record<string, string> = {
  backendDeployment: "#b3cccc",
  uiFrameworks: "#dd99ff",
  lightBlue: "#80ccff",
  orange: "#fb923c",
};

const skillMap: Record<string, string> = {
  JavaScript: "yellow",
  TypeScript: colors.lightBlue,
  React: colors.lightBlue,
  "Node.js": colors.backendDeployment,
  Express: colors.backendDeployment,
  MongoDB: "#59d465",
  HTML: "#ed537a",
  CSS: colors.uiFrameworks,
  Tailwind: colors.uiFrameworks,
  Bootstrap: colors.uiFrameworks,
  "Material-UI": "#3b82f6",
  Vite: "#80ccff",
  Firebase: colors.orange,
  PostgreSQL: "#59d465",
  Supabase: colors.orange,
  "Next.js": "#3b82f6",
  Python: "#72b7fd",
  Vercel: colors.backendDeployment,
  Prisma: colors.backendDeployment,
  RESTful: colors.backendDeployment,
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
