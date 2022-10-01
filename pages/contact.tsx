import React from 'react';
import { Col } from 'react-bootstrap';

import { Reponsive } from '@libs';
import { ContactEmail, Layout } from '@components';

import type { NextPage } from 'next';
import { TextUI } from 'styles';

const Contact: NextPage = () => {
  return (
    <Layout justify="center">
      <Col xs={12} style={{ maxWidth: '500px' }}>
        <Col xs={'auto'} align={'center'}>
          <TextUI h1>Contato</TextUI>
          <p style={{ fontSize: Reponsive('18px', '14px', 960) }}>
            Me mande uma mesnagem que entrarei em contato o mmais breve
            possivel, se preferrir entre em contato pelas redes sociais.
          </p>
        </Col>
        <ContactEmail avatar={false} />
      </Col>
    </Layout>
  );
};

export default Contact;
