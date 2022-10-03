import { Button, Progress, Text } from '@nextui-org/react';
import Layout from 'components/layout/layout.component';
import { NextPage } from 'next';
/* import Image from 'next/image'; */
import { Col } from 'react-bootstrap';
import { Allover } from '@interfaces';
import {
  BsCodeSlash,
  BsWindow,
  ConatinerUIH1,
  ImageNext,
  SiGithub,
} from '@styles';

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
    <>
      <Col xs={12}>
        <Text h3 b>
          {name}
        </Text>

        <Col xs={12} className="my-2">
          <Text className="my-2" color="#8e8e8e">
            preview :
          </Text>
          <ImageNext
            radios={'10px'}
            src={`${img}`}
            width={'550px'}
            height={'275px'}
            blurDataURL={`${img}`}
            alt="Card example background"
          />
        </Col>
        <Col xs={12} className="my-2">
          <Text h6 color="#8e8e8e">
            Descrição:
          </Text>
          <Text h6>{description}</Text>
        </Col>

        <Col xs={12} className="my-2">
          <Text h6 color="#8e8e8e">
            Dificuldade:
          </Text>
          <Progress color="error" value={difficulty} />
        </Col>

        <Col xs={12} className="my-2">
          <Text h6 color="#8e8e8e">
            Tecnologias:
          </Text>
          <ConatinerUIH1 xs={12} className="d-flex ">
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
          </ConatinerUIH1>
        </Col>

        <Col xs={12} className="d-flex justify-content-between py-2 ">
          <Col xs={'auto'}>
            <Button
              icon={<SiGithub fill="currentColor" />}
              style={{ padding: '22px' }}
              color="success"
              size={'sm'}
              href="google.com"
            >
              Repositorio
            </Button>
          </Col>

          <Col xs={'auto'}>
            <Button
              icon={<BsWindow fill="currentColor" />}
              style={{ padding: '22px 0' }}
              color="success"
              size={'sm'}
            >
              Visite
            </Button>
          </Col>
        </Col>
      </Col>
    </>
  );
};

export default ProjectModal;
