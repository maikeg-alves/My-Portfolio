import { Col, Container, Row } from 'react-bootstrap';
import { SwiperSlide } from 'swiper/react';

import { Carrosel, CardProject } from '@components';
import { IProjects } from '../interfaces';
import type { GetStaticProps, NextPage } from 'next';

const Projects: NextPage = (props) => {
  /*   const items: IProjects[] = [
    {
      id: 1,
      name: "NextUI",
      description:
        "NextUI is a React UI library that is built with Next.js and Tailwind CSS.",
      image: "https://nextui.org/nextui.png",
      url: "https://nextui.org",
      github: "https://github.io/nextui-org/nextui",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      data: "02/12/2022",
    },
    {
      id: 2,
      name: "LastUI",
      description:
        "NextUI is a React UI library that is built with Next.js and Tailwind CSS.",
      image: "https://nextui.org/nextui.png",
      url: "https://nextui.org",
      github: "https://github.io/nextui-org/nextui",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      data: "02/12/2022",
    },
    {
      id: 3,
      name: "LastUI",
      description:
        "NextUI is a React UI library that is built with Next.js and Tailwind CSS.",
      image: "https://nextui.org/nextui.png",
      url: "https://nextui.org",
      github: "https://github.io/nextui-org/nextui",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      data: "02/12/2022",
    },
  ]; */

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
                  {/*                   {items.map((item, id) => (
                    <SwiperSlide key={id}>
                      <CardProject {...item} />
                    </SwiperSlide>
                  ))} */}
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

const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https:/.../api');
  const items = await res.json();

  console.log(items);
  return {
    props: {
      items,
    },
  };
};
