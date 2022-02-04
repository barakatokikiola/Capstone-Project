import { Container, Form, Button,Row, Col } from 'react-bootstrap';

const Signup =()=>{

    return(
      <Container className="px-5">
        <h2 className="text-danger mb-2 fw-bold">Welcome to CFS</h2>
        <h6 className="mb-3 fw-bold">Create Account </h6>
<Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Enter Fullname" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control size="sm" type="email" placeholder="Enter email" />
  </Form.Group>
  <Row>
  <Col lg={true}>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control size="sm" type="password" placeholder="Password" />
  </Form.Group>
  </Col>
  <Col lg={true}>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control size="sm" type="password" placeholder="Confirm Password" />
    </Form.Group>
  </Col>
  </Row>
  <Row>
  <Col lg={true}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Phone number</Form.Label>
    <Form.Control size="sm" type="text" placeholder=" Enter phone number" />
  </Form.Group>
  </Col>
  <Col lg={true} >
  <Form.Group className="mb-3">
  <Form.Label>Gender</Form.Label>
  <Form.Select size="sm">
    <option>Select Gender</option>
    <option>Male</option>
    <option>Female</option>
  </Form.Select>
  </Form.Group>
  </Col>
  </Row>
  <Form.Label>Are you an individual or an organization?</Form.Label>
  <Form.Select size="sm" className="mb-3">
    <option>Select...</option>
    <option>Individual</option>
    <option>Organization</option>
  </Form.Select>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Address</Form.Label>
    <Form.Control size="sm" type="text" placeholder="" />
  </Form.Group>
  
  <Button variant="danger" type="submit" className="w-100">
    Sign Up
  </Button>
</Form>
      </Container>

    )
}

export default Signup;