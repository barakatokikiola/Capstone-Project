<Card className="bg-white ">
<Card.Img  src={background} alt="background-pics" className="background-display"  />
<Card.ImgOverlay className="card-img-overlay">
        <Navbar id="" variant="dark" expand="lg">
        <Navbar.Brand href="#home" id="home">
          <div>
          <img
           src={logo}
            alt="logo"  
             width="30"
             height="30"
             className="d-inline-block align-top"
          />
          </div> 
          </Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
            <Nav.Link href="#home" className="text-white" >Home</Nav.Link>
            <Nav.Link href="#about"className="text-white" >About us</Nav.Link>
            <Nav.Link href="#right" className="text-white" >Rights</Nav.Link>
            <Nav.Link href="#contact" className="text-white" >Contact</Nav.Link>
            </Nav>
            <div>
<Button onClick={()=> navigate("/signup")} variant="primary" size="sm" className="mx-1">
Sign Up
</Button>
<Button  onClick={()=> navigate("/login")} variant="light" size="sm" className="mx-1">
Sign In
</Button>
</div>
            </Navbar.Collapse>
</Navbar>
 <Card.Text>
 <div className="bg-paragraph">
                <p>Sound the alarm!</p>
                <span  className="text-white">Got an incident we need to know about?</span>
            </div>
            <div className="button">
                    <button className="report-cta" onClick={() => setModalShow(true)}>
                         Report a crime
                         </button>
                    <Report
             show={modalShow}
             onHide={() => setModalShow(false)}
                   />
                </div>
   </Card.Text>            
            
    </Card.ImgOverlay>
      </Card>