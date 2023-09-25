import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h3>Terms and Conditions</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam totam reiciendis aliquid est excepturi facilis, nobis sint amet cum qui eos, magni porro, in corporis optio esse architecto fuga.</p>
            <p>Go back <Link to="/register">Register</Link></p>
        </Container>
    );
};

export default Terms;