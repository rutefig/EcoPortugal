import React from "react";
import {Card} from "react-bootstrap";

const CardApp = (props) => {
    return (
        <Card className="shadow rounded p-3 mt-3 w-25">
            <Card.Img variant="top" src={`https://robohash.org/${props.id}?200x200`} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default CardApp;
