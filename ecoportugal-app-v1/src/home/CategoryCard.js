import React from "react";
import {Card} from "react-bootstrap";

const CategoryCard = props => {
  const { id, name, icon } = props;

  return (
    <a href={process.env.PUBLIC_URL + name}>
        <Card className={'shadow rounded p-3 mt-3 grow text-center'}>
            <Card.Img variant="top" className="icon" src={icon} style={{width:"150px"}}/>
            <Card.Body>
                <Card.Title className="text-center text-dark">{name}</Card.Title>
            </Card.Body>
        </Card>
    </a>
  );
}

export default CategoryCard;
