import { Container, Row, Col} from 'react-bootstrap';
import SideSignup from './SideSignup';
import Signup from './Signup';

const SignupPage=()=>{

    return(
        <Container>
  <Row  className="py-5 px-3">
    <Col sm={7}>
        <SideSignup />
    </Col>
    <Col sm={5}>
         <Signup />
         </Col>
  </Row>
  </Container>
    )
}

export  default SignupPage;