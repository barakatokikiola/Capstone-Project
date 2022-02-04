import { Container, Row, Col} from 'react-bootstrap';
import SideSignup from './SideSignup';
import Signup from './Signup';

const SignupPage=()=>{

    return(
        <Container>
  <Row  className="py-5 px-3">
    <Col className="col-md-6 mt-5 mt-md-0">
        <Signup />
    </Col>
    <Col className="col-md-6 mt-5 mt-md-0  order-md-first">
         <SideSignup />
         </Col>
  </Row>
  </Container>
    )
}

export  default SignupPage;