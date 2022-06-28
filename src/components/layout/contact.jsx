import { useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import sendMail from "../services/sendMail";
import {
  ImgProfile,
  Enviar,
} from "../themes/styles/components/contact-styles";
//styled components

export default function Contact( props ) {

  const { handleSubmit, register } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
  });

  const [close , setClose] = useState(false);

  const formatname = (data) => {
    return data.charAt(0).toUpperCase() + data.slice(1);
  };

  const onSubmit = (data) => {
    
    if (data.name === "" || data.email === "" || data.message === "") {
      console.log(`dados não prencidos `);
    } else {
      console.log(`dados prenchidos `);
      setClose(true);
      const email = {
        name: formatname(data.name),
        email: data.email,
        message: data.message,
      };

      console.log(email);

      sendMail
        .post("/send", email)
        .then((res) => {
          console.log(res);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Col xs={12} className="d-flex flex-column align-items-center">
        <Col xs>
          <ImgProfile src="/src/img/Grupo35.png" />
        </Col>

        <Col xs>
          <p className="text-break" style={{ "text-align": "center" }}>
            Me mande uma proposta de reunião ou entrevista, estou a disposição,
            irei retornar contato o mais breve possível.
          </p>
        </Col>

        <Form className="col-12" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className=" mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              type="name"
              controlId="name"
              {...register("name", { max: 3 })}
              placeholder="Insira seu nome ou das sua corporação"
            />

            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="email"
              controlId="email"
              {...register("email")}
            />

            <Form.Label>Proposta:</Form.Label>
            <Form.Control
              as="textarea"
              controlId="message"
              {...register("message")}
              rows={3}
            />

            <div className="enviar col-auto ">
              <Enviar type="submit" onClick={ !close ? null : props.onClick }> Enviar</Enviar>
            </div>
          </Form.Group>
        </Form>
      </Col>
    </>
  );
}
