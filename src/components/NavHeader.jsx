import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

function NavHeader() {

  const expand = false;

  return (
    <>
    <Navbar key={expand} bg="light" expand={expand} className="mb-3" sticky='top'>
      <Container fluid>
        <Navbar.Brand>
          <Nav.Link as={Link} to='/'>Tan Kai Min, Russell 陈界铭 
          </Nav.Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end" scroll="true">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Contents
              </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to='/'>Home</Nav.Link>
                  <Nav.Link as={Link} to='/aboutme'>About</Nav.Link>
                  <Nav.Link as={Link} to='/skills'>Skills</Nav.Link> 
                  <NavDropdown
                    title="Blog"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                  <NavDropdown.Item>
                  <Nav.Link as={Link} to='/blog/uni'>University</Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                  <Nav.Link as={Link} to='/blog/interests'>Interests</Nav.Link>
                  </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to='/software'>Software/Projects</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default NavHeader;