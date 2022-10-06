import React from 'react';
import { Col } from 'react-bootstrap';
import { SwiperSlide } from 'swiper/react';

import { Carrosel, CardProject, Layout, LoadingMy } from '@components';
import type { Allover } from '@interfaces';
import type { GetStaticProps, NextPage } from 'next';

import { prisma } from 'libs';

type Over = {
  projects: Allover[];
  github: Allover[];
};

const Projects: NextPage<Over> = ({ projects, github }) => {
  const [data, setData] = React.useState<Allover[]>([]);

  //ANNOTATION: merging github api data with database data

  const meta = () => {
    try {
      if (projects.length > 0 && github.length > 0) {
        const merge = projects.map((project) => {
          const githubProject = github.find(
            (git) => git.name === project.github,
          ) as Allover;

          const {
            description,
            html_url,
            language,
            created_at,
            updated_at,
            pushed_at,
            homepage,
          } = githubProject;

          if (githubProject) {
            return {
              ...project,
              description,
              html_url,
              language,
              created_at,
              updated_at,
              pushed_at,
              homepage,
            };
          }
        });

        return merge as Allover[];
      }

      return [];
    } catch (err) {
      return [];
    }
  };

  function orderArray(array: Array<Allover>): Array<Allover> {
    const dateNow: Date = new Date();
    const newArray = array
      .filter((item) => {
        return new Date(item.created_at).getTime() < dateNow.getTime();
      })
      .sort((a, b) => +new Date(b.created_at) - +new Date(a.created_at));

    return newArray;
  }

  React.useEffect(() => {
    setData(orderArray(meta()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects, github]);

  return (
    <Layout justify="center" title="Projetos">
      <Col xs={12}>
        <>
          {data?.length > 0 ? (
            <>
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
            </>
          ) : (
            <LoadingMy />
          )}
        </>
      </Col>
    </Layout>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  try {
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

    const datagit = await fetch(
      'https://api.github.com/users/maikeg-alves/repos',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      },
    );

    const data = await datagit.json();

    return {
      props: {
        projects: projects,
        github: data,
      },
      revalidate: 60 * 60 * 24, // 24 hours
    };
  } catch (error) {
    return {
      props: {
        projects: null,
      },
    };
  }
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
