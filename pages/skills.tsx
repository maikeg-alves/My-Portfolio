import { Grid, Progress, Text } from '@nextui-org/react';
import { Col, Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

import type { NextPage } from 'next';

const Skills: NextPage = () => {
  type Skill = {
    name: string;
    level: number;
    color: NormalColors;
  };

  type NormalColors =
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'gradient';

  const skills: Skill[] = [
    {
      name: 'HTML',
      level: 90,
      color: 'error',
    },
    {
      name: 'CSS',
      level: 80,
      color: 'secondary',
    },
    {
      name: 'JavaScript',
      level: 70,
      color: 'warning',
    },
    {
      name: 'TypeScript',
      level: 70,
      color: 'primary',
    },
    {
      name: 'React',
      level: 70,
      color: 'success',
    },
  ];

  return (
    <Container>
      <Row
        className=" justify-content-center align-items-center flex-column h-100 w-100 m-0 "
        style={{ padding: '5% 0' }}
      >
        <Col xs={'auto'}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Minhas')
                .pauseFor(600)
                .deleteAll()
                .typeString('Habilidades')
                .start();
            }}
          />
        </Col>
        <Col xs={12} className="mt-1">
          <Grid.Container xs={12} gap={3} className="p-2">
            {skills.map((skill: Skill, index: number) => (
              <Grid key={index}>
                <Text color="#f6f6f6">{skill.name}</Text>
                <Progress value={skill.level} color={skill.color} />
              </Grid>
            ))}
          </Grid.Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
