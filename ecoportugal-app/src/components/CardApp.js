import React from "react";
import {Card} from "react-bootstrap";

const CardApp = (props) => {
    return (
        <a href="">
            <Card className="shadow rounded p-3 mt-3 grow">
                <Card.Img variant="top" src={`https://robohash.org/${props.id}?200x200`} />
                <Card.Body>
                    <Card.Title className="text-center">{props.name}</Card.Title>
                </Card.Body>
            </Card>
        </a>
    );
}

export default CardApp;
