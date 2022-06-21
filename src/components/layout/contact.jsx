import { Col, Form, Modal } from "react-bootstrap";
import "./contact.css";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import sendMail from "../services/sendMail";
import { Box, Typography } from "@mui/material";
//styled components
const Enviar = styled.button`
  padding: 10px 44% 10px 45% !important;
  background-color: transparent;
  border-radius: 10px;
  border: solid 1px #656565;
  color: #000000;
  margin-top: 10px;
  &:hover {
    background-color: #000000;
    color: #ffffff;
    transition: 0.5s ease;
  }
`;

const ImgProfile = styled.img`
  height: 80pt;
  width: 80pt;
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: "19px",
  color: "black"
};

export default function Contact({testedefuncion}) {
  const { handleSubmit, register } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
  });

  const formatname = (data) => {
    return data.charAt(0).toUpperCase() + data.slice(1);
  };

  const onSubmit = (data) => {
    if (data.name === "" || data.email === "" || data.message === "") {
      console.log(`dados não prencidos `);

    } else {
      console.log(`dados prenchidos `);

      const email = {
        name: formatname(data.name),
        email: data.email,
        message: data.message,
      };

      console.log(email);

      testedefuncion(data);

      sendMail.post("/send", email)
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
      <Box  sx={style}>
        <Col xs={12} className="Row_Contact">
          
         <Col xs>
            <ImgProfile src="/src/img/Grupo35.png" />
          </Col>

          <Col xs>
          <p className="text-break" style={{"text-align": "center"}}>
              Me mande uma proposta de reunião ou entrevista, estou a
              disposição, irei retornar contato o mais breve possível.
            </p>
          </Col>

          <Form className="col-12" onSubmit={handleSubmit(onSubmit) }>
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
                <Enviar type="submit" > Enviar</Enviar>
              </div>
            </Form.Group>
          </Form>
        </Col>
  </Box>
    </>
  );
}
