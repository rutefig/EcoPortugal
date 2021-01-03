import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";


const SuggestionPage = () => {

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleExit = () => {
    return <Redirect to="/" />
  }

  return (
    <>
      <h1 className="title">Sugestões</h1>
      <p className="form-information">
        Envia-nos as tuas sugestões
      </p>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formName">
          <Form.Text>
            {errors?.name && "Este campo é obrigatório"}
          </Form.Text>
          <Form.Control type="text" placeholder="Nome Próprio" name="name" />
          <Form.Text className="text-muted">
            * Required
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Text>
            {errors?.name && "Este campo é obrigatório"}
          </Form.Text>
          <Form.Control type="email" placeholder="O teu Email" name="name" />
          <Form.Text className="text-muted">
            * Required
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formSuggestion">
          <Form.Text>
            {errors?.name && "Este campo é obrigatório"}
          </Form.Text>
          <Form.Control as="textarea" rows={3} placeholder="As tuas sugestões" name="name" />
          <Form.Text className="text-muted">
            * Required
          </Form.Text>
        </Form.Group>
        <Button className="float-right" variant="primary" type="submit">Submeter</Button>
      </Form>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        onExiting={handleExit}
        >
        <Modal.Header closeButton>
          <Modal.Title>As tuas sugestões foram enviadas!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Obrigada pelas tuas sugestões! Vamos analisá-las e posteriormente iremos
          enviar feedback. Está atento ao email para receberes informações da nossa equipa!
        </Modal.Body>
      </Modal>
    </>
  );
}


export default SuggestionPage;
