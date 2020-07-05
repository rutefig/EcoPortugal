import React from "react";
import {Card} from "react-bootstrap";

const PointCard = ({ id, name, location }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{location} 4.3Km</Card.Subtitle>
        <Card.Text>
          <p>Aberto: 9:00 - 22:00</p>
          <p>Visitar Webpage</p>
        </Card.Text>
        <Card.Link href="#">Reportar</Card.Link>
        <Card.Link href="#">Direções</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default PointCard;
