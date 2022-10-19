import { Card, Row, Text } from '@nextui-org/react';
import { AiFillEye } from 'react-icons/ai';
import { Col } from 'react-bootstrap';
import { ModalComponent, ProjectModal } from 'src/components';
import { NextPage } from 'next';
import { Allover } from 'src/interfaces';
import { MyCard } from './style';

const CardProject: NextPage<Allover> = ({
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
  homepage,
  AllTechnologys,
}) => {
  // ANNOTATION: verifica se o projeto tem mais de 20 dias de criação (obs: a data de criação do projeto é a data do primeiro commit)
  function checkNewItems(date: string): boolean {
    const dateNow = new Date();
    const datecreate = new Date(date);
    const timeDiff = Math.abs(datecreate.getTime() - dateNow.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays < 20 ? true : false;
  }

  // ANNOTATION:  formata a data para o formato brasileiro

  function formatDate(date: string): string {
    const datecreate = new Date(date);
    const day = datecreate.getDate();
    const month = datecreate.getMonth() + 1;
    const year = datecreate.getFullYear();
    return `${day}/${month}/${year}`;
  }

  // ANNOTATION:  prepara os dados para serem enviados para o modal
  const modalProject = [
    {
      name: name,
      difficulty: difficulty,
      gif: gif,
      img: img,
      description: description,
      github: github,
      html_url: html_url,
      language: language,
      created_at: formatDate(String(created_at)),
      pushed_at: formatDate(String(pushed_at)),
      updated_at: formatDate(String(updated_at)),
      technologys: technologys,
      homepage: homepage,
      AllTechnologys: AllTechnologys,
    },
  ];

  return (
    <>
      {name ? (
        <Card className="h-100 w-100 bg-black">
          <Card.Header
            css={{ position: 'absolute', zIndex: 1, top: 5, height: '77%' }}
          >
            <Col xs={12} className="h-100">
              <Col
                xs={12}
                className="d-flex flex-column h-100 justify-content-between"
              >
                <Col xs={12}>
                  <Col>
                    {checkNewItems(String(created_at)) && (
                      <Text
                        size={12}
                        weight="bold"
                        transform="uppercase"
                        color="#00ee87"
                      >
                        New
                      </Text>
                    )}
                  </Col>
                  <Col>
                    <Text color="white" h2>
                      {name}
                    </Text>
                  </Col>
                </Col>
                <Text h6 color="white" className="linebreak">
                  {description}
                </Text>
              </Col>
            </Col>
          </Card.Header>
          <MyCard css={{ padding: '0' }} accessKey={`${img}`}></MyCard>
          <Card.Footer
            isBlurred
            css={{
              position: 'absolute',
              bgBlur: '#ffffff66',
              borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Text size={12}>Ultima modificação</Text>
                <Text size={12}>{formatDate(String(updated_at))}</Text>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <ModalComponent
                    button={true}
                    namebtn="Veja Mais"
                    icon={<AiFillEye fill="currentColor" />}
                  >
                    {modalProject &&
                      modalProject.map((item, index) => (
                        <ProjectModal key={index} {...item} />
                      ))}
                  </ModalComponent>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      ) : (
        <Col>
          <Text> sem dados </Text>
        </Col>
      )}
    </>
  );
};

export default CardProject;
