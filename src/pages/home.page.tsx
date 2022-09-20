import React from 'react';
/* import { Container } from '../themes/styles/pages/home.style'; */

import { Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import ContactEmail from '@components/contact/contact.component';
import Avatar from '@components/avatar.component';
import ModalComponent from '@components/modal.component';

import Typewriter from 'react-ts-typewriter';
import withResponsive from '@/components/sizeresponsive/withresponsive.component';

export default function Home() {
  const [show, setShow] = React.useState(false);
  const [show2, setShow2] = React.useState(false);

  window.addEventListener('dblclick', () => {
    setShow2(true);
    setShow(true);
  });

  return (
    <Container style={{ transform: 'translateY(50%)' }}>
      <Row className="flex-column align-items-center">
        <Col xs={'auto'}>
          <Avatar />
        </Col>

        <Col xs={'auto'} className="p-2" style={{ fontSize: 'large' }}>
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
        </Col>

        {show && (
          <Col
            xs={12}
            className="p-2 btn-contact d-flex justify-content-center"
            style={{ color: '#00ee87' }}
          >
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
            <ModalComponent title="Contato" button={true}>
              <ContactEmail avatar={true} />
            </ModalComponent>
          </Col>
        )}
      </Row>
    </Container>
  );
}
