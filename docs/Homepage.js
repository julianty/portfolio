import BootstrapNavbar from './navbar';
import BootstrapCarousel from './BootstrapCarousel';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PortfolioPage from './PortfolioPage';
import ResumePage from './ResumePage';

function Homepage() {
  return (
    <>
      <BootstrapNavbar></BootstrapNavbar>
        
      <Container fluid className='px-0'>
        <Routes>
          <Route path="/portfolio" element={<PortfolioPage />}></Route>
          <Route path="/Resume" element={<ResumePage />}></Route>
          <Route path="/Misc"></Route>
        </Routes>
      </Container>
    </>
  )
}


export default Homepage;
