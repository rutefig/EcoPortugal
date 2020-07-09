import React from "react";
import {Container, CardColumns, Button} from "react-bootstrap";
import PointCard from "./PointCard";

const PointsList = ({ recycling_points, distances }) => {

  return (
    <Container className="cards-list">
      <h3>Pontos de Recolha</h3>
      <Button variant="primary">Adicionar</Button>
      <CardColumns>
        {
          recycling_points.map((value, index) => {
            return (
              <PointCard
                key={index}
                id={recycling_points[index].id}
                name={recycling_points[index].properties.TPRS_DESC}
                location={recycling_points[index].properties.FRE_AB}
                distance={distances[index]}
              />
            );
          })
        }
      </CardColumns>
    </Container>
  );
}

export default PointsList;
