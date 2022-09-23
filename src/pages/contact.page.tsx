import ContactEmail from '@/components/contact/contact.component';
import withResponsive from '@/components/sizeresponsive/withresponsive.component';
import { Text } from '@nextui-org/react';
import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

import { AiFillLinkedin } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';

import { List } from '@/themes/styles/components/list.style';

export default function Contact() {
  return (
    <Container>
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
            <p style={{ fontSize: withResponsive('13px', '20px') }}>
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
}
