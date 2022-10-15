import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import chickenFeetThumbnail from './images/chickenFeetThumbnail.png';
import chickenToDoThumbnail from './images/chickenToDoThumbnail.png';
function ProjectsCardGrid() {
  return (
    <Container className="mx-auto">
      <Row>
        <h2>Projects/Work</h2>
      </Row>
      <Row>
        <Col className="col-3">
          <Card className="shadow">
            <Card.Img src={chickenFeetThumbnail} fluid/>
            <Card.Body>
              <Card.Title>Chicken Feet</Card.Title>
              <Card.Text>
                My first attempt at developing a game in Unity as a part of 
                the "USC Games Unlocked" Course
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-3">
          <Card className="shadow">
            <Card.Img src={chickenToDoThumbnail} fluid/>
            <Card.Body>
              <Card.Title>Chicken To Do</Card.Title>
              <Card.Text>Made with React and using Firebase from google
                as a BaaS, it is an attempt at emulating task trackers such as
                Milanote and Asana. Currently a work in progress
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-3">
          <Card className="shadow">
            <Card.Img src="#"/>
            <Card.Body>
              <Card.Title>Project Title</Card.Title>
              <Card.Text>Describe the project</Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  )
}

export default ProjectsCardGrid;