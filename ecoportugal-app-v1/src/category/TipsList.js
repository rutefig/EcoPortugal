import React from "react";
import {Container, CardColumns, Button} from "react-bootstrap";
import TipsCard from "./TipsCard";

const TipsList = () => {
  return (
    <Container className="cards-list">
      <h3>Outras dicas</h3>
      <Button variant="primary">Adicionar</Button>
      <CardColumns>
        <TipsCard />
        <TipsCard />
        <TipsCard />
      </CardColumns>
    </Container>
  );
}

export default TipsList;
