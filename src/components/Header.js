import { Navbar, Nav, Container } from 'react-bootstrap';


const Header=()=>{
    return(
<div>
<Navbar id="header-bg" variant="dark" expand="lg">
    <Container>
    <Navbar.Brand href="#home" id="home">
          <div>
          <img src={require('./images/vector.png')} 
          alt="logo" id="logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <Nav>
      <Nav.Link href="/" className='text-decoration-none'>Home</Nav.Link>
      <Nav.Link href='about' >About us</Nav.Link>
      <Nav.Link href="#pricing"  >Rights</Nav.Link>
      <Nav.Link href="#pricing"  >Contact</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
</div>
        )

}

export default Header;