import React from 'react';
import { Text } from '@nextui-org/react';
import { AiFillLinkedin } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';
import { Container, Row, Col } from 'react-bootstrap';

import { Reponsive } from '@libs';
import { ContactEmail } from '@components';
import { List } from '@styles';
import type { NextPage } from 'next';

const Contact: NextPage = () => {
  return (
    <Container className="vh-100">
      <Row className="justify-content-center align-items-center flex-column h-100 w-100 m-0">
        <Col xs={12} style={{ maxWidth: '500px' }}>
          <Col
            xs={'auto'}
            align={'center'}
            /* style={{ width: withResponsive('100%', '50%') }} */
          >
            <div
              style={{ width: '100%', height: '100%', marginTop: '100px' }}
            ></div>
            <Text color="white" h1>
              Contato
            </Text>
            <p style={{ fontSize: Reponsive('13px', '20px', 960) }}>
              Me mande uma mesnagem que entrarei em contato o mmais breve
              possivel, se preferrir entre em contato pelas redes sociais.
            </p>
          </Col>
          <ContactEmail avatar={false} />
          <Col xs={12} align={'center'}>
            <Text h5 color="#00ee87">
              {'<ou/>'}
            </Text>
          </Col>

          <List>
            <li>
              <a href="">
                <span>
                  <AiFillLinkedin />
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <span>
                  <MdOutlineEmail />
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <span>
                  <BsInstagram />
                </span>
              </a>
            </li>
          </List>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
