import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const [showAlert, setShowAlert] = useState(true);


    const handleAlertClose = () => {
        setShowAlert(false);
    };

 


    return (
        <div className='register  text-secondary my-0'>
            <br />

            <div>

                {showAlert && (
                    <Alert variant="danger" onClose={handleAlertClose} dismissible>
                        <Alert.Heading>Registeration Disabled</Alert.Heading>
                        <p>
                            If you want to register then contect to admin panel.                        </p>
                        <Button onClick={handleAlertClose} variant="outline-danger">
                            Close
                        </Button>
                    </Alert>
                )}
            </div>
            <div className='container my-5 py-5'>
                <h1>
                    Registeration is disabled.
                </h1>
                <br />   <br />
                <h3>
                    Contect admin panel to register.
                </h3>
                <br />
                <br />
                <h4 className='border mx-5 py-5'> Already have an account  <Link to="/login" >
                <br /><Button variant='outline-primary'> Login</Button>
                </Link></h4>
                <br />   <br />
                <h4 className='border mx-5 py-5'>
                    Want to go back to the Home Page
                    <Link to="/home"><br /> <Button variant='outline-primary'>Return to Home</Button>
                    </Link>
                </h4>

            </div>
        </div>
    );
};

export default Register;