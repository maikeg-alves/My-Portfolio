import React from 'react';
import { Grid, Progress } from '@nextui-org/react';
import { Col } from 'react-bootstrap';
import { Typewriter, Layout, LoadingMy, GridLayout } from 'src/components';

import { TextUI } from 'src/styles';

import type { GetStaticProps, NextPage } from 'next';
import { prisma, Responsive } from 'src/libs';
import { ITech, Techmology } from 'src/interfaces';

const Skills: NextPage<ITech> = ({ technologys }) => {
  const [techs, setTechs] = React.useState<Techmology[]>([]);

  React.useEffect(() => {
    if (technologys != null) {
      // ANNOTATION:  filter the technologies per ability level and sort them by the highest level
      setTechs(
        (technologys.slice(0, 5) as Techmology[])
          .filter((item) => item.ability >= 80)
          .sort((a, b) => b.ability - a.ability),
      );
    }

    console.error('sem dados de resposta com a api');
  }, [technologys]);

  return (
    <Layout justify="center" title="Habilidades">
      {technologys ? (
        <>
          <Col xs={12} className="d-flex">
            <Col
              className={`
              col-${Responsive(
                '6',
                '12',
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
                {techs.map((item) => (
                  <Grid key={item.id} className="p-2">
                    <TextUI>{item.name}</TextUI>
                    <Progress value={item.ability} color={'success'} />
                  </Grid>
                ))}
              </Grid.Container>
            </Col>
            <>
              <GridLayout {...technologys} />
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

// ANNOTATION: pegando dados do banco de dados

export const getStaticProps: GetStaticProps = async () => {
  try {
    const technologys =
      (await prisma?.technology.findMany({
        select: {
          id: true,
          name: true,
          icon: true,
          ability: true,
          projects: true,
        },
      })) || [];

    return {
      props: {
        technologys,
      },
      revalidate: 60 * 60 * 24, // 24 hours
    };
  } catch (error) {
    return {
      props: {
        technologys: [],
      },
    };
  }
};
