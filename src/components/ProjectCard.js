import { Card, Text, Image, Title, Group } from "@mantine/core";
import { SocialLinks } from "./SocialLinks";
import ProjectTag from "./ProjectTag";
import uniqid from "uniqid";

export default function ProjectCard({
  title,
  logo,
  href,
  imgSrc,
  text,
  tags = [],
}) {
  if (typeof tags == "string") {
    // Convert tag into an array in order to properly map
    tags = [tags];
  }
  // const onMouseEnter = (e) => {
  //   e.currentTarget.classList.add("shadow");
  // };
  // const onMouseLeave = (e) => {
  //   e.currentTarget.classList.remove("shadow");
  // };
  const clickHandler = (e) => {
    if (href === undefined) return;
    window.open(href, "_blank");
  };
  return (
    <Card
      shadow="sm"
      p="lg"
      w={{ md: "32%" }}
      withBorder
      onClick={clickHandler}
      style={{ cursor: "pointer" }}
    >
      <Card.Section>
        <Image height={200} src={imgSrc} />
      </Card.Section>
      <Title order={4}>{title}</Title>
      <Text>{text}</Text>
      <Group justify="space-between">
        <div>
          {tags.map((tagLabel) => (
            <ProjectTag key={uniqid()} tagLabel={tagLabel} />
          ))}
        </div>
        <SocialLinks logo={logo} />
      </Group>
    </Card>
  );
}
