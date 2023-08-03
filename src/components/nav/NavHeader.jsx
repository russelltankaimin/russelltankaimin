import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import data from "./linktree.json";
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css'
import './nav.css'
import { Link } from 'react-router-dom';

function NavHeader() {

  const expand = false;

  return (
    <>
    <Navbar key={expand} bg="white" expand={expand} className="mb-3" sticky='top'>
      <Container fluid>
        <Navbar.Brand>
          <Nav.Link as={Link} to='/'>Tan Kai Min, Russell 陈界铭 
          </Nav.Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${true}`}/>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-collapse-${expand}`}
            placement="end" scroll="true" style={{width:"auto"}}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Contents
              </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {data["main"].map((bulk, idx) => <>
                  {/* {console.log("bulk", bulk)} */}
                    <Nav.Link as={Link} to={bulk["link"]} className='main_link'>{bulk["name"]}</Nav.Link>
                    {bulk["sub"].map((subbulk, idx1) => <>
                    {/* {console.log("subbulk link", subbulk)} */}
                      <Nav.Link as={Link} to={Object.values(subbulk)[0]} className='sub_link'>{Object.keys(subbulk)[0]}</Nav.Link>
                    </>)}
                  </>)}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default NavHeader;