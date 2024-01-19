import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom';
import home_icon from '../assets/img/home_icon.webp';

function NavBar() {

  const handleDownload = () => {
    const githubRawURL = 'https://github.com/mnu4513/text_utils/raw/app/code_sbs/app-release.apk';
    const a = document.createElement('a');
    a.href = githubRawURL;
    a.download = 'your-app.zip'; // Specify the filename
    a.click();
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={NavLink} to='/'> <img src={home_icon} alt='Home' height="30px" style={{borderRadius: "5px"}} /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to='/home'> <Button className='btn btn-danger'> Home </Button> </Nav.Link>
            <Nav.Link as={NavLink} to='/refer-earn'><Button className='btn btn-danger'> Refer and Earn </Button></Nav.Link>
            <Nav.Link as={NavLink} to='/page/about-us'><Button className='btn btn-danger'> About Us </Button></Nav.Link>
            <Nav.Link as={NavLink} to='/contect-me'><Button className='btn btn-danger'> Contect Us </Button></Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Button className='d-flex' variant='outline-success'  onClick={() => handleDownload()}>PLAY BAT NINJA</Button>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;