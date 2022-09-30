import { Col } from 'react-bootstrap';
import { SwiperSlide } from 'swiper/react';

import { Carrosel, CardProject, Layout } from '@components';
import { IProjects } from '../interfaces';
import type { GetStaticProps, NextPage } from 'next';

import { prisma } from 'libs';

const Projects: NextPage<IProjects> = ({ projects }) => {
  console.log(projects);

  if (!projects) {
    return <h1>Carregando...</h1>;
  }

  return (
    <Layout>
      <Col xs={12} align={'center'}>
        <h1>Projects</h1>
      </Col>
      <Col xs={12}>
        <Carrosel>
          <>
            {projects.map((item) => (
              <SwiperSlide key={item.id}>
                <CardProject {...item} />
              </SwiperSlide>
            ))}
          </>
        </Carrosel>
      </Col>
    </Layout>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const projects = await prisma?.project.findMany({
    select: {
      id: true,
      name: true,
      github: true,
      description: true,
      difficulty: true,
      img: true,
      gif: true,
      technologys: true,
    },
  });

  return {
    props: {
      projects,
    },
    revalidate: 10, //10 seconds
  };
};

// TODO: acesso restrito a rota
/* export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
  //este deve ser o caminho real e não um caminho reescrito
    //por exemplo. para "/blog/[slug]" deve ser "/blog/post-1"
    await res.revalidate('/path-to-revalidate')
    return res.json({ revalidated: true })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating')
  }
} */
