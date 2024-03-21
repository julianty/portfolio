// import Card from "react-bootstrap/Card";
import { Text, Paper, Anchor, Title, Center, Group } from "@mantine/core";
import { SocialLinks, LOGOS } from "./SocialLinks";

function AboutMeCard() {
  return (
    <Paper m="md" p="lg">
      <Title order={2}>Alexander Julian Ty</Title>
      <Text fw={500}> Full-stack Developer, Product Designer</Text>
      {/* <Text>Based in San Diego, California</Text> */}
      <Text c={"gray"} size="sm">
        Hi, I'm Julian. I love making things and sharing with the world. If you
        do too, then let's talk
      </Text>
      <Group justify="space-between">
        <Anchor href="mailto:alexanderjulianty@gmail.com">
          Send me an email
        </Anchor>
        <SocialLinks />
      </Group>
    </Paper>
  );
}

export default AboutMeCard;
