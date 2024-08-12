import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

function NavBar() {

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand}
          bg="dark" data-bs-theme="dark" className="Nav-Holder">
          <Container fluid>
            <Navbar.Brand>
              <NavLink to="/">Movie Night</NavLink>
              </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas style={{backgroundColor: "#eee"}}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src="images/LogoBlack2.png" alt="Movie Night" className='w-50' />
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body className='p-0' >
                <Nav className="justify-content-end flex-grow-1">
                  <NavLink exact to="/" className='fs-3 ps-3 mb-2 pt-1 pb-1' activeClassName="active">Home</NavLink>
                  <NavLink to="/about" activeClassName="active" className='fs-3 ps-3 mb-2  pt-1 pb-1'>About</NavLink>
                  <NavLink to="/contact" activeClassName="active" className='fs-3 ps-3 mb-2  pt-1 pb-1'>Contact Us</NavLink>
                  <NavLink to="/signin" activeClassName="active" className='fs-3 ps-3 mb-2  pt-1 pb-1'>Sign in</NavLink>
                </Nav>
              </Offcanvas.Body>

            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;