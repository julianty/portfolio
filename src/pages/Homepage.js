import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";

import AboutMeCard from "../components/AboutMeCard";
import ProjectTag from "../components/ProjectTag";
import ProjectHighlight from "../components/ProjectHighlight";
import { SocialLinks, LOGOS } from "../components/SocialLinks";

import meInSuit from "../images/meInSuitSquare.jpg";
import toDoThumbnail from "../images/toDoProjectThumbnail.png";
import workoutTrackerThumbnail from "../images/workoutTrackerThumbnail.png";
function Homepage() {
  return (
    <Container>
      <Container className="p-3 my-3">
        <Row className="justify-content-center align-items-center">
          <Col className="col-3 px-0 shadow">
            <Image src={meInSuit} fluid></Image>
          </Col>
          <Col className="col-5 px-0 shadow">
            <AboutMeCard />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-center">
          <h2>Project Highlights</h2>
        </Row>
        <ProjectHighlight
          title={"To Do Web Application"}
          tags={["REACT", "FIREBASE"]}
          description={
            "A work in progress for improving my productivity, this web application is built with React. This project is hosted on and utilizes cloud storage via Google Firebase."
          }
          imageSrc={toDoThumbnail}
          imageHref={"https://chicken-tasks.firebaseapp.com/"}
          socialLinks={{
            github: "https://github.com/julianty/chicken-to-do",
            web: "https://chicken-tasks.firebaseapp.com/",
          }}
        />
        <ProjectHighlight
          title={"Workout Tracker"}
          tags={["REACT", "FIREBASE"]}
          description={
            "A simple workout tracker project built with react and utilizing Redux for state management. Hosted and utilizes storage on google Firebase."
          }
          imageSrc={workoutTrackerThumbnail}
          imageHref={"https://workout-tracker-2d69d.firebaseapp.com/"}
          socialLinks={{
            github: "https://github.com/julianty/workout-tracker",
            web: "https://workout-tracker-2d69d.firebaseapp.com/",
          }}
        />
        <ProjectHighlight
          title={"Sentence Per Day"}
          tags={["REACT", "MONGOOSE"]}
          description={
            "Learning a new language has been on my to-do list for a long time, and this application is meant to build a habit of translating a single sentence each day from the target language to English."
          }
          // imageSrc={toDoThumbnail}
          imageHref={"https://chicken-tasks.firebaseapp.com/"}
          socialLinks={{
            github: "https://github.com/julianty/chicken-to-do",
            web: "https://chicken-tasks.firebaseapp.com/",
          }}
        />
      </Container>
    </Container>
  );
}

export default Homepage;
