import React from 'react';
import { Button,  Modal, Form, Row, Col} from 'react-bootstrap';

function Report(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          <h4>Create Report</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
              <Row>
                  <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label id="label">Address</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Enter Fullname" />
  </Form.Group>
                  </Col>
                  <Col>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label id="label">State</Form.Label>
    <Form.Select size="sm"  aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
</Form.Select>
  </Form.Group>
  </Col>
  <Col>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label id="label">Local Government</Form.Label>
    <Form.Select size="sm"  aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
</Form.Select>
  </Form.Group>
  </Col>
    </Row>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label id="label">Tell us what happened</Form.Label>
    <Form.Control as="textarea" rows={4} />
  </Form.Group>
  <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2} id="label">
        Case Type
      </Form.Label>
      <Col sm={4}>
      <Form.Select size="sm"  aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
</Form.Select>
        </Col>
        </Form.Group>
  <Form.Group controlId="formFileSm" className="mb-3">
    <Form.Label id="label">Upload File</Form.Label>
    <Form.Control  type="file" size="sm" />
  </Form.Group>
  
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" />
  <label class="form-check-label" for="flexCheckDisabled" id="label">
    I want to be anonymous (Your personal details will not be made public)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" />
  <label class="form-check-label" for="flexCheckCheckedDisabled" id="label">
    I affirm that the information I provided is true and accurate to the best of my knowledge
  </label>
</div>
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0 justify-content-center">
          <Button>Submit Report</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  export default Report;