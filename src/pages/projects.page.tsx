import { Card, Grid, Text } from '@nextui-org/react';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useMediaQuery } from '@/components/windowssize/usemediaquery';

const MockItem = ({ text }: { text: string }) => {
  return (
    <Card css={{ h: '$20', $$cardColor: '$colors$primary' }}>
      <Card.Body>
        <Text h6 size={15} color="white" css={{ m: 0 }}>
          {text}
        </Text>
      </Card.Body>
    </Card>
  );
};

export default function Projects() {
  const isMd = useMediaQuery(960);

  return (
    <Container>
      <Row className="vh-100 justify-content-center align-items-center flex-column">
        <div></div>
        <Col xs={'auto'} className="d-flex flex-column align-items-center">
          <h1>Projects</h1>
          <Grid.Container gap={2} justify="center">
            <Grid xs={12} md={6}>
              <MockItem text={isMd ? '1 of 1' : '1 of 2'} />
            </Grid>
            <Grid xs={6} md={6}>
              <MockItem text={isMd ? '1 of 2' : '2 of 2'} />
            </Grid>
            <Grid xs={6} md={3}>
              <MockItem text={isMd ? '2 of 2' : '1 of 3'} />
            </Grid>
            <Grid xs={6} md={3}>
              <MockItem text={isMd ? '1 of 2' : '2 of 3'} />
            </Grid>
            <Grid xs={6} md={3}>
              <MockItem text={isMd ? '2 of 2' : '3 of 3'} />
            </Grid>
          </Grid.Container>
        </Col>
      </Row>
    </Container>
  );
}
