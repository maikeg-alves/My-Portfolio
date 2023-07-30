import React from 'react';
import { Col } from 'react-bootstrap';

import { Typewriter } from '@components';
import { Avatar, ContactEmail, Layout, ModalComponent } from '@components';
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

  const hadleteste = (e: boolean) => {
    if (e === true) {
      setTimeout(() => {
        setShow2(false);
      }, 2000);
    }
  };

  return (
    <Layout justify="center" align="center" direction="column" title="Home">
      <Col xs={'auto'}>
        <Avatar />
      </Col>

      <Col>
        <Col
          xs={'auto'}
          className="p-2 btn-contact d-flex justify-content-center"
          style={{ fontSize: '20px' }}
        >
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
            xs={'auto'}
            className="p-2 btn-contact d-flex justify-content-center"
            style={{ color: '#00ee87' }}
          >
            <Typewriter
              text={['UI Design', 'Illustration', 'Full Stack Developer']}
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
            xs={'auto'}
            className="p-2 btn-contact d-flex justify-content-center"
          >
            <ModalComponent title="Contato" button={true}>
              <ContactEmail avatar Submit={hadleteste} />
            </ModalComponent>
          </Col>
        )}
      </Col>
    </Layout>
  );
};

export default Home;
