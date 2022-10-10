import { Col /* , Container, Row  */ } from 'react-bootstrap';
import { TbDownload } from 'react-icons/tb';

import { Avatar, ModalComponent, Layout } from 'src/components';
import { ButtonMy, LinkMy } from 'src/styles';
import { Responsive } from 'src/libs';
import type { NextPage } from 'next';
import { Tooltip } from '@nextui-org/react';

const About: NextPage = () => {
  return (
    <Layout direction="column" align="center" title="Sobre mim">
      <Col xs={'auto'}>
        <Avatar />
      </Col>

      <Col xs={'auto'}>
        <h1>Sobre mim </h1>
      </Col>

      <Col
        xs={5}
        className="text-break"
        style={{ width: Responsive('50%', '100%', 960) }}
        aling="center"
      >
        <p style={{ margin: 0, textAlign: 'justify' }}>
          Olá, me chamo Maicon e sou desenvolvedor web, apaixonado por
          tecnologia e ciência, um entusiasta de novas tecnologias e frameworks,
          sempre em busca de novos conhecimentos e desafios. Estou a procura de
          uma oportunidade de trabalho para colocar em prática meus
          conhecimentos e aprender mais.
          <ModalComponent button={false} title={'Sobre mim'} ontitle={true}>
            <Col sm={'11'}>
              <p>
                Programação nasceu para mim como um hoppy em 2020, em meio a um
                cenário de incertezas, naquele ano eu tive uma certeza, que
                gostaria de tornar aquele hoppy em carreira, e desde então estou
                tralhando para que esse sonho se torne realidade.
                <br />
                <br />
                Quando não estou estudando, estou desenhando ou vendo algum
                documentário, amo aprender e descobrir coisas novas, sou
                dedicado e ágil, e estou sempre em busca de novos desafios.
                <br />
                <br />
                Meu objetivo é me tornar um desenvolvedor fullstack, e estou
                estudando para isso, atualmente estou estudando ReactJS, NextJS,
                NodeJS, Typescript, e outras tecnologias.
              </p>
            </Col>
          </ModalComponent>
        </p>
        <Col xs={'auto'} className="mb-2"></Col>
      </Col>

      <Col xs={'auto'}>
        <Tooltip content={'81.9 kb'}>
          <ButtonMy auto flat icon={<TbDownload />} color="success">
            <LinkMy
              download
              href="curriculo.pdf"
              target="_blank"
              color={'primary'}
            >
              BAIXAR CURRÍCULO
            </LinkMy>
          </ButtonMy>
        </Tooltip>
      </Col>
    </Layout>
  );
};

export default About;
