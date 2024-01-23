// StyledNavbar.js
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import an from '../assets/img/android.png';
import home_icon from '../assets/img/home_icon.webp';
import { appUrl } from './home/Config';

const StyledNavbar = () => {

    const handleDownload = () => {
        const githubRawURL = {appUrl};
        const a = document.createElement('a');
        a.href = githubRawURL;
        a.download = 'bet-ninja.apk'; // Specify the filename
        a.click();
    };

    const navbarStyle = {
        backgroundImage: "url('../assets/img/bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const anStyle = {
        height: "30px",
        borderRadius: "15px",
        marginRight: "15px"
    }

    const homeStyle = {
        marginLeft: "55px"
    }

    return (
        <>
            <Navbar bg="dark"  variant="dark" expand="md" fixed="top" >
                <Container style={navbarStyle}>
                <Navbar.Brand as={NavLink} to='/'> <img src={home_icon} alt='Home' height="30px" style={{borderRadius: "5px"}} /> </Navbar.Brand>

                    {/* <Navbar.Brand as={NavLink} to="/"><img src={home} alt="LOGO" style={homeStyle}/></Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link as={NavLink} to="/home"><Button className='btn btn-danger'>Home</Button></Nav.Link>
                            <Nav.Link as={NavLink} to="/page/about-us"><Button className='btn btn-danger'>About</Button></Nav.Link>
                            <Nav.Link as={NavLink} to="/contact-me"><Button className='btn-danger'>Contact</Button></Nav.Link>
                            <Nav.Link as={NavLink} to="/policy/refer-earn"><Button className='btn-danger'>Refer Earn</Button></Nav.Link>
                        </Nav>

                  
                            <Button className='e-flex' variant='outline-success' onClick={() => handleDownload()} style={homeStyle}> <img src={an} alt="an" style={anStyle}/> PLAY</Button>
                      
                    </Navbar.Collapse>
                </Container><br /><br />
            </Navbar>
            <br />
            <br />
            <br />
        </>
    );
};

export default StyledNavbar;
