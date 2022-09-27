import React from 'react';
import Typewriter from 'typewriter-effect';
import { Col } from 'react-bootstrap';

import { Avatar, ContactEmail, ModalComponent } from '@components';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const [show, setShow] = React.useState(false);
  const [show2, setShow2] = React.useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('dblclick', () => {
      setShow2(true);
      setShow(true);
    });
  }

  return (
    <>
      <Col xs={12} className="d-flex flex-column align-items-center">
        <Col xs={'auto'}>
          <Avatar />
        </Col>

        <Col
          xs={'auto'}
          className="p-2 btn-contact d-flex justify-content-center"
          style={{ fontSize: '20px' }}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Olá, eu sou')
                .pauseFor(500)
                .deleteAll()
                .typeString('Maicon Gabriel Alves')
                .callFunction(() => {
                  setShow(true);
                })

                .start();
            }}
          />
        </Col>
        {show && (
          <Col
            xs={'auto'}
            className="p-2 btn-contact d-flex justify-content-center"
            style={{ color: '#00ee87' }}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('UI Design')
                  .pauseFor(500)
                  .deleteAll()
                  .typeString('Illustration')
                  .pauseFor(500)
                  .deleteAll()
                  .typeString('Front-end Developer')
                  .callFunction(() => {
                    setShow2(true);
                  })
                  .start();
              }}
            />
          </Col>
        )}

        {show2 && (
          <Col
            xs={'auto'}
            className="p-2 btn-contact d-flex justify-content-center"
          >
            <ModalComponent title="Contato" button={true}>
              <ContactEmail avatar={true} />
            </ModalComponent>
          </Col>
        )}
      </Col>
    </>
  );
};

export default Home;
