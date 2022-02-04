import { Container, Form, Button,Row, Col } from 'react-bootstrap';

const Signup =()=>{

    return(
      <Container className="p-5" id="form-bg">
        <div  className="mb-4">
        <h2 className="mb-2 fw-bold" id="h2">Welcome to CFS</h2>
        <h6 className="mb-3 fw-bold">Create Account </h6>
        </div>
       
<Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label id="label">Name</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Enter Fullname" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label id="label">Email address</Form.Label>
    <Form.Control size="sm" type="email" placeholder="Enter email" />
  </Form.Group>
  <Row>
  <Col lg={true}>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label id="label">Password</Form.Label>
    <Form.Control size="sm" type="password" placeholder="Password" />
  </Form.Group>
  </Col>
  <Col lg={true}>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label id="label">Confirm Password</Form.Label>
    <Form.Control size="sm" type="password" placeholder="Confirm Password" />
    </Form.Group>
  </Col>
  </Row>
  <Row>
  <Col lg={true}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label id="label">Phone number</Form.Label>
    <Form.Control size="sm" type="text" placeholder=" Enter phone number" />
  </Form.Group>
  </Col>
  <Col lg={true} >
  <Form.Group className="mb-3">
  <Form.Label id="label">Gender</Form.Label>
  <Form.Select size="sm">
    <option>Select Gender</option>
    <option>Male</option>
    <option>Female</option>
  </Form.Select>
  </Form.Group>
  </Col>
  </Row>
  <Form.Label>Which describes you?</Form.Label>
  <Form.Select size="sm" className="mb-3">
    <option>Select...</option>
    <option>Individual</option>
    <option>Organization</option>
  </Form.Select>
    
  <Button variant="danger" type="submit" className="w-100">
    Sign Up
  </Button>
</Form>
      </Container>

    )
}

export default Signup;