import React from 'react';
import { Progress, Text } from '@nextui-org/react';
import { NextPage } from 'next';
/* import Image from 'next/image'; */
import { Col } from 'react-bootstrap';
import { CombinedProject, Technology } from '@interfaces';
import {
  BsWindow,
  ButtonUI,
  ConatinerUIH1,
  ImageNext,
  MYlink,
  SiGithub,
} from '@styles';
import { Responsive, baseUrl } from '@utils';

const ProjectModal: NextPage<CombinedProject> = (props) => {
  const [text, setText] = React.useState<string>('');
  const [techs, setTechs] = React.useState<Technology[]>([]);

  const highlight = (description: string, techs: Technology[]) => {
    if (!description && techs.length === 0) {
      return description;
    }
    const regex = new RegExp(techs.map((tech) => tech.name).join('|'), 'gi');
    const highlightedDescription = description.replace(regex, (match) => {
      return `<span class="sinalize">${match}</span>`;
    });

    return highlightedDescription;
  };

  const fetchTechnologies = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/technologys`);
      if (!response.ok) {
        setTechs([]);
        return;
      }
      const json = await response.json();
      setTechs(json);
    } catch (err) {
      console.error(err);
      setTechs([]);
    }
  };

  React.useEffect(() => {
    fetchTechnologies();
    setText(highlight(props.description, techs));
  }, [props.description, techs]);

  return (
    <Col xs={12}>
      <Text h3 b>
        {props.name}
      </Text>

      <Col xs={12} className="my-2">
        <Text className="my-2" color="#8e8e8e">
          preview :
        </Text>
        <ImageNext
          src={`${props.img}`}
          width={500}
          height={Number(Responsive('187', '140', 375))}
          blurDataURL={`${props.img}`}
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
        <Progress color="error" value={props.difficulty} />
      </Col>

      <Col xs={12} className="my-2">
        <Text h6 color="#8e8e8e">
          Tecnologias:
        </Text>
        <ConatinerUIH1 xs={12} className="d-flex ">
          {props.technologies.slice(0, 3).map((item, index) => {
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
          <MYlink href={props.html_url} target={'_blank'} rel={'noreferrer'}>
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
          <MYlink href={props.homepage} target={'_blank'} rel={'noreferrer'}>
            <ButtonUI
              icon={<BsWindow />}
              style={{ padding: '22px 0' }}
              size={'sm'}
              disabled={props.homepage === null || '' ? true : false}
            >
              Visite me
            </ButtonUI>
          </MYlink>
        </Col>
      </Col>
    </Col>
  );
};

export default ProjectModal;
