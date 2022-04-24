import React from 'react';
import background from "./images/background.jpg";
import logo from "./images/logo.jpg";
import handwriting from "./images/handwriting.jpg";
import staricon from "./images/5-stars.jpg";
import avatar from "./images/Avatar.jpg";
import anonymous from "./images/anonymous.jpg";
import socialmedia from "./images/Socialmedia.jpg";
import appsteps from "./images/appsteps.png";
import sliders from "./images/Slider.jpg";
import Report from './Report';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Card,Navbar, Nav, Row, Col } from 'react-bootstrap';

const Landing = () => {
    const navigate = useNavigate();
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Container fluid>
          <Container fluid>
    <Row>
    <Col lg>
  <Card id='wf' className=''>
            <Card.Img  src={background} alt="background-pics" className="background-display"  />
            <Card.ImgOverlay>
  <Navbar collapseOnSelect expand="lg">
  <Container>
  <Navbar.Brand href="#home">
  <img
           src={logo}
            alt="logo"  
             className="d-inline-block align-top"
          />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className='ms-auto' id='nav-link'>
            <Nav.Link href="#home" className="text-white" >Home</Nav.Link>
            <Nav.Link href="#about"className="text-white" >About us</Nav.Link>
            <Nav.Link href="#right" className="text-white" >Rights</Nav.Link>
            <Nav.Link href="#contact" className="text-white" >Contact</Nav.Link>
            </Nav>
            <div>
<Button onClick={()=> navigate("/signup")}
 variant="primary" size="md" className="mx-4">
Sign Up
</Button>
<Button  onClick={()=> navigate("/login")}
 variant="dark" size="md" className="mx-2" id='signIn'>
Sign In
</Button>
</div>
  </Navbar.Collapse>
  </Container>
</Navbar>
<Container id='hidden'> 
<Card.Body className='text-white mt-5' id='cbody'>
    <Card.Title ><p id='headline' className='mt-5'>Sound The Alarm!</p></Card.Title>
    <Card.Text id='tagline'>
    Got an incident we need to know about?
    </Card.Text>
    <Button onClick={() => setModalShow(true)} 
    id="report">
      Report Now
      </Button>
      <Report
             show={modalShow}
             onHide={() => setModalShow(false)}
                   />
  </Card.Body>
</Container>
<div className="app-steps">
                        <img src={appsteps}
                         alt="workflow"
                         width='75%'
                          id="wf-image" 
                          className='rounded-pill' />
                </div>  
  </Card.ImgOverlay>
</Card>  
  </Col>
</Row>
          </Container>
           
                  <Container className="pt-5 my-3 d-flex align-items-center justify-content-center"> 
                    <Row className="pt-5 my-2 text-center">
                      <Col md className='mx-3'>
                      <h1 className="text-primary fs-1 fw-bold ">About Us</h1>
                        <p className="fs-5 text-start">In a society where bad and corrupt practices has 
                            become the order of the day, where victims are
                             silenced and oppressed, where the citizens are denied
                              their human rights, where the powerful are abusing powers 
                              entrusted into them and where the common man is falling prey 
                              in the hands of those that are meant to protect them, we at
                               THE VOICE BUILDERS organisation are stepping out as a ray of light, 
                               a beam of hope, restoring confidence, joy, peace, laughter and obtaining
                                justice in hopeless situations.
                                 <a href="more" className="ms-2 text-decoration-none">Read more...</a></p>
                      </Col>
        </Row>
      </Container>
       <Container>
        <Row  className="statistics">
    <Col className="complaint-filed m-2">
    <h3>435</h3>
    <p>Complaints Filed</p>
      </Col>
    <Col className="solved-cases m-2">
    <h3>397</h3>
    <p>Solved Cases</p>
      </Col>
    <Col className="ongoing-inv m-2">
    <h3>38</h3>
    <p>Ongoing Investigations</p>
      </Col>
  </Row>
</Container>
<Container>
<Row className="file-report my-4 py-4">
    <Col md className='m-1'>
    <img src={handwriting} 
    className="img-fluid"
     alt="filing-display"/>
      </Col>
    <Col md className='m-1'>
      <div>
      <h3 className="">
                       File your complaints and get a rapid response
                       from our teams.</h3>
                      <p className="file-report-paragraph">
                        You can report an incident from the comfort 
                        of your home <br />and it will be properly 
                        attended to. Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Sed, corporis! 
                        Lorem ipsum, dolor sit amet consectetur
                         adipisicing elit. Neque, quam!</p>
      </div>
       <div>
      <Button variant='primary' size='sm' className=""> Report a crime</Button>
      </div>
    </Col>
  </Row>
</Container>

            <section className="testimonials">
                <h2>TESTIMONIALS</h2>
                <h3>What our victors say</h3>
                <div className="card-group">
                <div className="card test-card">
                 <img src={staricon} className="card-img-top" alt="5star-icon "/>
                <div className="card-body">
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro debitis laudantium consequatur dolorem sed numquam facere illum, suscipit quibusdam. Magni saepe id enim, accusamus laborum eaque officiis ab aliquam dolore.</p>
    </div>
    {/* <div className="card-footer"> */}
        <img src={avatar} alt="avavtar" className="avatar" />
      <p className="text-muted mx-2">MUIZ ALABA</p>
      <p className="muiz mx-2">Lagos, Nigeria</p>
    {/* </div> */}
  </div>
  <div className="card test-card">
    <img src={staricon} className="card-img-top" alt="5star-icon"/>
    <div className="card-body">
      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, autem cumque aperiam voluptates beatae consequuntur suscipit dolor obcaecati, in, dolorum at quasi minus. Possimus esse atque deserunt omnis cum iure.</p>
    </div>
    {/* <div className="card-footer"> */}
   
      <img src= {avatar} className="avatar" alt="avatar"/>
      <p className="text-muted mx-2">HENRIETTA A. </p>
      <p className="henrietta mx-2">Kogi, Nigeria</p>
    {/* </div> */}
  </div>
  <div className="card test-card">
    <img src= {staricon} className="card-img-top" alt="5star-icon"/>
    <div className="card-body">
      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem saepe harum consectetur reprehenderit, a, laborum cumque facere, explicabo temporibus distinctio unde! Tempora voluptatum et vero tenetur commodi facere, mollitia in.</p>
    </div>
         
         <img src={avatar} alt="avavtar-icon" className="avatar" />
         <p className="text-muted mx-2">BARAKAT OKIKI</p>
         <p className="barakat mx-2">Ibadan, Nigeria</p>
            </div>
            </div>
            <img src={sliders} alt="sliders" className="sliders"/>
            </section>

            <div className="anonymous py-5">
            
         <Row>
          <Col md>
          <img src={anonymous} className="img-fluid rounded-start" 
          alt="anonymous-display"/>
        </Col>
     <Col md className="py-4">
      <div className="mx-3">
        <h3 className="fs-2">Stay anonymous while you file your complaints</h3>
        <p className="mb-1">We can file your complaints while you remain anonymous. <br />We seek to safeguard and protect your identity.</p>
                 <div className="button">
                            <Button >Report a crime</Button>
                 </div>      
           </div>
            </Col>
            </Row>
            </div>
            <footer className="footer-bar">
                <img src={socialmedia} alt="social-media-icon" className="social-media-icon" />
                <p className= "footer-p">CFS Interventions</p>
                <p>&copy;2022</p>
                <ul className="d-block pt-2">
                    <li><a href="privacy" className="mx-4 ">Privacy policy</a> 
                    <li><a href="terms" className="mx-4">Terms of use</a></li></li>
                </ul>
            </footer>
        </Container>
    );
}

export default Landing;