import React from 'react';
import { Col, Form } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import IMGPROFILE from '@img/avatar.png';

/* interfaces */

import { IEmail } from '@interfaces/email.interface';
import { Avatar, Button } from '@nextui-org/react';
import { AiOutlineSend } from 'react-icons/ai';
import withResponsive from '../sizeresponsive/withresponsive.component';
/* import Avatar from '../avatar.component'; */

export default function ContactEmail({ avatar }: { avatar?: boolean }) {
  const { handleSubmit, register } = useForm<IEmail>();

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
  const onSubmit: SubmitHandler<IEmail> = (data: IEmail) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <Col
        xs={12}
        className="d-flex flex-column align-items-center"
        style={{ width: withResponsive('100%', '50%') }}
      >
        {avatar && (
          <>
            <Avatar squared src={`${IMGPROFILE}`} css={{ size: '$20' }} />
            <Col xs>
              <p className="text-break mt-1">
                Envie-me uma proposta de entrevista, estou à disposição,
                responderei o mais breve possível.
              </p>
            </Col>
          </>
        )}

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
              {...register('email')}
              placeholder="Insira seu email"
            />

            <Form.Label>Proposta:</Form.Label>
            <Form.Control
              rows={3}
              as="textarea"
              {...register('message')}
              placeholder="Me envie uma proposta"
            />
            <div className="enviar col-auto ">
              <Button
                auto
                icon={<AiOutlineSend />}
                type="submit"
                css={{ width: '100%', marginTop: '30px' }}
              >
                emviar mensagem
              </Button>
            </div>
          </Form.Group>
        </StyledForm>
      </Col>
    </>
  );
}
