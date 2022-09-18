import React from 'react';
import { Container } from '../themes/styles/pages/home.style';
import { Col } from 'react-bootstrap';

import Avatar from '@components/avatar.component';
import ModalComponent from '@components/modal';

import Typewriter from 'react-ts-typewriter';

export default function Home() {
  const [show, setShow] = React.useState(false);
  const [show2, setShow2] = React.useState(false);

  window.addEventListener('dblclick', () => {
    setShow2(true);
    setShow(true);
  });

  return (
    <Container>
      <Col xs="auto">
        <Avatar />
      </Col>

      <Col xs={12} className="p-2">
        <Typewriter
          text={['Olá, eu sou', 'Maicon Gabriel Alves']}
          delay={1000 || 0}
          cursor={false}
          onFinished={() =>
            setTimeout(() => {
              setShow(true);
            }, 2000)
          }
        />

        <br />
        {show && (
          <Col xs={12} className="p-2 text-dev">
            <Typewriter
              text={['UI Design', 'Illustration', 'Front-end Developer']}
              delay={1000}
              cursor={true}
              onFinished={() =>
                setTimeout(() => {
                  setShow2(true);
                }, 2000)
              }
            />
          </Col>
        )}

        {show2 && (
          <Col
            xs={12}
            className="p-2 btn-contact d-flex justify-content-center"
          >
            <ModalComponent>
              <h1>teste</h1>
            </ModalComponent>
          </Col>
        )}
      </Col>
    </Container>
  );
}
