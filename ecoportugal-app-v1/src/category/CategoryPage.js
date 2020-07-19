import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
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
      <Container fluid className="device-big">
        <Row>
          <Col>
            <PointsList location={location} category={selectedCategory}/>
          </Col>
          <Col>
            <TipsList />
          </Col>
        </Row>
      </Container>

      <Container fluid className="device-small">
        <Tabs defaultActiveKey="points">
          <Tab eventKey="points" title="Pontos">
            <PointsList location={location} category={selectedCategory}/>
          </Tab>
          <Tab eventKey="tips" title="Dicas">
            <TipsList />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

export default CategoryPage;
