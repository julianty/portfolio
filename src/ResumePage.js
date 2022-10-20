import { Container, Row, Col, Image, ListGroup} from 'react-bootstrap';
import ResumePhoto from './images/meInSuitCropped.jpg'

function ExperienceFormat(props) {
  function subtitle() {
    if(props.subtitle === undefined) return;
    return (
      <Row>
        <Col>
          <p><em>{props.subtitle}</em></p>
        </Col>
        <Col>
          <p><em>{props.company}</em></p>
        </Col>
      </Row>
    );
  }
  function content() {
    if(props.text !== undefined) return <p>{props.text}</p>
    if(props.list !== undefined) {
      return (
        <ListGroup>
          {props.list.map(item => {
            return (
              <ListGroup.Item>{item}</ListGroup.Item>
            )
          })}
        </ListGroup>
      )
      // console.log(props.list);
    }
  }
  return (
    <>
      <Row>
        <Col>
          <p><strong>{props.title}</strong></p>
        </Col>
        <Col>
          <p><em>{props.dates}</em></p>
        </Col>
      </Row>
      {subtitle()}
      <Row>
        {content()}
      </Row>
    </>
  )
}

function ResumePage() {
  return (
    <>
      <Container>
        <Row>
          <Col className='col-2'>
            <Image src={ResumePhoto} fluid/>
          </Col>
          <Col className='col-7'>
            <Row>
              <h2>Alexander Julian A. Ty</h2>
            </Row>
            <Row>
              <Col className='col-4'>
                <p>alexanderjulianty@gmail.com</p>
                <p>(858) 281-3589</p>
              </Col>
              <Col className='col-4'>
                <p>5360 Toscana Way, G109, San Diego, CA, 92122</p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <h3>Purpose</h3>
          <p>
            As I believe my strength lies in working others, I am in 
            pursuit of a challenging work environment with opportunities to 
            collaborate in groups, preferably with an emphasis on programming.
            Also, having opportunities for mentorship is important to me, 
            being both a mentor and mentee.
          </p>
        </Row>

        <Row>
          <h3>Education</h3>
          <ExperienceFormat 
            title='University of California San Diego'
            dates='June 2015'
            text='B.S. in Engineering Physics: Semiconductor Physics'
          />
        </Row>
        <Row>
          <h3>Experience</h3>
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
        </Row>

        <Row>
          <h3>Technical Strengths</h3>
          <Row>
            <Col className='col-3'>
              <p><strong>Proficient In</strong></p>
            </Col>
            <Col className='col-6'>
              <p>C, Python, LaTeX, R, Microsoft Office Suite, HTML, CSS, Javascript</p>
            </Col>
          </Row>
          <Row>
            <Col className='col-3'>
              <p><strong>Working knowledge of</strong></p>
            </Col>
            <Col className='col-6'>
              <p>MATLAB, SolidWorks, LabVIEW, SQL, Octave</p>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  )
}


export default ResumePage