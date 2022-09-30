import { Card, Row, Text } from '@nextui-org/react';
import { Container } from 'react-bootstrap';
import { AiFillEye } from 'react-icons/ai';
import { Col } from 'react-bootstrap';
import { ICard, ITheme } from '../../interfaces';
import { ModalComponent } from '../../components';
import { NextPage } from 'next';

const CardProject: NextPage<ICard> = ({
  name,
  description,
  image,
  url,
  github,
  technologies,
  data,
}) => {
  return (
    <Card className="h-100 w-100">
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col>
          <Text
            size={12}
            weight="bold"
            transform="uppercase"
            color={`${(props: ITheme) => props.theme.body.color}`}
          >
            New
          </Text>
          <Text h3 color={`${(props: ITheme) => props.theme.body.color}`}>
            {name}
          </Text>
          <Text
            size={12}
            color={`${(props: ITheme) => props.theme.body.color}`}
          >
            {description}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>{/* aqui vai a imagem */}</Card.Body>
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
            <Text
              color={`${(props: ITheme) => props.theme.body.color}`}
              size={12}
            >
              Ultima modifção
            </Text>
            <Text
              color={`${(props: ITheme) => props.theme.body.color}`}
              size={12}
            >
              {data}
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <ModalComponent
                button={true}
                namebtn="Veja Mais"
                icon={<AiFillEye />}
              >
                <Container style={{ height: '100%' }}>
                  <Row className="justify-content-center align-items-center flex-column h-100 w-100 m-0 ">
                    <Col xs={12}>
                      <h1>{name}</h1>
                      <p>{description}</p>
                      <p>{image}</p>
                      <p>{url}</p>
                      <p>{github}</p>
                      <p>{technologies}</p>
                      <p>{data}</p>
                    </Col>
                  </Row>
                </Container>
              </ModalComponent>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default CardProject;
