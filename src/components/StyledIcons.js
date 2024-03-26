import {
  IconBrandCss3,
  IconBrandFirebase,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandPython,
  IconBrandReact,
  IconBrandTypescript,
  icons,
} from "@tabler/icons-react";
import { rem } from "@mantine/core";
const iconStyles = {
  width: rem(50),
  height: rem(50),
  color: "var(--mantine-color-dark-2)",
};

export const styledIcons = {
  html: (
    <IconBrandHtml5
      style={{ ...iconStyles, color: "var(--mantine-color-orange-6)" }}
    />
  ),
  css: (
    <IconBrandCss3
      style={{ ...iconStyles, color: "var(--mantine-color-blue-9)" }}
    />
  ),
  javascript: (
    <IconBrandJavascript
      style={{ ...iconStyles, color: "var(--mantine-color-yellow-3)" }}
    />
  ),
  typescript: (
    <IconBrandTypescript
      style={{ ...iconStyles, color: "var(--mantine-color-blue-5)" }}
    />
  ),
  python: (
    <IconBrandPython
      style={{ ...iconStyles, color: "var(--mantine-color-blue-8)" }}
    />
  ),
  react: (
    <IconBrandReact
      style={{ ...iconStyles, color: "var(--mantine-color-blue-3)" }}
    />
  ),
  firebase: (
    <IconBrandFirebase
      style={{ ...iconStyles, color: "var(--mantine-color-orange-4)" }}
    />
  ),
  mongodb: (
    <IconBrandMongodb
      style={{ ...iconStyles, color: "var(--mantine-color-green-6)" }}
    />
  ),
};
