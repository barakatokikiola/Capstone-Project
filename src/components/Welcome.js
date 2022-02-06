import { Col, Row } from 'react-bootstrap';
import Sidebar from './Sidebar'; 

const Welcome =()=>{

    return (
<div>
<Sidebar />
<Row bg="white" className="mx-4 d-flex justify-content-center align-items-center">
<Col lg={true} >
    <h6>Hi Username,</h6>
    <h3>Welcome to your dashboard</h3>
    <p>
        Create your first report and it will be promptly <br/>attended to. 
        You will get a response within a few <br/>minutes of submitting a report
    </p>
</Col>
<Col lg={true} className="pt-5" >
     <img src={require('./images/lady vector.png')} alt="logo" id="welcome-img" />
 </Col>
</Row>
</div>

    )
}

export default Welcome;