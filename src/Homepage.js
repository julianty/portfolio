import BootstrapNavbar from './navbar';
import BootstrapCarousel from './BootstrapCarousel';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProjectsPage from './ProjectsPage';
import ResumePage from './ResumePage';

function Homepage() {
  return (
    <>
      <BootstrapNavbar></BootstrapNavbar>
        
      <Container fluid className='px-0'>
        <Routes>
          <Route path="/home" element={<ProjectsPage />}></Route>
          <Route path="/Resume" element={<ResumePage />}></Route>
          <Route path="/Misc"></Route>
        </Routes>
      </Container>
    </>
  )
}


export default Homepage;
