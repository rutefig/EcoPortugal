import React from "react";
import { Card } from "react-bootstrap";

const PointCard = ({ id, name, location, distance, coords }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{location}</Card.Subtitle>
        <Card.Text>
          Distância: {distance} km
        </Card.Text>
        <Card.Link href="#">Reportar</Card.Link>
        <Card.Link href={`${document.URL}/${name}-${location}/${coords}`}>Direções</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default PointCard;
