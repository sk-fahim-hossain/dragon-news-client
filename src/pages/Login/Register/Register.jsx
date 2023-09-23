import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <Container className='w-25 mx-auto bg-light mt-4 p-4'>
            <h3>Register</h3>
            <hr />
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Your Name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Photo URL" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter Password" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name="accept" label="Accept Term & Conditions" required/>
                </Form.Group>

                <Button variant="primary" type="submit" className='w-100'>
                    Register
                </Button>

                <Form.Text className="text-muted d-block text-center">
                    Already Have an Account? <Link to="/login" className='text-danger text-decoration-none'>Login</Link>
                </Form.Text>
                <Form.Text className="text-muted">

                </Form.Text>
                <Form.Text className="text-muted">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;