import { NextPage } from 'next';
import { Grid, Text, Tooltip } from '@nextui-org/react';
import { Col } from 'react-bootstrap';
import Image from 'next/image';
import { Responsive } from 'libs';
import { TextUI } from 'styles';

const GridLayout: NextPage = () => {
  return (
    <Col
      style={{ display: `${Responsive('block', 'none', 960)}` }}
      className=" px-2"
    >
      <Col xs={12} className="text-center mb-2">
        <Text color="sucess" size={50} weight="bold" h1>
          Tecnologias
        </Text>
        <TextUI h6>
          Conheça as tecnologias que utilizo no meu dia a dia :D
        </TextUI>
      </Col>

      <Grid.Container gap={2}>
        <Grid xs={3}>
          <Tooltip content="Developers love Next.js" contentColor="success">
            <Image
              src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
              width={100}
              height={100}
              alt="React"
            />
          </Tooltip>
        </Grid>

        <Grid xs={3}>
          <Tooltip content="Developers love Next.js" contentColor="success">
            <Image
              src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
              width={100}
              height={100}
              alt="React"
            />
          </Tooltip>
        </Grid>

        <Grid xs={3}>
          <Tooltip content="Developers love Next.js" contentColor="success">
            <Image
              src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
              width={100}
              height={100}
              alt="React"
            />
          </Tooltip>
        </Grid>

        <Grid xs={3}>
          <Tooltip content="Developers love Next.js" contentColor="success">
            <Image
              src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
              width={100}
              height={100}
              alt="React"
            />
          </Tooltip>
        </Grid>

        <Grid xs={3}>
          <Tooltip content="Developers love Next.js" contentColor="success">
            <Image
              src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
              width={100}
              height={100}
              alt="React"
            />
          </Tooltip>
        </Grid>

        <Grid xs={3}>
          <Tooltip content="Developers love Next.js" contentColor="success">
            <Image
              src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
              width={100}
              height={100}
              alt="React"
            />
          </Tooltip>
        </Grid>

        <Grid xs={3}>
          <Tooltip content="Developers love Next.js" contentColor="success">
            <Image
              src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
              width={100}
              height={100}
              alt="React"
            />
          </Tooltip>
        </Grid>

        <Grid xs={3}>
          <Tooltip content="Developers love Next.js" contentColor="success">
            <Image
              src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
              width={100}
              height={100}
              alt="React"
            />
          </Tooltip>
        </Grid>

        <Grid xs={3}>
          <Tooltip content="Developers love Next.js" contentColor="success">
            <Image
              src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
              width={100}
              height={100}
              alt="React"
            />
          </Tooltip>
        </Grid>

        <Grid xs={3}>
          <Tooltip content="Developers love Next.js" contentColor="success">
            <Image
              src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
              width={100}
              height={100}
              alt="React"
            />
          </Tooltip>
        </Grid>

        <Grid xs={3}>
          <Tooltip content="Developers love Next.js" contentColor="success">
            <Image
              src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
              width={100}
              height={100}
              alt="React"
            />
          </Tooltip>
        </Grid>

        <Grid xs={3}>
          <Tooltip content="Developers love Next.js" contentColor="success">
            <Image
              src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
              width={100}
              height={100}
              alt="React"
            />
          </Tooltip>
        </Grid>
      </Grid.Container>
    </Col>
  );
};

export default GridLayout;
