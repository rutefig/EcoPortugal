import React from "react";
import {Card} from "react-bootstrap";

const CategoryCard = (props) => {
    const { id, name, color } = props;
    let className = 'background-color: red';
    console.log(className);
    return (
        <a href={name}>
            <Card className={'shadow rounded p-3 mt-3 grow'} style={{className}}>
                <Card.Img variant="top" src={`https://robohash.org/${id}?200x200`} />
                <Card.Body>
                    <Card.Title className="text-center text-dark">{name}</Card.Title>
                </Card.Body>
            </Card>
        </a>
    );
}

export default CategoryCard;