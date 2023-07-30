import React from 'react';
import { Col, Form } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AiOutlineSend } from 'react-icons/ai';
import { Button } from '@nextui-org/react';
import { MdError } from 'react-icons/md';
import { IEmail } from '../../interfaces';
import { Snackbar } from '@components';
import { FormMy } from './contact.style';
import SpinnerLoader from './loader';

type Props = {
  avatar?: boolean;
  Submit: (value: boolean) => void;
};

const ContactEmail: React.FC<Props> = ({ avatar, Submit }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IEmail>();

  const [show, setShow] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const [snackbarContent, setSnackbarContent] = React.useState<string>('');
  const [snackbarType, setSnackbarType] = React.useState<boolean>(false);

  //function to send email
  const onSubmit: SubmitHandler<IEmail> = async (data: IEmail) => {
    const { name, email, message } = data;

    const datamail = {
      name: name,
      email: email,
      message: message,
    };

    //send email
    if (datamail) {
      setLoader(true);
      const response = await fetch('/api/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datamail),
      });

      if (response.status === 200) {
        setShow(true);
        setSnackbarType(true);
        setSnackbarContent('Mensagem enviada com sucesso!');
      } else {
        setShow(true);
        setSnackbarType(false);
        setSnackbarContent('Erro ao enviar mensagem!');
      }
    }
  };

  React.useEffect(() => {
    if (show) {
      setTimeout(() => {
        reset({ name: '', email: '', message: '' });
        setShow(false);
        Submit(false);
        setLoader(false);
      }, 3000);
    }
  }, [Submit, reset, show]);

  return (
    <>
      <Col xs={12} className="d-flex flex-column align-items-center">
        {!loader && (
          <>
            {avatar && (
              <>
                <Col xs>
                  <p className="text-break mt-1 text-center">
                    Me mande uma mensagem que entrarei em contato o mais breve
                    possível, se preferir entre em contato pelas redes sociais.
                  </p>
                </Col>
              </>
            )}

            <FormMy className="col-12" onSubmit={handleSubmit(onSubmit)}>
              <Form.Group
                className=" mb-3"
                controlId="exampleForm.ControlInput1"
              >
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
                  placeholder="Me envie uma mensagem"
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
                    Enviar mensagem
                  </Button>
                </div>
              </Form.Group>
            </FormMy>
          </>
        )}

        {loader && <SpinnerLoader bodyMode={avatar ? avatar : false} />}
        {show && (
          <Snackbar
            message={snackbarContent}
            open={true}
            type={snackbarType ? 'success' : 'error'}
            icon={snackbarType ? <AiOutlineSend /> : <MdError />}
          />
        )}
      </Col>
    </>
  );
};

export default ContactEmail;
