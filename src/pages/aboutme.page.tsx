import React from 'react';
import Avatar from '@components/avatar.component';
import ModalComponent from '@components/modal.component';
import { Col, Container, Row } from 'react-bootstrap';
import { TbDownload } from 'react-icons/tb';
import withResponsive from '@components/sizeresponsive/withresponsive.component';
import { ButtonMy, LinkMy } from '@/themes/styles/components/button.syle';

export default function Aboutme() {
  return (
    <Container>
      <Row
        className="justify-content-center align-items-center flex-column px-2 "
        style={{ padding: '5% 0' }}
      >
        <Col xs={'auto'} className="mt-5">
          <Avatar />
        </Col>
        <Col xs={'auto'}>
          <h1>Sobre mim </h1>
        </Col>
        <Col
          xs={5}
          className="text-break"
          style={{ width: withResponsive('100%', '50%') }}
          aling="center"
        >
          <p style={{ margin: 0, textAlign: 'justify' }}>
            Olá, meu nome é Maicon Gabriel Alves, tenho 19 anos e sou estudante
            de Ciência da Computação na Universidade Federal de São Carlos.
            Atualmente estou no 4º período do curso e estou em busca de uma
            oportunidade de estagio de desenvolvedor web.
            <ModalComponent button={false} title={'Sobre mim'}>
              <p
                style={{
                  width: withResponsive('100%', '50%'),
                  fontSize: withResponsive('16px', '26px'),
                }}
              >
                Oi! Eu sou Maicon Gabriel Alves. Um desenvolvedor front-end de
                São Paulo - SP que adora desafios e que está a procura de sempre
                resolver problemas com tecnologia e um apaixonado por ciência e
                astronomia.
                <br />
                <br /> Programação nasceu para mim como um hoppy em 2020, em
                meio a um cenário de incertezas, naquele ano eu tive uma
                certeza, que gostaria de tornar aquele hoppy em carreira, e
                desde então estou tralhando para que esse sonho se torne
                realidade. <br />
                <br /> Quando não estou codando, estou desenhando ou vendo algum
                documentário, amo aprender e descobrir coisas novas, sou
                dedicado e ágil, e gostaria de ter essa primeira oportunidade de
                emprego.
              </p>
            </ModalComponent>
          </p>
          <Col xs={'auto'} className="mb-2"></Col>
        </Col>
        <Col xs={'auto'}>
          <ButtonMy auto flat icon={<TbDownload />} color="success">
            <LinkMy href=" " target="_blank" color={'primary'}>
              BAIXAR CURRÍCULO
            </LinkMy>
          </ButtonMy>
        </Col>
      </Row>
    </Container>
  );
}
