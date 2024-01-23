import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(true);

    const handleAlertClose = () => {
        setShowAlert(false);
    };

    async function submitHandler(e) {
        e.preventDefault();
        if (email.length < 9) {
            window.alert("enter a valid email");
            return;
        };
        if (password.length < 6) {
            window.alert("enter a strong password");
            return;
        };
        const jsonData = await fetch('https://brief-polished-radar.glitch.me/login-user', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        const data = await jsonData.json();
        if (!data.status) {
            window.alert(data.message);
        } else {
            localStorage.setItem("token", data.token);
            localStorage.setItem("userId", data.user.userId);
            localStorage.setItem("name", data.user.name);
            localStorage.setItem("isLoggedIn", true);
            setTimeout(() => {
                window.location.href = '/home';
            }, 500);
        };
    };

    return (
        <div className='from-inherit login text-secondary' >

            <br />

            <div>

                {showAlert && (
                    <Alert variant="danger" onClose={handleAlertClose} dismissible>
                        <Alert.Heading>Login Carefully</Alert.Heading>
                        <p>
                            Three wrong attempt can block your account forever.
                        </p>
                        <Button onClick={handleAlertClose} variant="outline-danger">
                            Close
                        </Button>
                    </Alert>
                )}
            </div>


            <Form style={{ display: "inline-block", border: "1px solid transparent", margin: "60px auto", padding: "30px" }}>
                {/* email --  */}
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>


                {/* password --  */}
                <Form.Group className="mb-3" controlId="formBasicPassword" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Form.Text id="passwordHelpBlock" muted>
                        Your password must be 8-20 characters long. 
                    </Form.Text>
                </Form.Group>


                {/* checkbox -- */}
                <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                    <Form.Check type="checkbox" label="Keep me Logged-in" />
                </Form.Group>

                {/* button --  */}
                <Button className='mb-3' variant="outline-success" onClick={(e) => submitHandler(e)} >
                    Login
                </Button>
                <br /> <br />
                < h4 className='border py-4' >New user <Link to='/register' > <Button className='btn' variant='outline-primary'>Register here</Button></Link></h4>

            </Form>
        </div>
    );
};

export default Login;