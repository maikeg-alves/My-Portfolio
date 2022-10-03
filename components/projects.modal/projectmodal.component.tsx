import { Button, Progress, Text, Grid } from '@nextui-org/react';
import Layout from 'components/layout/layout.component';
import { NextPage } from 'next';
import Image from 'next/image';
import { Card, Col } from 'react-bootstrap';
import { Allover } from '@interfaces';
import { BsCodeSlash, BsWindow } from '@styles';

const ProjectModal: NextPage<Allover> = ({
  name,
  difficulty,
  /*   gif, */
  img,
  description,
  /*   github, */
  html_url,
  /*   language, */
  created_at,
  pushed_at,
  /*   updated_at, */
  technologys,
}) => {
  console.log(technologys);
  return (
    <Layout>
      <Col xs={12}>
        <Image
          src={`${img}`}
          width={'550px'}
          height={'275px'}
          alt="Card example background"
        />
      </Col>

      <Col xs={12}>
        <Text h3 b>
          {name}
        </Text>

        <Text h6>{description}</Text>

        <Col xs={12}>
          <Text h6> Dificuldade:</Text>
          <Progress color="error" value={difficulty} />
        </Col>
        <Col xs={12}>
          <Text h6> Tecnologias:</Text>
          <Col xs={12} className="d-flex">
            {technologys.map((item, index) => {
              return (
                <>
                  <Col key={index}>
                    <Text h6 color="blue">
                      {item.name}
                    </Text>
                  </Col>
                </>
              );
            })}
          </Col>
        </Col>
        <Text h6>Criado em: {created_at}</Text>
        <Text h6>Ultimo push: {pushed_at}</Text>

        <Col xs={'auto'} className="d-flex justify-content-between py-2">
          <Button size={'sm'} icon={<BsCodeSlash />}>
            <a href={html_url}> Repo </a>
          </Button>
          <Button size={'sm'} icon={<BsWindow />}>
            <a href=""> Viste </a>
          </Button>
        </Col>
      </Col>
    </Layout>
  );
};

export default ProjectModal;
