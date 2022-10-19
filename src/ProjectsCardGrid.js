import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import { SocialLinks, LOGOS} from "./SocialLinks";

import chickenFeetThumbnail from './images/chickenFeetThumbnail.png';
import chickenToDoThumbnail from './images/chickenToDoThumbnail.png';
import MLPaperThumbnail from './images/MLPaperThumbnail.png';

function ProjectCard(props) {
  return (
    <Card className="shadow">
      <Card.Img src={props.imgSrc} fluid/>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
          {props.title}
          <div>
            <SocialLinks logo={props.logo} href={props.href}/>
          </div>
        </Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}


function ProjectsCardGrid() {
  return (
    <Container className="mx-auto">
      <Row>
        <h2>Projects/Work</h2>
      </Row>
      <Row>
        <Col className="col-3">
          <ProjectCard
            title='Chicken Feet'
            text="My first attempt at developing a game in Unity as a part of 
                the 'USC Games Unlocked' Course"
            imgSrc={chickenFeetThumbnail}
          />
        </Col>
        <Col className="col-3">
          <ProjectCard 
            title='Chicken To Do' 
            text="Made with React and using Firebase from google
              as a BaaS, it is an attempt at emulating task trackers such as
              Milanote and Asana. Currently a work in progress"
            imgSrc={chickenToDoThumbnail}
            logo={LOGOS.GITHUB}
            href='https://github.com/julianty/chicken-to-do'
          />
        </Col>
        <Col className="col-3">
          <ProjectCard 
            title='ML Research Paper' 
            text="An analysis of an intersection between Information Theory, 
              Data Assimilation, and a particular method of training a neural
              network. Examines the possibility of determining a theoretically
              sufficient number of training examples to achieve a desired level
              of accuracy instead of an 'as much as possible' approach." 
            imgSrc={MLPaperThumbnail}
            logo={LOGOS.ARXIV}
            href='https://arxiv.org/abs/1902.05062'
          />
        </Col>

      </Row>
    </Container>
  )
}

export default ProjectsCardGrid;