import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MapContainer from "./MapContainer";
import { Container, Row, Col } from "react-bootstrap";

const RecyclePointPage = () => {
  const [location, setLocation] = useState({});
  const [mapProps, setMapProps] = useState({});

  // Conteudo retirado do seguinte link: https://www.youtube.com/watch?v=6WB16wZS61c
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePositionReceived);

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  function handlePositionReceived({ coords }) {
    const { latitude, longitude } = coords;

    setLocation({ latitude, longitude });
  }

  let { selectedCategory, selectedPoint, coordinates } = useParams();
  let coords = coordinates.split(",");

  // https://janosh.dev/blog/google-maps+react-hooks
  function addMarkers(map, points) {
    points.forEach((point, index) => {
      const marker = new window.google.maps.Marker({
        map,
        position: point.coords,
        label: point.title,
        title: point.title,
      })
      marker.addListener(`click`, () => {
        window.location.href = point.url
      })
    });

  }

  const point = {
    coords: { lat: parseFloat(coords[1]), lng: parseFloat(coords[0]) },
    title: 'Ponto de Recolha',
    url: '',
  };

  useEffect(() => {
    // atualizar as props do mapa
    const locationMarker = {
      coords: { lat: location.latitude, lng: location.longitude },
      title: 'Minha Localização',
      url: '',
    }
    setMapProps({
      options: { center: { lat: 38.7166700, lng: -9.1333300 }, zoom: 12 },
      onMount: addMarkers,
      onMountProps: [locationMarker, point]
    });
  }, [location])



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
