import ResumePhoto from "../images/meInSuitCropped.jpg";
import uniqid from "uniqid";
import {
  Container,
  Stack,
  Image,
  Center,
  Card,
  Group,
  Text,
  Anchor,
  Title,
  List,
  Space,
} from "@mantine/core";

function ExperienceFormat(props) {
  function subtitle() {
    return (
      <Group justify="space-between">
        <Text fs="italic">{props.subtitle}</Text>
        <Text>{props.company}</Text>
      </Group>
    );
  }
  function content() {
    if (props.text !== undefined) return <Text>{props.text}</Text>;
    if (props.list !== undefined) {
      return (
        <List spacing="sm" size="sm" center>
          {props.list.map((item) => {
            return <List.Item key={uniqid()}>{item}</List.Item>;
          })}
        </List>
      );
    }
    return;
  }
  return (
    <Card withBorder>
      <Group justify="space-between">
        <Text size="lg">{props.title}</Text>
        <Text>{props.dates}</Text>
      </Group>
      {subtitle()}
      <Space h="md" />
      {content()}
    </Card>
  );
}

function ResumePage() {
  return (
    <Container>
      <Stack>
        <Center>
          <Card withBorder>
            <Group gap="xl">
              <Image w="150px" src={ResumePhoto} />
              <div>
                <Title order={4}>Alexander Julian A. Ty</Title>
                <Anchor href="mailto:alexanderjulianty@gmail.com">
                  alexanderjulianty@gmail.com
                </Anchor>
                <Text>
                  (858) 281-3589 <br />
                  11694 Compass Point Dr. N. #166, <br />
                  San Diego, CA, 92126
                </Text>
              </div>
            </Group>
            <Anchor
              ml="auto"
              href="https://drive.google.com/file/d/1mfgaA4uw9m8Aq3JhR6XGwM4k4eu3MkUa/view?usp=sharing"
            >
              PDF version
            </Anchor>
          </Card>
        </Center>
        <Title order={3}>Purpose</Title>
        <Card withBorder>
          As I believe my strength lies in working others, I am in pursuit of a
          challenging work environment with opportunities to collaborate in
          groups, preferably with an emphasis on programming. Also, having
          opportunities for mentorship is important to me, being either or both
          a mentor and mentee.
        </Card>

        <Title order={3}>Education</Title>
        <ExperienceFormat
          title="University of California San Diego"
          dates="June 2015"
          text="B.S. in Engineering Physics: Semiconductor Physics"
        />
        <Title order={3}>Experience</Title>
        <ExperienceFormat
          title="Staff Research Associate"
          dates="June 2018 - June 2020"
          subtitle="Abarbanel Research Group"
          company="UC San Diego"
          list={[
            "Conducted research in the application of Data Assimilation principles to the field of Machine Learning. Specifically, investigated the ability of principles of Information Theory and Precision Annealing to train a Multi-layer Perceptron neural network to extrapolate a chaotic time series.",
            "Used Python, C, SSH (for the use of UCSD's CPU array)",
          ]}
        />
        <ExperienceFormat
          title="Office of Academic Support and Instructional Services"
          dates="September 2016 - June 2018"
          subtitle="Physics Subject Coordinator"
          company="UC San Diego"
          list={[
            "Conducted student workshops for lower division Physics and Mathematics in groups of 10-30 students in a classroom setting to supplement their studies.",
            "Managed and evaluates physics workshops, and provides assistance to student tutors in preparing and conducting their workshops.",
            "Assisted in planning, conducting, and assessing effectiveness of two of the office's programs by analyzing data from student evaluations.",
            "Used Python, R, Excel for presenting and analyzing data",
          ]}
        />
        <ExperienceFormat
          title="Underwater Optical Communication"
          dates="January 2015 - June 2015"
          subtitle="Engineering Group Design"
          company="UC San Diego, Northrop Grumman"
          list={[
            "As part of a team of four students, advanced a proof of concept optical communications MODEM",
            "The team developed a system to characterize the properties of light attenuation in water with the goal of achieving higher data rate transfer for underwater instruments.",
            "Explored a proof of concept for utilizing network media converters as a substitute for optical transceiver modules.",
          ]}
        />
        <Title order={3}>Technical Strengths</Title>

        <Card withBorder>
          <Group justify="space-between">
            <Text>Proficent In:</Text>
            <Text>
              C, Python, HTML, CSS, React, LaTeX, R, Microsoft Office Suite
            </Text>
          </Group>
          <Group justify="space-between">
            <Text>Working knowledge of:</Text>
            <Text>
              MATLAB, SolidWorks, LabVIEW, SQL, NodeJS, Octave, Javascript
            </Text>
          </Group>
        </Card>
      </Stack>
    </Container>
  );
}

export default ResumePage;
