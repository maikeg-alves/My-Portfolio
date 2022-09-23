import React from 'react';
import { Card, Text } from '@nextui-org/react';
import { Col, Container, Row } from 'react-bootstrap';

import { ColResponsive } from '@/themes/styles/components/colResponsive';

import { IProjects } from '@/interfaces/projects.interface';

import CardProject from '@/components/carrosel/cardproject.component';
import { SwiperSlide } from 'swiper/react';

import Carrosel from '@/components/carrosel/carrosel.component';

const MockItem = ({ text }: { text: string }) => {
  return (
    <Card css={{ h: '$40', $$cardColor: '$colors$primary', marginTop: '10px' }}>
      <Card.Body>
        <Text h6 size={15} color="white" css={{ m: 0 }}>
          {text}
        </Text>
      </Card.Body>
    </Card>
  );
};

export default function Projects() {
  const items: IProjects[] = [
    {
      id: 1,
      name: 'NextUI',
      description:
        'NextUI is a React UI library that is built with Next.js and Tailwind CSS.',
      image: 'https://nextui.org/nextui.png',
      url: 'https://nextui.org',
      github: 'https://github.io/nextui-org/nextui',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      data: '02/12/2022',
    },
    {
      id: 2,
      name: 'LastUI',
      description:
        'NextUI is a React UI library that is built with Next.js and Tailwind CSS.',
      image: 'https://nextui.org/nextui.png',
      url: 'https://nextui.org',
      github: 'https://github.io/nextui-org/nextui',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      data: '02/12/2022',
    },
    {
      id: 3,
      name: 'LastUI',
      description:
        'NextUI is a React UI library that is built with Next.js and Tailwind CSS.',
      image: 'https://nextui.org/nextui.png',
      url: 'https://nextui.org',
      github: 'https://github.io/nextui-org/nextui',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      data: '02/12/2022',
    },
  ];

  return (
    <Container style={{ height: '100%' }}>
      <Row className="justify-content-center align-items-center flex-column h-100 w-100 m-0 ">
        <ColResponsive xs={'auto'}>
          <Col xs={12} align={'center'}>
            <h1>Projects</h1>
          </Col>
          <Col xs={12}>
            <Carrosel>
              <>
                {items.map((item) => (
                  <SwiperSlide>
                    <CardProject {...item} />
                  </SwiperSlide>
                ))}
              </>
            </Carrosel>
          </Col>
        </ColResponsive>
      </Row>
    </Container>
  );
}
