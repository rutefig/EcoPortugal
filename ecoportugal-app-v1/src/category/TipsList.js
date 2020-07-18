import React from "react";
import {Container, Row, Col, CardColumns, Button} from "react-bootstrap";
import TipsCard from "./TipsCard";

const TipsList = () => {
  return (
    <Container className="cards-list">
      <div className="clearfix p-2">
        <h3 className="list-title float-left">Outras dicas</h3>
        <Button className="float-right" variant="primary">Adicionar</Button>
      </div>
      <CardColumns style={{columnCount: "1"}}>
        <TipsCard />
        <TipsCard />
      </CardColumns>
    </Container>
  );
}

export default TipsList;
