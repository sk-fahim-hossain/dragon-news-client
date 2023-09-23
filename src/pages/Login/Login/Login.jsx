import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <Container className='w-25 mx-auto bg-light mt-4 p-4'>
            <h3>Login</h3>
            <hr />
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>

                
                <Button variant="primary" type="submit" className='w-100'>
                    Login
                </Button>

                <Form.Text className="text-muted d-block text-center">
                    Don't Have an Account ? <Link to="/register" className='text-danger text-decoration-none'>Register</Link>
                </Form.Text>
                <Form.Text className="text-muted">

                </Form.Text>
                <Form.Text className="text-muted">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;