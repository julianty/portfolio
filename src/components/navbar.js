import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { LinkContainer } from 'react-router-bootstrap';
import { Link } from "react-router-dom";

function BootstrapNavbar() {
  return (
    <Navbar bg="dark" expand="md" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Alexander Julian A Ty
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to="/Resume">
              Resume
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/Misc">
              Misc
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BootstrapNavbar;
