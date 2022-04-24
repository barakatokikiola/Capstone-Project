import { Container, Row, Col} from 'react-bootstrap';
import Header from './Header';
import SideLogin from './SideLogin';
import Login from './Login';

const LoginPage=()=>{

    return(
        <div>
  <Header />
        <Container className="py-5 px-3">
  <Row>
  <Col md className="col-md-6  mt-md-0">
         <SideLogin />
         </Col>
    <Col md className="col-md-6 mt-5 mt-md-0">
        <Login />
    </Col>
     
  </Row>
  </Container>
        </div>
      
    )
}

export  default LoginPage;