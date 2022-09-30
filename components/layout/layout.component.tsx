import React from 'react';
import { Row, /* Col */ Container } from 'react-bootstrap';
import { NextPage } from 'next';

type Props = {
  children: React.ReactNode;
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
};

const Layout: NextPage<Props> = ({ children, justify, align, direction }) => {
  return (
    <>
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
