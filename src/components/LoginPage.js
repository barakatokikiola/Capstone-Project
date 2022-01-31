import { Container, Row, Col} from 'react-bootstrap';
import SideLogin from './SideLogin';
import Login from './Login';

const LoginPage=()=>{

    return(
        <Container>
  <Row  className="py-5 px-3">
    <Col sm={7}>
        <SideLogin />
    </Col>
    <Col sm={5}>
         <Login />
         </Col>
  </Row>
  </Container>
    )
}

export  default LoginPage;