import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Top = () => {
  
  return (
    <div>
     
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Container>
  <Navbar.Brand href="#home"> <a class="navbar-brand" href="#">    Vint-  <span style={{ color: "#FF9900" }} >  age  </span>   </a></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Services</Nav.Link>
      <Nav.Link href="#pricing">Brand</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
      <Nav.Link href="#pricing">Team</Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="#memes">
      <span class="navbar-text" style={{ color: "#FF9900" }} >
      Take a tour
    </span>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>


    </div>
  )
}

export default Top






















