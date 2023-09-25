import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';


const Login = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/category/0'
    console.log('login page location',location)

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from, {replace:true})
        })
        .catch(error => console.log(error))
        console.log(email, password);
    }
    return (
        <Container className='w-25 mx-auto bg-light mt-4 p-4'>
            <h3>Login</h3>
            <hr />
            <Form onSubmit={handleLogin }>
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