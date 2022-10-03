import { Grid, Progress } from '@nextui-org/react';
import { Col } from 'react-bootstrap';
import { Typewriter, Layout, LoadingMy, GridLayout } from '@components';

import { TextUI } from 'styles';

import type { GetStaticProps, NextPage } from 'next';
import { prisma, Responsive } from 'libs';
import { ITech } from 'interfaces';

const Skills: NextPage<ITech> = ({ technologys }) => {
  /*   type Skill = {
    name: string;
    level: number;
    color: NormalColors;
  }; */

  /*   type NormalColors =
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'gradient'; */

  /*   const skills: Skill[] = [
    {
      name: 'HTML',
      level: 90,
      color: 'error',
    },
    {
      name: 'CSS',
      level: 80,
      color: 'secondary',
    },
    {
      name: 'JavaScript',
      level: 70,
      color: 'warning',
    },
    {
      name: 'TypeScript',
      level: 70,
      color: 'primary',
    },
    {
      name: 'React',
      level: 70,
      color: 'success',
    },
  ]; */

  const data = [];

  if (technologys != null) {
    data.push(technologys.slice(0, 5));
  }

  return (
    <Layout justify="center">
      {technologys ? (
        <>
          <Col xs={12} className="d-flex">
            <Col
              className={`
              col-${Responsive(
                6,
                12,
                990,
              )} d-flex justify-content-center flex-column px-2`}
            >
              <Col xs={'auto'} className="text-center">
                <TextUI className="m-0" b size={27}>
                  <Typewriter text={['Minhas', 'Habilidades']} delay={1000} />
                </TextUI>
              </Col>
              <Grid.Container
                xs={12}
                gap={3}
                className="p-2 align-content-center"
                style={{ display: 'contents' }}
              >
                {data[0].map((item) => (
                  <Grid key={item.id} className="p-2">
                    <TextUI>{item.name}</TextUI>
                    <Progress value={item.ability} color={'success'} />
                  </Grid>
                ))}
              </Grid.Container>
            </Col>
            <>
              <GridLayout />
            </>
          </Col>
        </>
      ) : (
        <Col xs={'auto'}>
          <LoadingMy />
        </Col>
      )}
    </Layout>
  );
};

export default Skills;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const technologys = await prisma?.technology.findMany({
      select: {
        id: true,
        name: true,
        icon: true,
        ability: true,
      },
    });

    return {
      props: {
        technologys: technologys,
      },
      revalidate: 10, //10 seconds OBSERVATION: tenho que mudar para 25 horas depois
    };
  } catch (error) {
    return {
      props: {
        technologys: null,
      },
    };
  }
};
