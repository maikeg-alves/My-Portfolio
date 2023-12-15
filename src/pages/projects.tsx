import React from 'react';
import { Col } from 'react-bootstrap';
import { SwiperSlide } from 'swiper/react';

import { Carrosel, CardProject, Layout, LoadingMy } from '@components';
import type { IProject } from '@interfaces';
import type { GetStaticProps } from 'next';
/* 

TODO: trocar pela url geral
import { baseUrl } from '@utils'; */

type Props = {
  projects: IProject[];
};

const Projects: React.FC<Props> = (props) => {
  const [data, setData] = React.useState<IProject[]>([]);

  React.useEffect(() => {
    setData(props.projects);
  }, [props.projects]);

  return (
    <Layout justify="center" title="Projetos">
      <>
        <Col xs={12}>
          {!data.length ? (
            <LoadingMy />
          ) : (
            <>
              <Col xs={12} align={'center'}>
                <h1>Projects</h1>
              </Col>
              <Carrosel>
                {data.map((project) => (
                  <SwiperSlide key={project.id}>
                    <CardProject {...project} />
                  </SwiperSlide>
                ))}
              </Carrosel>
            </>
          )}
        </Col>
      </>
    </Layout>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(
      `https://api.maicongabrielalves.com.br/projects`,
      {
        method: 'GET',
      },
    );

    if (!response.ok) {
      throw new Error('Failed to fetch projects from API');
    }

    const projects = await response.json();

    return {
      props: {
        projects,
      },
      revalidate: 60 * 60 * 24,
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        projects: [],
      },
    };
  }
};
