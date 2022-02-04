import { Container, Row, Col} from 'react-bootstrap';
import SideLogin from './SideLogin';
import Login from './Login';

const LoginPage=()=>{

    return(
        <Container className="py-5 px-3">
  <Row>
    <Col className="col-md-6 mt-5 mt-md-0">
        <Login />
    </Col>
     <Col className="col-md-6 mt-5 mt-md-0  order-md-first">
         <SideLogin />
         </Col>
  </Row>
  </Container>
    )
}

export  default LoginPage;