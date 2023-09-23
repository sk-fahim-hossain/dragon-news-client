import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaArrowLeft } from 'react-icons/fa';
import EditorsInsight from '../EditorsInsigth/EditorsInsight';

const News = () => {
    const news = useLoaderData()
    const { _id, title, details, image_url, category_id } = news;
    return (
        <div>
            <div>
                <Card >
                    <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <Link to={`/category/${category_id}`}> <Button variant="danger"><FaArrowLeft></FaArrowLeft>All news in this category</Button></Link>
                    </Card.Body>
                </Card>
            </div>
            <EditorsInsight></EditorsInsight>
        </div>
    );
};

export default News;