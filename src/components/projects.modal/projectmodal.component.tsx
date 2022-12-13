import { Progress, Text } from '@nextui-org/react';
import { NextPage } from 'next';
/* import Image from 'next/image'; */
import { Col } from 'react-bootstrap';
import { Allover } from 'src/interfaces';
import {
  BsWindow,
  ButtonUI,
  ConatinerUIH1,
  ImageNext,
  MYlink,
  SiGithub,
} from 'src/styles';
import React from 'react';

const ProjectModal: NextPage<Allover> = ({
  name,
  difficulty,
  img,
  description,
  html_url,
  homepage,
  technologys,
  AllTechnologys,
}): JSX.Element => {
  const [text, setText] = React.useState<string>('');

  const highlight = (text: string, words: string[]) => {
    if (text && words) {
      for (let i = 0; i < words.length; i++) {
        const textformat = new RegExp(words[i], 'gi');
        text = text.replace(
          textformat,
          "<span class='sinalize'>" + words[i] + '</span>',
        );
      }
      return text;
    }
    return '';
  };

  React.useEffect(() => {
    setText(
      highlight(
        description,
        AllTechnologys.map((item) => item.name),
      ),
    );
  }, [AllTechnologys, description, technologys]);

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
          <Text h6>
            <span dangerouslySetInnerHTML={{ __html: text }} />
          </Text>
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
            <MYlink href={html_url} target={'_blank'} rel={'noreferrer'}>
              <ButtonUI
                icon={<SiGithub />}
                style={{ padding: '22px' }}
                size={'sm'}
              >
                Repositório
              </ButtonUI>
            </MYlink>
          </Col>

          <Col xs={'auto'}>
            <MYlink href={homepage} target={'_blank'} rel={'noreferrer'}>
              <ButtonUI
                icon={<BsWindow />}
                style={{ padding: '22px 0' }}
                size={'sm'}
                disabled={homepage === null || '' ? true : false}
              >
                Visite me
              </ButtonUI>
            </MYlink>
          </Col>
        </Col>
      </Col>
    </>
  );
};

export default ProjectModal;
