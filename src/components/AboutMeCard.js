// import Card from "react-bootstrap/Card";
import { Text, Paper, Anchor, Title, Group } from "@mantine/core";
import { SocialLinks } from "./SocialLinks";

function AboutMeCard() {
  return (
    <Paper m="md" p="lg">
      <Group justify="space-between" align="end">
        <Title order={2}>Alexander Julian Ty</Title>
        <SocialLinks />
      </Group>
      <Text fw={500}> Full-stack Developer, Product Designer</Text>
      {/* <Text>Based in San Diego, California</Text> */}
      <Text c={"gray"} size="sm">
        Hi, I'm Julian. I love making things and sharing with the world. If you
        do too, then let's talk
      </Text>
      <Anchor href="mailto:alexanderjulianty@gmail.com">
        Send me an email
      </Anchor>
    </Paper>
  );
}

export default AboutMeCard;
