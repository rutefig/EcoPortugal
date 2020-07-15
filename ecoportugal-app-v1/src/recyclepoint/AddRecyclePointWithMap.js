import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { waste_types } from "../data/waste_types";
import MapContainer from "./MapContainer";

const AddRecyclePointWithMap = () => {

  const [wasteCategories, setWasteCategories] = useState(waste_types);

  const [location, setLocation] = useState({});

  // Conteudo retirado do seguinte link: https://www.youtube.com/watch?v=6WB16wZS61c
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePositionReceived);

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  function handlePositionReceived({ coords }) {
    const { latitude, longitude } = coords;

    setLocation({ latitude, longitude });
  }

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
    coords: { lat: location.latitude, lng: location.longitude },
    title: '',
    url: '',
  };

  const mapProps = {
    options: { center: { lat: 38.7166700, lng: -9.1333300 }, zoom: 12 },
    onMount: addMarkers,
    onMountProps: point,
  }

  return (
    <>
      <h1 className="title">Add Recycle Point With Location</h1>
      <Container fluid>
        <Row>
          <Col>
            <MapContainer {...mapProps} />
          </Col>
          <Col>
            <p className="form-information">Por favor tenha atenção que estes dados serão confirmados,
            por favor coloque tudo o mais certo possível de forma a
            facilitar a nossa confirmação. Todos os campos são obrigatórios</p>
          <Form>
            <Form.Group controlId="formName">
              <Form.Control type="text" placeholder="Nome" />
              <Form.Text className="text-muted">
                * Required
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Localidade" />
              <Form.Text className="text-muted">
                * Required
              </Form.Text>
            </Form.Group>
            <Form.Group>
              {wasteCategories.map((value) => (
                <div key={value.name} className="mb-3">
                  <Form.Check
                    type='checkbox'
                    id={`checkbox-${value.name}`}
                    label={value.name}
                  />
                </div>
              ))}
            </Form.Group>
          </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddRecyclePointWithMap;
