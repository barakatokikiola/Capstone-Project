import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
  const {register, handleSubmit, formState:{errors}} = useForm();
  const navigate = useNavigate();
  const[error, setError] = useState("")
  const onSubmit = (data)=>{
      if(data.email==="example@admin.com" && data.password ==="1234"){
          localStorage.setItem('authenticated', true)
          alert("Login Successfully")
      navigate("/welcome")
      }else{
          setError("Invalid login details");
      }
      
  }
  const [modalShow, setModalShow] = React.useState(false);
    return(
<Container className="p-5" id="form-bg">
<div  className="mb-4">
<h3 className="text-success mb-1 fw-bold">Welcome back!</h3>
<h6 className="mb-3 ">Sign in to continue</h6>
</div>
<Form onSubmit={handleSubmit(onSubmit)}>
  <Form.Group className="mb-4" controlId="formBasicEmail">
    <Form.Label id="label">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"
     {...register("email", {required:true, maxLength:30})}/>
     {errors.email && <p style={{color:'red'}}>Please check the email</p>}
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label id="label">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
    {...register("password", {required: true
    })}
    />
    <Form.Text className="text-black">
      <p id="btn-link" className="my-2" onClick={() => setModalShow(true)}>Forgot Password?</p>
    </Form.Text>
  </Form.Group>
  <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
  <Button variant="primary" type="submit"
   className="w-100"
    onSubmit={handleSubmit()}>
    Sign In
  </Button>
  <p style={{textAlign:"center", color:"red", fontSize:"1.3rem"}}>{error}</p>
</Form>
</Container>
    )
}

export default Login;