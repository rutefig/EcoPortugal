import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PointsList from "./PointsList";
import TipsList from "./TipsList";

const CategoryPage = () => {
  let { selectedCategory } = useParams();

  const [location, setLocation] = useState({});


  // TODO: Confirmar o will unmount
  // Conteudo retirado do seguinte link: https://www.youtube.com/watch?v=6WB16wZS61c
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePositionReceived);

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  function handlePositionReceived({ coords }) {
    const { latitude, longitude } = coords;

    setLocation({ latitude, longitude });
  }

  return (
    <>
      <h1 className="title">{selectedCategory}</h1>
      <Container fluid>
        <Row>
          <Col>
            <PointsList location={location}/>
          </Col>
          <Col>
            <TipsList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CategoryPage;
