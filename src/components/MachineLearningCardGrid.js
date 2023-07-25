import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { SocialLinks } from "./SocialLinks";
import MLPaperThumbnail from "../images/MLPaperThumbnail.png";
import ProjectTag from "./ProjectTag";

export default function MachineLearningCardGrid() {
  return (
    <Container className="mx-auto">
      <Row>
        <Col md="3">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <Card.Title>Research Paper</Card.Title>
              <SocialLinks logo="arxiv" />
            </Card.Header>
            <Card.Img variant="top" src={MLPaperThumbnail}></Card.Img>
            <Card.Body>
              An analysis of an intersection between Information Theory, Data
              Assimilation, and a particular method of training a neural
              network. Examines the possibility of determining a theoretically
              sufficient number of training examples to achieve a desired level
              of accuracy instead of an 'as much training data as possible'
              approach.
            </Card.Body>
            <Card.Footer>
              <ProjectTag tagLabel="ML" />
              <ProjectTag tagLabel="ARTICLE" />
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
