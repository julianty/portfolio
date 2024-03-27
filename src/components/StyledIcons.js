import {
  IconBrandCss3,
  IconBrandFirebase,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMantine,
  IconBrandMongodb,
  IconBrandPython,
  IconBrandReact,
  IconBrandRedux,
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
      key={"html5"}
      style={{ ...iconStyles, color: "var(--mantine-color-orange-6)" }}
    />
  ),
  css: (
    <IconBrandCss3
      key={"css3"}
      style={{ ...iconStyles, color: "var(--mantine-color-blue-9)" }}
    />
  ),
  javascript: (
    <IconBrandJavascript
      key={"javascript"}
      style={{ ...iconStyles, color: "var(--mantine-color-yellow-3)" }}
    />
  ),
  typescript: (
    <IconBrandTypescript
      key={"typescript"}
      style={{ ...iconStyles, color: "var(--mantine-color-blue-5)" }}
    />
  ),
  python: (
    <IconBrandPython
      key={"python"}
      style={{ ...iconStyles, color: "var(--mantine-color-blue-8)" }}
    />
  ),
  react: (
    <IconBrandReact
      key={"react"}
      style={{ ...iconStyles, color: "var(--mantine-color-blue-3)" }}
    />
  ),
  firebase: (
    <IconBrandFirebase
      key={"firebase"}
      style={{ ...iconStyles, color: "var(--mantine-color-orange-4)" }}
    />
  ),
  mongodb: (
    <IconBrandMongodb
      key={"mongodb"}
      style={{ ...iconStyles, color: "var(--mantine-color-green-6)" }}
    />
  ),
  mantine: (
    <IconBrandMantine
      key={"mantine"}
      style={{ ...iconStyles, color: "var(--mantine-color-blue-filled" }}
    />
  ),
  redux: (
    <IconBrandRedux
      key={"redux"}
      style={{ ...iconStyles, color: "var(--mantine-color-violet-8" }}
    />
  ),
};
