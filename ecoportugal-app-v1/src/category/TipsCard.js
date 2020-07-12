import React from "react";
import {Card} from "react-bootstrap";

// TODO: Ver como meter a imagem do lado esquerdo como deve ser

const TipsCard = () => {
  return (
    <Card>
      <Card.Img variant="left" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>Some Place</Card.Title>
        <Card.Text>
          Uma breve descrição do local e assim por diante
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TipsCard;
