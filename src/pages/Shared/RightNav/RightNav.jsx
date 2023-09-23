import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div className='mt-4'>
            <div>
                <h4>Login With</h4>
                <Button className='mb-2' variant="outline-primary"><FaGoogle />Login With Google</Button>
                <Button variant="outline-secondary"><FaGithub></FaGithub>Login With Github</Button>
            </div>
            <br />
            <div>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook />Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram>Instagram</ListGroup.Item>

                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>

        </div>
    );
};

export default RightNav;