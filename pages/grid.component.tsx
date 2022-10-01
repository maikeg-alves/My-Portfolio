import { NextPage } from 'next';
import { Card, Grid, Text } from '@nextui-org/react';
import { Layout } from '@components';
import { Col } from 'react-bootstrap';

const GridLayout: NextPage = () => {
  return (
    <Layout>
      <Col xs={12}>
        <Text color="sucess" size={60} weight="bold" h1>
          Tecnologias
        </Text>
        <Text color="white" h5>
          projetos, informaçoes uteis e algumas inutes :D
        </Text>
      </Col>

      <Grid.Container gap={2}>
        <Grid xs={4}>
          <Card>
            <Card.Body>
              <Text h2>React</Text>
              <Text h4> 8</Text>
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={4}>
          <Card>
            <Card.Body>
              <Text h2>TypeScript</Text>
              <Text h4> 3</Text>
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={4}>
          <Card>
            <Card.Body>
              <Text h2>JavaScript</Text>
              <Text h4> 12</Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export default GridLayout;
