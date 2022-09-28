import { Col, Container, Row } from 'react-bootstrap';
import { SwiperSlide } from 'swiper/react';

import { Carrosel, CardProject } from '@components';
import { IProjects } from '../interfaces';
import type { NextPage } from 'next';

const Projects: NextPage = () => {
  const items: IProjects[] = [
    {
      id: 1,
      name: 'Portfolio',
      description: 'My portfolio, where I show my prNext.js,more.',
      image: '/images/portfolio.png',
      url: 'https://portfolio-ten.vercel.app/',
      github: 'asdasdsa',
      technologies: ['Next.js', 'React.js', 'TypeScript', 'Bootstrap', 'SASS'],
      data: '2021',
    },
  ];

  return (
    <>
      <Container style={{ height: '100%' }}>
        <Row className="justify-content-center align-items-center flex-column h-100 w-100 m-0 ">
          <Col xs={'auto'}>
            <Col xs={12} align={'center'}>
              <h1>Projects</h1>
            </Col>
            <Col xs={12}>
              <Carrosel>
                <>
                  {items.map((item, id) => (
                    <SwiperSlide key={id}>
                      <CardProject {...item} />
                    </SwiperSlide>
                  ))}
                </>
              </Carrosel>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Projects;
