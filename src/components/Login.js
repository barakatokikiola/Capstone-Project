import React from 'react';
import { Container, Form, Button,Modal } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
  return (
    <Container>
      <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      centered
    >
      <Modal.Header closeButton className="border-0 py-5"  id="modal">
        <Modal.Title id="contained-modal-title-vcenter">
          <h6>Enter your registered email address to reset your password</h6>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body  id="modal">
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label id="label">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  </Form>
      </Modal.Body>
      <Modal.Footer className="border-0 justify-content-center py-3"  id="modal">
        <Button type="submit" onClick={props.onHide} 
        id="label"
        className="bg-transparent text-dark">
          Reset Password</Button>
      </Modal.Footer>
    </Modal>
    </Container>
  );
}
const Login =()=>{
  const [modalShow, setModalShow] = React.useState(false);
    return(
<Container className="p-5" id="login">
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label id="label">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label id="label">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    <Form.Text className="text-black">
      <p id="btn-link" className="my-2" onClick={() => setModalShow(true)}>Forgot Password?</p>
    </Form.Text>
  </Form.Group>
  <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
  <Button variant="primary" type="submit" className="w-100">
    Sign In
  </Button>
</Form>
</Container>
    )
}

export default Login;