import React from 'react';
import { Col, Form } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Button } from '@nextui-org/react';

/* import IMGPROFILE from ".../img/avatar.png"; */

/* interfaces */

import { IEmail } from '../../interfaces';
import { AiOutlineSend } from 'react-icons/ai';
import { Avatar } from '../../components';
import { FormMy } from './contact.style';
/* import Avatar from '../avatar.component'; */

export default function ContactEmail({ avatar }: { avatar?: boolean }) {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<IEmail>();

  //function to send email
  const onSubmit: SubmitHandler<IEmail> = (data: IEmail) => {
    console.log(data);
  };

  React.useEffect(() => {}, [errors]);

  return (
    <>
      <Col
        xs={12}
        className="d-flex flex-column align-items-center"
        /* style={{ width: withResponsive('100%', '50%') }} */
      >
        {avatar && (
          <>
            {/* <Avatar squared src={`123`} css={{ size: "$20" }} /> */}
            <Avatar mobile={true} />
            <Col xs>
              <p className="text-break mt-1">
                Envie-me uma proposta de entrevista, estou à disposição,
                responderei o mais breve possível.
              </p>
            </Col>
          </>
        )}

        <FormMy className="col-12" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className=" mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              type="name"
              {...register('name', {
                required: true,
                minLength: 3,
                maxLength: 20,
                pattern: /^[a-z ,.'-]+$/i,
              })}
              placeholder={'Digite seu nome'}
              style={{
                border: `${
                  errors.name ? '2px solid #f51717' : '1px solid #ccc'
                }`,
              }}
            />

            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              {...register('email', {
                required: true,
                minLength: 3,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              placeholder="Digite seu email"
              style={{
                border: `${
                  errors.email ? '2px solid #f51717' : '1px solid #ccc'
                }`,
              }}
            />
            <Form.Label>Proposta:</Form.Label>
            <Form.Control
              rows={3}
              as="textarea"
              {...register('message', {
                required: true,
                maxLength: 200,
              })}
              placeholder="Me envie uma proposta"
              style={{
                border: `${
                  errors.message ? '2px solid #f51717' : '1px solid #ccc'
                }`,
              }}
            />
            <div className="enviar col-auto ">
              <Button
                auto
                icon={<AiOutlineSend />}
                type="submit"
                css={{ width: '100%', marginTop: '20px' }}
              >
                emviar mensagem
              </Button>
            </div>
          </Form.Group>
        </FormMy>
      </Col>
    </>
  );
}
