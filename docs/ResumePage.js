import { Container, Row, Col, Image, Card, Link} from 'react-bootstrap';
import ResumePhoto from './images/meInSuitCropped.jpg'

function ExperienceFormat(props) {
  function subtitle() {
    if(props.subtitle === undefined) return;
    return (
      <Container className='d-flex justify-content-between'>
        <p><em>{props.subtitle}</em></p>
        <p><em>{props.company}</em></p>
      </Container>
    );
  }
  function content() {
    if(props.text !== undefined) return <p>{props.text}</p>
    if(props.list !== undefined) {
      return (
        <ul>
          {props.list.map(item => {
            return (
              <li>{item}</li>
            )
          })}
        </ul>
      )
      // console.log(props.list);
    }
  }
  return (
    <Card className='col-9'>
      <Card.Header as='h6' className='d-flex justify-content-between'>
        <div>
          {props.title}
        </div>
        <div>
          {props.dates}
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {subtitle()}
          {content()}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

function ResumePage() {
  return (
    <Container>
      <Row>
        <Col className='d-flex justify-content-center'>
          <Card className='col-7'>
            <Card.Body>
              <Row>
                <Col className='col-3'>
                  <Image src={ResumePhoto} fluid/>
                </Col>
                <Col className='col-9'>
                  <Row>
                    <h4>Alexander Julian A. Ty</h4>
                  </Row>
                  <Row>
                    <Card.Link href='mailto:alexanderjulianty@gmail.com'>alexanderjulianty@gmail.com</Card.Link>
                    <p>(858) 281-3589</p>
                    <p>5360 Toscana Way, G109, San Diego, CA, 92122</p>
                    <a href="https://drive.google.com/file/d/1mfgaA4uw9m8Aq3JhR6XGwM4k4eu3MkUa/view?usp=sharing">PDF version</a>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className='offset-1'>
        <h3>Purpose</h3>
      </Row>
      <Row className='d-flex justify-content-center'>
        <Card className='col-9'>
          <Card.Body>
            As I believe my strength lies in working others, I am in 
            pursuit of a challenging work environment with opportunities to 
            collaborate in groups, preferably with an emphasis on 
            programming.Also, having opportunities for mentorship is 
            important to me, being either or both a mentor and mentee.
          </Card.Body>
        </Card>
      </Row>

      <Row className='offset-1'>
        <h3>Education</h3>
      </Row>
      <Row> 
        <Col className='d-flex justify-content-center'>
          <ExperienceFormat 
            title='University of California San Diego'
            dates='June 2015'
            text='B.S. in Engineering Physics: Semiconductor Physics'
          />
        </Col>
      </Row>
      <Row className='offset-1'>
        <h3>Experience</h3>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center'>
          <ExperienceFormat 
            title='Underwater Optical Communication'
            dates='January 2015 - June 2015'
            subtitle='Engineering Group Design'
            company='UC San Diego, Northrop Grumman'
            list={[
              "As part of a team of four students, advanced a proof of concept optical communications MODEM",
              "The team developed a system to characterize the properties of light attenuation in water with the goal of achieving higher data rate transfer for underwater instruments.",
              "Explored a proof of concept for utilizing network media converters as a substitute for optical transceiver modules."
            ]} 
          />
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center'>
          <ExperienceFormat 
            title='Office of Academic Support and Instructional Services'
            dates='September 2016 - June 2018'
            subtitle='Physics Subject Coordinator'
            company='UC San Diego'
            list={[
              "Conducted student workshops for lower division Physics and Mathematics in groups of 10-30 students in a classroom setting to supplement their studies.",
              "Managed and evaluates physics workshops, and provides assistance to student tutors in preparing and conducting their workshops.",
              "Assisted in planning, conducting, and assessing effectiveness of two of the office's programs by analyzing data from student evaluations.",
              "Used Python, R, Excel for presenting and analyzing data"
            ]} 
          />
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center'>
          <ExperienceFormat 
            title='Staff Research Associate'
            dates='June 2018 - June 2020'
            subtitle='Abarbanel Research Group'
            company='UC San Diego'
            list={[
              "Conducted research in the application of Data Assimilation principles to the field of Machine Learning. Specifically, investigated the ability of principles of Information Theory and Precision Annealing to train a Multi-layer Perceptron neural network to extrapolate a chaotic time series.",
              "Used Python, C, SSH (for the use of UCSD's CPU array)"
            ]} 
          />
        </Col>
      </Row>

      <Row className='offset-1'>
        <h3>Technical Strengths</h3>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center'>
          <Card className='col-9'>
            <Card.Body>
              <Row>
                <Col>
                  <p>Proficient In:</p>
                </Col>
                <Col>
                  <p>C, Python, LaTeX, R, Microsoft Office Suite, HTML, CSS, Javascript</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Working knowledge of</p>
                </Col>
                <Col>
                  <p>MATLAB, SolidWorks, LabVIEW, SQL, Octave</p>
                </Col>
              </Row>
            </Card.Body>

          </Card>
        </Col>
      </Row>
    </Container>
  )
}


export default ResumePage