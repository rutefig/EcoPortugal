import React, { useState } from "react";
import { Form, Col, Row, Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { waste_types } from "../data/waste_types";
import { Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";

const AddRecyclePoint = () => {

  const { selectedCategory } = useParams();
  const [wasteCategories, setWasteCategories] = useState(waste_types);

  const { register, errors, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    handleShow();
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleExit = () => {
    return <Redirect to="/" />
  }

  return (
    <>
      <h1 className="title">Adicionar Ponto de Recolha com Morada</h1>
      <p className="form-information">Por favor tenha atenção que estes dados serão confirmados,
      por favor coloque tudo o mais certo possível de forma a
      facilitar a nossa confirmação.</p>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formName">
          <Form.Text className="text-danger">
            {errors?.name && "Este campo é obrigatório"}
          </Form.Text>
          <Form.Control type="text" placeholder="Nome do Local" name="name" ref={register({required: true})}/>
          <Form.Text className="text-muted">
            * Required
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Text className="text-danger">
            {errors?.city && "Este campo é obrigatório"}
          </Form.Text>
          <Form.Control type="text" placeholder="Localidade" name="city" ref={register({required: true})} />
          <Form.Text className="text-muted">
            * Required
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formCategories" name="categories" ref={register({required: true})}>
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

        <Form.Group controlId="formAddress">
          <Row>
            <Col>
              <Form.Text className="text-danger">
                {errors?.streetAdd && "Este campo é obrigatório"}
              </Form.Text>
              <Form.Control type="text" placeholder="Rua" name="streetAdd" ref={register({required: true})} />
              <Form.Text className="text-muted">
                * Required
              </Form.Text>
            </Col>
            <Col>
              <Form.Text className="text-danger">
                {errors?.numberAdd && "Este campo é obrigatório"}
              </Form.Text>
              <Form.Control type="text" placeholder="Nº" name="numberAdd" ref={register({required: true})} />
                <Form.Text className="text-muted">
                  * Required
                </Form.Text>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formWebsite">
          <Form.Control type="text" placeholder="Website" name="website" ref={register({required: false})} />
        </Form.Group>
        <Button className="float-right" variant="primary" type="submit">Confirmar</Button>
      </Form>
      <br />
      <Button variant="secondary" href={`/${selectedCategory}`}>Cancelar</Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        onExiting={handleExit}
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

export default AddRecyclePoint;
