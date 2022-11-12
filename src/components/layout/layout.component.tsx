import React from 'react';
import { Row, Container } from 'react-bootstrap';
import { NextPage } from 'next';
import Head from 'next/head';

type Props = {
  children: React.ReactNode;
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  title?: string;
};

const Layout: NextPage<Props> = ({
  children,
  justify,
  align,
  direction,
  title,
}) => {
  return (
    <>
      <Head>
        <title>{title ? title : 'Maicon Gabriel Alves'}</title>
      </Head>
      <Container>
        <Row
          className={`justify-content-${justify} align-items-${align} flex-${direction}`}
        >
          {children}
        </Row>
      </Container>
    </>
  );
};

export default Layout;
