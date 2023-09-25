import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false)


    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;


        console.log(name, email, password, photo);
        createUser(email, password)
            .then(result => {
                const createdUser = result.user
                console.log(createdUser);
            })
            .catch(error => console.log(error))

    }

    const handleCheck = event =>{
        setAccepted(event.target.checked)
    }

    return (
        <Container className='w-25 mx-auto bg-light mt-4 p-4'>
            <h3>Register</h3>
            <hr />
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                    onClick={handleCheck}
                        type="checkbox"
                        name="accept"
                        label={<>Accept<Link to="/terms">Terms and Conditions</Link></>}
                    />
                </Form.Group>

                <Button disabled={!accepted} variant="primary" type="submit" className='w-100'>
                    Register
                </Button>

                <Form.Text  className="text-muted d-block text-center">
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