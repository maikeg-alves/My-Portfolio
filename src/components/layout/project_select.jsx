import { useState } from "react";
import { Button, Col, Container, Modal, Row, Stack } from "react-bootstrap";
import "./project_select.css";
export default function ProjectModal({ idname }) {
  
  return (
    <>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container lg>
          <Row>
            <Col className="d-flex justify-content-between">
              <Col xs={6}>
                <Col xs={12}>
                  <h1>Project Name {idname}</h1>
                </Col>
                <Col xs={12}>
                  <p>project date</p>
                </Col>
                <div>
                  <p className="text-brek">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum is therefore always free from
                    repetition, injected humour, or non-characteristic words
                    etc.
                  </p>
                </div>
                <div>
                  <button>Audio project description</button>
                </div>
              </Col>
              <Col xs={5}>
                <div>
                  <p>video demostration project</p>
                </div>
                <div className="video_style">
                  <img src="/src/img/prototipo.png" alt="" />
                </div>
                <Stack direction="horizontal" gap={2}>
                  <Stack gap={3}>
                    <a href="">Link do repositorio</a>
                    <p>tempo do projeto</p>
                    <p>ultima atualização</p>
                  </Stack>
                  <div>
                    <p>dificuldade</p>
                  </div>
                </Stack>
                <div>
                  <p>tecnologias</p>
                  <Stack direction="horizontal" gap={3}>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                  </Stack>
                </div>
              </Col>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </>
  );
}
