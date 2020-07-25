import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { waste_types } from "../data/waste_types";
import MapContainer from "./MapContainer";
import { useParams } from "react-router-dom";

const AddRecyclePointWithMap = () => {

  const { selectedCategory } = useParams();

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
    title: 'A Minha Localização',
    url: '',
  };

  const mapProps = {
    options: { center: { lat: location.latitude, lng: location.longitude }, zoom: 12 },
    onMount: addMarkers,
    onMountProps: point,
  }

  const { register, errors, handleSubmit } = useForm();
  const onSubmit = data => {
    // Save data
    handleShow();
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h1 className="title">Adicionar Ponto de Recolha</h1>
      <Container fluid>
        <Row>
          <Col md>
            <MapContainer {...mapProps} />
          </Col>
          <Col md>
            <p className="form-information">Por favor tenha atenção que estes dados serão confirmados,
            por favor coloque tudo o mais certo possível de forma a
            facilitar a nossa confirmação. Todos os campos são obrigatórios</p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formName">
              <Form.Text className="text-danger">
                {errors?.name && "Este campo é obrigatório"}
              </Form.Text>
              <Form.Control type="text" placeholder="Nome" name="name" ref={register({required: true})}/>
              <Form.Text className="text-muted">
                * Required
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Text className="text-danger">
                {errors?.city && "Este campo é obrigatório"}
              </Form.Text>
              <Form.Control type="text" placeholder="Localidade" name="city" ref={register({required: true})}/>
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
                    name={value.name}
                    ref={register}
                  />
                </div>
              ))}
            </Form.Group>
            <Button className="float-right" type="submit">Confirmar</Button>
          </Form>
          <Button variant="secondary" href={`/${selectedCategory}`}>Cancelar</Button>
          </Col>
        </Row>
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
        <Modal.Header closeButton>
          <Modal.Title>Ponto de Recolha Adicionado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          O Ponto de Recolha que adicionou será adicionado assim que for confirmado pela nossa equipa.
          Obrigada pela sua colaboração. Juntos fazemos Portugal um país mais verde!
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddRecyclePointWithMap;
