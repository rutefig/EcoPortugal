import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MapContainer from "./MapContainer";
import { Container, Row, Col } from "react-bootstrap";

const RecyclePointPage = () => {

  let { selectedCategory, selectedPoint, coordinates } = useParams();
  let coords = coordinates.split(",");

  // https://janosh.dev/blog/google-maps+react-hooks
  function addMarkers(map, point) {
    const marker = new window.google.maps.Marker({
      map,
      position: point.coords,
      label: point.title,
      title: point.title,
    })
    marker.addListener(`click`, () => {
      window.location.href = point.url
    })
  }

  const point = {
    coords: { lat: parseFloat(coords[1]), lng: parseFloat(coords[0]) },
    title: 'Ponto de Recolha',
    url: `https://www.google.com/maps/dir/?api=1&destination=${coords[1]},${coords[0]}`,
  };

  const mapProps = {
    options: { center: { lat: point.coords.lat, lng: point.coords.lng }, zoom: 16 },
    onMount: addMarkers,
    onMountProps: point,
  }



  return (
    <>
      <h1 className="title">{selectedPoint}</h1>
      <Container fluid>
        <Row>
          <Col md>
            <MapContainer {...mapProps}/>
          </Col>
          <Col md>
            <h3>Neste ponto de recolha pode reciclar:</h3>
            <ul>
              <li>Papel</li>
              <li>Plástico</li>
              <li>Vidro</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default RecyclePointPage;
