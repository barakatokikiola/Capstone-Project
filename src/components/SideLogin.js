import { Container, Stack, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SideLogin=()=>{

    return(
<Container className="px-1 pt-5">
<Col lg={true}>
<div>
<h3 className=" mb-4">Keep Pursuing<br/> Justice</h3>
</div>
<Stack gap={2} className="col-md-6 ">
<Button variant="danger"  className="mb-4">
<i class="fab fa-google"></i>
    <span id="adj" className="ms-2">Sign in with Google</span>
    </Button>
<Button variant="primary"  className="mb-4" >
<i class="fab fa-facebook"></i>
    <span id="adj"  className="ms-2">Sign in with Facebook</span>
    </Button>
</Stack>
<p id="label">Don't have an account yet?<Link to="/signup" id="link" className="m-1">Sign up</Link></p>
</Col>
</Container>
    )
}

export default SideLogin;