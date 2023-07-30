import React from 'react';
import { Col } from 'react-bootstrap';
import { SwiperSlide } from 'swiper/react';

import { Carrosel, CardProject, Layout, LoadingMy } from '@components';
import type { CombinedProject } from '@interfaces';
import type { GetStaticProps } from 'next';
import { baseUrl } from '@utils';

type Props = {
  projects: CombinedProject[];
};

const Projects: React.FC<Props> = (props) => {
  const [data, setData] = React.useState<CombinedProject[]>([]);

  React.useEffect(() => {
    setData(props.projects);
  }, [props.projects]);

  return (
    <Layout justify="center" title="Projetos">
      <>
        {data.length > 0 ? (
          <Col xs={12}>
            <Col xs={12} align={'center'}>
              <h1>Projects</h1>
            </Col>
            <Carrosel>
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <CardProject {...item} />
                </SwiperSlide>
              ))}
            </Carrosel>
          </Col>
        ) : (
          <Col xs={'auto'}>
            <LoadingMy />
          </Col>
        )}
      </>
    </Layout>
  );
};

export default Projects;

// ANNOTATION: Pegando dados da api do github e do banco de dados

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/projects`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch projects from API');
    }

    const data = await response.json();

    return {
      props: {
        projects: data,
      },
      revalidate: 60 * 60 * 24, // 24 hours
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
