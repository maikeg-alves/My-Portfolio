import React from 'react';
import { Col } from 'react-bootstrap';
import { SwiperSlide } from 'swiper/react';

import { Carrosel, CardProject, Layout, LoadingMy } from 'src/components';
import type { Allover } from 'src/interfaces';
import type { GetStaticProps } from 'next';

import { prisma } from 'src/libs';

type Props = {
  projects: Allover[];
  github: Allover[];
  allTechnologys: Allover[];
};

const Projects: React.FC<Props> = (props) => {
  const [data, setData] = React.useState<Allover[]>([]);

  const mergeProjectsData = (): Allover[] => {
    const { projects, github, allTechnologys } = props;

    if (
      projects.length === 0 &&
      github.length === 0 &&
      allTechnologys.length === 0
    ) {
      return [];
    }

    const mergeData = props.projects
      .map((project) => {
        const AllTechnologys = props.allTechnologys.filter((tech) => tech.name);

        const gitDataRepos = props.github.find(
          (git) => git.name === project.github,
        ) as Allover;

        if (!gitDataRepos) {
          return null;
        }

        const {
          description,
          html_url,
          language,
          created_at,
          updated_at,
          pushed_at,
          homepage,
        } = gitDataRepos;

        return {
          ...project,
          description,
          html_url,
          language,
          created_at,
          updated_at,
          pushed_at,
          homepage,
          AllTechnologys,
        };
      })
      .filter((item) => item);

    return mergeData as Allover[];
  };

  // fim mergeProjectsData

  if (mergeProjectsData().length === 0) {
    console.error(
      'sem dados de resposta com a api\n⚠️ se estiver em modo de desenvolvedor, ative o pscale ⚠️\nuse o comando: pscale connect my-api main --port 3309',
    );
  }

  //ANNOTATION: filtando os projetos por data de criação (obs: a data de criação do projeto é a data do primeiro commit)

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
    setData(orderArray(mergeProjectsData()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.projects, props.github, props.allTechnologys]);

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
    const projects =
      (await prisma?.project.findMany({
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
      })) || [];

    const allTechnologys =
      (await prisma?.technology.findMany({
        select: {
          id: true,
          name: true,
        },
      })) || [];

    const repos = await fetch(
      'https://api.github.com/users/maikeg-alves/repos',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      },
    );

    const gitdata = await repos.json();

    return {
      props: {
        projects: projects,
        allTechnologys: allTechnologys,
        github: gitdata,
      },
      revalidate: 60 * 60 * 24, // 24 hours
    };
    
  } catch (error) {
    return {
      props: {
        projects: [],
        allTechnologys: [],
        github: [],
      },
    };
  }
};
