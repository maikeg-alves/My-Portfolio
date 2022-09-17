import React from 'react';
import { Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

/* interfaces */

import { IEmail } from '@interfaces/email.interface';

export default function contactEmail() {
  const { handleSubmit, register } = useForm<IEmail>();

  const [close, setClose] = React.useState(false);
  const [input, setInput] = React.useState(false);

  //styles for the inputs
  const StyledForm = styled(Form)`
    input,
    textarea {
      width: 100%;
      height: 40px;
      border-radius: 4px;
      padding: 0 10px;
      margin-bottom: 10px;
      border: ${!input ? `1px solid #656565` : `2px solid #ff0000`};
    }
    textarea {
      height: 100px;
    }
  `;

  //function to send email
  const onSubmit = (data: IEmail) => {
    console.log(data);
  };

  return (
    <>
      <Col xs={12} className="d-flex flex-column align-items-center">
        <Col xs>{/* imagem do avatar */}</Col>

        <Col xs>
          <p className="text-break">
            Envie-me uma proposta de entrevista, estou à disposição, responderei
            o mais breve possível.
          </p>
        </Col>

        <StyledForm className="col-12" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className=" mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              type="name"
              {...register('name', { max: 3 })}
              placeholder="Insira seu nome"
            />

            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Insira seu email"
              {...register('email')}
            />

            <Form.Label>Proposta:</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Me envie uma proposta"
              {...register('message')}
              rows={3}
            />
            <div className="enviar col-auto ">
              {/* botão de envio do formulario */}

              {/*  <Enviar type="submit" onClick={()=> close ? null : props.onClick}>
                Enviar
              </Enviar> */}
              <button type="submit">Enviar</button>
            </div>
          </Form.Group>
        </StyledForm>
      </Col>
    </>
  );
}
