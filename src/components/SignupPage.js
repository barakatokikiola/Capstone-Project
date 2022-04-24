import { Container, Row, Col} from 'react-bootstrap';
import Header from './Header';
import SideSignup from './SideSignup';
import Signup from './Signup';

const SignupPage=()=>{

    return(
        <div>
<Header />
        <Container className="py-5 px-3">
    <Row>
        <Col md className="col-md-6 mt-5 mt-md-0">
         <SideSignup />
         </Col>
    <Col md className="col-md-6 mt-5 mt-md-0">
        <Signup />
    </Col>
    
  </Row>
  </Container>
        </div>
        
    )
}

export  default SignupPage;