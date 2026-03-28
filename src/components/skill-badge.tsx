import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
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
  JavaScript: <IconBrandJavascript size={14} />,
  TypeScript: <IconBrandTypescript size={14} />,
  React: <IconBrandReact size={14} />,
  "Node.js": <IconBrandNodejs size={14} />,
  Express: <span className="text-[10px] font-semibold">EX</span>,
  MongoDB: <IconBrandMongodb size={14} />,
  HTML: <IconBrandHtml5 size={14} />,
  CSS: <IconBrandCss3 size={14} />,
  Tailwind: <IconBrandTailwind size={14} />,
  Bootstrap: <IconBrandBootstrap size={14} />,
  "Material-UI": <span className="text-[10px] font-semibold">MUI</span>,
  Vite: <IconBrandVite size={14} />,
  Firebase: <IconBrandFirebase size={14} />,
  PostgreSQL: (
    <img src={PostgresqlSVG} className="h-3.5 w-3.5 object-contain" />
  ),
  Supabase: <IconBrandSupabase size={14} />,
  "Next.js": <IconBrandNextjs size={14} />,
  Python: <IconBrandPython size={14} />,
  Vercel: <IconBrandVercel size={14} />,
  Prisma: <IconBrandPrisma size={14} />,
  RESTful: <IconApi size={14} />,
};

const toneMap: Record<string, string> = {
  JavaScript:
    "border-amber-500/35 bg-amber-500/10 text-amber-800 dark:text-amber-200",
  TypeScript: "border-sky-500/35 bg-sky-500/10 text-sky-800 dark:text-sky-200",
  React: "border-cyan-500/35 bg-cyan-500/10 text-cyan-800 dark:text-cyan-200",
  "Node.js":
    "border-emerald-500/35 bg-emerald-500/10 text-emerald-800 dark:text-emerald-200",
  Express: "border-zinc-500/35 bg-zinc-500/10 text-zinc-800 dark:text-zinc-200",
  MongoDB:
    "border-green-500/35 bg-green-500/10 text-green-800 dark:text-green-200",
  HTML: "border-rose-500/35 bg-rose-500/10 text-rose-800 dark:text-rose-200",
  CSS: "border-indigo-500/35 bg-indigo-500/10 text-indigo-800 dark:text-indigo-200",
  Tailwind:
    "border-teal-500/35 bg-teal-500/10 text-teal-800 dark:text-teal-200",
  Bootstrap:
    "border-violet-500/35 bg-violet-500/10 text-violet-800 dark:text-violet-200",
  "Material-UI":
    "border-blue-500/35 bg-blue-500/10 text-blue-800 dark:text-blue-200",
  Vite: "border-purple-500/35 bg-purple-500/10 text-purple-800 dark:text-purple-200",
  Firebase:
    "border-orange-500/35 bg-orange-500/10 text-orange-800 dark:text-orange-200",
  PostgreSQL:
    "border-blue-500/35 bg-blue-500/10 text-blue-800 dark:text-blue-200",
  Supabase:
    "border-emerald-500/35 bg-emerald-500/10 text-emerald-800 dark:text-emerald-200",
  "Next.js":
    "border-slate-500/35 bg-slate-500/10 text-slate-800 dark:text-slate-200",
  Python: "border-sky-500/35 bg-sky-500/10 text-sky-800 dark:text-sky-200",
  Vercel: "border-zinc-500/35 bg-zinc-500/10 text-zinc-800 dark:text-zinc-200",
  Prisma:
    "border-fuchsia-500/35 bg-fuchsia-500/10 text-fuchsia-800 dark:text-fuchsia-200",
  RESTful:
    "border-neutral-500/35 bg-neutral-500/10 text-neutral-800 dark:text-neutral-200",
};

export default function SkillBadge({ skill }: { skill: string }) {
  const toneClass = toneMap[skill]
    ? toneMap[skill]
    : "border-border/70 bg-muted/30 text-foreground";

  return (
    <Badge
      variant="outline"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[0.72rem] font-medium tracking-[0.01em] shadow-sm",
        toneClass,
      )}
    >
      {iconMap[skill] && (
        <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-background/70 text-current">
          {iconMap[skill]}
        </span>
      )}
      <span>{skill}</span>
    </Badge>
  );
}
