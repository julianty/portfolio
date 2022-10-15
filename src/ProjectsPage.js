import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';

import meInSuit from "./images/meInSuitCropped.jpg";
import AboutMeCard from './AboutMeCard';
import ProjectsCardGrid from './ProjectsCardGrid';
function ProjectsPage() {
  return (
    <Container fluid className='p-0'>
      <Stack gap={5}>
        <Container className='p-3 my-5'>
          <Row className='justify-content-center align-items-center'>
            <Col className='col-3 px-0 shadow'>
              <Image src={meInSuit} fluid></Image>
            </Col>
            <Col className='col-5 px-0 shadow'>
              <AboutMeCard/>
            </Col>
          </Row>
        </Container>
        <Container className='mx-auto p-4'>
          <ProjectsCardGrid/>
        </Container>
        <Container className='mx-0 bg-primary text-white' fluid>
          <Row className='mx-auto'>
            <Col className='col-3 offset-2'>
              <h2>Contact Me</h2>
              <p>Please get in touch if you think our work could be mutually
                beneficial
              </p>
              <p>1234 Address Street, City City, California, 123456</p>
              <p>(888)888-8888</p>
              <p>emailaddress@domain.com</p>
              Social Links again
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
      </Stack>
    </Container>
  )
}

export default ProjectsPage;