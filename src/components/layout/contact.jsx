import { useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import sendMail from "../services/sendMail";
import { ImgProfile, Enviar } from "../themes/styles/components/contact-styles";
import styled from "styled-components";
import { Alert, Snackbar } from "@mui/material";

export default function Contact(props) {
  const { handleSubmit, register } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
  });

  const [close, setClose] = useState(false);
  const [input, setInput] = useState(false);
  
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

  //function formating name and email
  const formatname = (data) => {
    return data.charAt(0).toUpperCase() + data.slice(1);
  };

  //function to send email
  const onSubmit = (data) => {
    if (data.name === "" || data.email === "" || data.message === "") {
/*       alert("Por favor, complete todos os campos"); */
      setInput(true);
      setClose(true);
      return false;
    } else {
      setClose(false)
      console.log(`dados prenchidos `);
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
    }

  };



  console.log(close);
  return (
    <>
      <Col xs={12} className="d-flex flex-column align-items-center">
        <Col xs>
          <ImgProfile src="https://i.imgur.com/lA8PtvQ.png" alt="avatar" />
        </Col>

        <Col xs>
          <p className="text-break" style={{ "text-align": "center" }}>
            Envie-me uma proposta de entrevista, estou à disposição,
             responderei o mais breve possível.
          </p>
        </Col>

        <StyledForm className="col-12" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className=" mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              type="name"
              controlId="name"
              {...register("name", { max: 3 })}
              placeholder="Insira seu nome"
            />

            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Insira seu email"
              controlId="email"
              {...register("email")}
            />

            <Form.Label>Proposta:</Form.Label>
            <Form.Control
              as="textarea"
              controlId="message"
              placeholder="Me envie uma proposta"
              {...register("message")}
              rows={3}
            />
            <div className="enviar col-auto ">
              <Enviar type="submit" onClick={()=> close ? console.log('false') : props.onClick}>
                Enviar
              </Enviar>
            </div>
          </Form.Group>
        </StyledForm>
      </Col>

      <Snackbar open={close} autoHideDuration={6000 } onClose={()=>setClose(false)}>
        <Alert severity="success" sx={{ width: "100%"}}>
          Email enviado com sucesso!
        </Alert>
      </Snackbar>
    </>
  );
}


