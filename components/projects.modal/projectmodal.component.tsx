import { Button, Text } from '@nextui-org/react';
import Layout from 'components/layout/layout.component';
import { NextPage } from 'next';
import Image from 'next/image';
import { Col } from 'react-bootstrap';
import { Allover } from '@interfaces';

const ProjectModal: NextPage<Allover[]> = ({
  name,
  difficulty,
  gif,
  img,
  description,
  github,
  html_url,
  language,
  created_at,
  pushed_at,
  updated_at,
  technologys,
}) => {
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

        <Text h6> Linguagem: {language}</Text>
        <Text h6> Dificuldade: {difficulty}</Text>
        <Text h6> Tecnologias: {technologys}</Text>
        <Text h6>Criado em: {created_at}</Text>
        <Text h6>Ultima modifção: {updated_at}</Text>
        <Text h6>Ultimo push: {pushed_at}</Text>

        <Col xs={'auto'}>
          <Button>
            <a href={html_url}> Repo </a>
          </Button>
          <Button>
            <a href=""> Viste </a>
          </Button>
        </Col>
      </Col>
    </Layout>
  );
};

export default ProjectModal;
