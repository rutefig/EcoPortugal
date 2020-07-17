import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { waste_types } from "../data/waste_types";

const AddRecyclePoint = () => {

  const [wasteCategories, setWasteCategories] = useState(waste_types);

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
      <h1 className="title">Adicionar Ponto de Recolha com Morada</h1>
      <p className="form-information">Por favor tenha atenção que estes dados serão confirmados,
      por favor coloque tudo o mais certo possível de forma a
      facilitar a nossa confirmação. Todos os campos são obrigatórios</p>

    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formName">
        <Form.Control type="text" placeholder="Nome" name="name" ref={register}/>
        <Form.Text className="text-muted">
          * Required
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder="Localidade" name="city" ref={register} />
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

      <Form.Group controlId="formAddress">
        <Row>
          <Col>
            <Form.Control type="text" placeholder="Rua" name="streetAdd" ref={register} />
            <Form.Text className="text-muted">
              * Required
            </Form.Text>
          </Col>
          <Col>
            <Form.Control type="text" placeholder="Nº" name="numberAdd" ref={register} />
              <Form.Text className="text-muted">
                * Required
              </Form.Text>
          </Col>
        </Row>
      </Form.Group>
      <Form.Group controlId="formWebsite">
        <Form.Control type="text" placeholder="Website" name="website" ref={register} />
        <Form.Text className="text-muted">
          * Required
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">Confirmar</Button>
    </Form>

     <br />
    <Button variant="secondary">Cancelar</Button>
    </>
  );
}

export default AddRecyclePoint;
