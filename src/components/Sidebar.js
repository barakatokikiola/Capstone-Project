import React from 'react';
import { Button, Container, Navbar, Nav, Offcanvas} from 'react-bootstrap';
import Report from './Report';



const Sidebar =()=>{
  const [modalShow, setModalShow] = React.useState(false);

    return(
        <Navbar bg="white" expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" id="toggler">
          <i class="fas fa-bars"></i>
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            className="w-auto "
          >
            <Offcanvas.Header id="header-bg" className="px-5 ">
              <Offcanvas.Title id="offcanvasNavbarLabel" className="p-auto m-auto ">
              <div>
          <img src={require('./images/vector.png')} alt="logo" id="sidebar-logo" />
          </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body id="offcanvas" className="px-5 ">
              <Nav className="justify-content-end flex-grow-1 p-3 border-top">
              <Nav.Link  href="#todos" id="header-links" className=" text-muted">
        <i class="far fa-file"></i>
     <span>Reports</span>
      </Nav.Link>
      <Nav.Link href="#notes" id="header-links" className=" text-muted"><i class="far fa-user"></i>
      <span>Profile</span>
      </Nav.Link>
      <Nav.Link href="#links" id="header-links" className=" text-muted"><i class="far fa-comment-alt"></i>
      <span>Messages</span>
      </Nav.Link>
              </Nav>
            </Offcanvas.Body>
            <Nav className="p-5" id="header-bg">
              <Nav.Link href="#links" id="footer-links" className="justify-end">
      <i class="fas fa-sign-out-alt"></i>
      <span className="ms-2">Logout</span>
      </Nav.Link>
              </Nav>
          </Navbar.Offcanvas>
          <Navbar.Brand href="#">
          <div>
          <Button onClick={() => setModalShow(true)} variant="primary" size="sm" className="m-4 px-3">
          Report a crime
          </Button>
          <Report
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
          <i class="far fa-bell" id="sidebar-logo"></i>
          <img src={require('./images/free.jpg')} alt="logo" id="user-img" className="rounded-circle"/>
          </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default Sidebar;