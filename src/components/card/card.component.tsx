import { Card, Row, Text } from '@nextui-org/react';
import { AiFillEye } from 'react-icons/ai';
import { Col } from 'react-bootstrap';

import { NextPage } from 'next';

import { ModalComponent, ProjectModal } from '@components';
import { IProject } from '@interfaces';
import { MyCard } from './style';

const CardProject: NextPage<IProject> = (props) => {
  function checkNewItems(date: string): boolean {
    const dateNow = new Date();
    const datecreate = new Date(date);
    const timeDiff = Math.abs(datecreate.getTime() - dateNow.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays < 20 ? true : false;
  }
   c
  return (
    <>
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
                {checkNewItems(props.githubUpdatedAt) && (
                  <Col xs={12}>
                    <Text
                      size={12}
                      weight="bold"
                      transform="uppercase"
                      color="#00ee87"
                    >
                      New
                    </Text>
                  </Col>
                )}
                <Col>
                  <Text color="white" h2>
                    {props.name}
                  </Text>
                </Col>
              </Col>
              <Text h6 color="white" className="linebreak">
                {props.description}
              </Text>
            </Col>
          </Col>
        </Card.Header>
        <MyCard css={{ padding: '0' }} accessKey={`${props.img}`}></MyCard>
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
              <Text size={12}>{props.githubUpdatedAt}</Text>
            </Col>
            <Col>
              <Row justify="flex-end">
                <ModalComponent
                  button={true}
                  namebtn="Veja Mais"
                  icon={<AiFillEye fill="currentColor" />}
                >
                  <ProjectModal {...props} />
                </ModalComponent>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};

export default CardProject;
