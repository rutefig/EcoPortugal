import React from "react";
import {Card} from "react-bootstrap";

const CategoryCard = (props) => {
    return (
        <a href={props.name}>
            <Card className="shadow rounded p-3 mt-3 grow">
                <Card.Img variant="top" src={`https://robohash.org/${props.id}?200x200`} />
                <Card.Body>
                    <Card.Title className="text-center">{props.name}</Card.Title>
                </Card.Body>
            </Card>
        </a>
    );
}

export default CategoryCard;