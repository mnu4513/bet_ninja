import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import home_icon from '../assets/img/home_icon.webp';



function NavScrollExample() {

    const [loggedIn, setLoggedIn] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {

    }, [loggedIn]);

    function logout() {
        localStorage.clear();
        setLoggedIn(false);
        navigate("/home")
    };

    return (
        <Navbar bg="light" expand="lg" className='navbar'>
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/"><img src={home_icon} width={130} height={40} alt='home'/> </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        {/* <Nav.Link to="/action2"> {user.name} </Nav.Link> */}
                        <NavDropdown title="Opions" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={NavLink} to="/popular-movies" >Popular</NavDropdown.Item>
                           

                            <NavDropdown.Divider />
                        </NavDropdown>

                    </Nav>
                    <Form className="d-flex">


                        {
                            localStorage.getItem('name') ?
                                <Button variant='outline-danger' className='mx-3'> {localStorage.getItem('name')} </Button> :
                                null
                        }


                        {
                            !localStorage.getItem('isLoggedIn') ?
                                <Button variant="outline-primary" as={NavLink} to='/login'>Login</Button> :
                                <Button variant="outline-danger" type='submit' onClick={() => logout()} >Logout</Button>
                        }

                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavScrollExample;