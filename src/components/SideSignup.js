
import { Container, Stack, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SideSignup=()=>{

    return(
<Container className="px-1">
<Col lg={true}>
<div>
<h3>Be Part of The</h3>
<h3 className=" mb-4">Solution to Injustice</h3>
</div>
<Stack gap={2} className="col-md-5 ">
<Button variant="danger"  className="mb-4">
<i class="fab fa-google"></i>
    <span className="ms-2">Sign up with Google</span>
    </Button>
<Button variant="primary"  className="mb-4" >
<i class="fab fa-facebook"></i>
    <span className="ms-2">Sign up with Facebook</span>
    </Button>
</Stack>
<p id="label">Already have an account?
<Link to="/" id="link" className="m-1">Sign in</Link>
</p>
</Col>

</Container>
    )
}

export default SideSignup;