import React from "react";
import { Form } from "react-bootstrap";

const AddRecyclePoint = () => {
  return (
    <>
      <h1 className="title">Adicionar Ponto de Recolha com Morada</h1>
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
    </Form>
    </>
  );
}

export default AddRecyclePoint;
