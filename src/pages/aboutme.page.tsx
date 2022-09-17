import Avatar from '@/components/avatar.component';
import ModalAboutme from '@/components/modalAboutmel.component';
import { Button, Link } from '@nextui-org/react';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {TbDownload} from 'react-icons/tb';

export default function Aboutme() {
  return (
    <Container>
      <Row className='min-vh-100 justify-content-center align-items-center flex-column '>
        <Col xs={"auto"} className='mt-5'>
          <Avatar />
        </Col>
        <Col xs={"auto"}>
          <h1>Sobre mim </h1>
        </Col>
        <Col xs={5} className="text-break" style={{width: "75%"}} aling="center">
          <p style={{margin: 0}}> 
            Olá, meu nome é Maicon Gabriel Alves, tenho 19 anos e sou estudante de
            Ciência da Computação na Universidade Federal de São Carlos. Atualmente
            estou no 4º período do curso e estou em busca de uma oportunidade de
            estagio de desenvolvedor web.
          </p>
          <Col xs={"auto"} className="mb-2">
          <ModalAboutme>
               <h1>teste</h1>
          </ModalAboutme>
          </Col>
        </Col>
        <Col xs={"auto"}>
        <Button auto flat icon={ <TbDownload/>} color="success" >
          <Link href=" " target="_blank" color={'primary'}> 
            BAIXAR CURRÍCULO
          </Link>
        </Button>
        </Col>
      </Row>
    </Container>
  );
}
