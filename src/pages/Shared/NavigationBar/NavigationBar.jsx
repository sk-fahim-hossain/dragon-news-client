import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProviders';

const NavigationBar = () => {
    const { user,logOut } = useContext(AuthContext)
    const handleLogOut =()=>{
        logOut()
        .then()
        .catch(error => console.log(error))
    }
    return (
        <Container className="mb-4">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">
                                <Link to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#features">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>

                        </Nav>
                        <Nav>
                            {user && <Nav.Link href="#deets"><FaRegUserCircle title={user?.email} style={{ fontSize: '2rem' }}></FaRegUserCircle> <span>{user.email}</span></Nav.Link>}

                            {user ?
                                <Button onClick={handleLogOut} variant="secondary">Log Out</Button> :
                                <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;