import { SkillsContainer } from '@/themes/styles/components/skillsContainer.style';
import { Grid, Progress, Text } from '@nextui-org/react';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Typewriter from 'react-ts-typewriter';

export default function Skills() {
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
        className=" justify-content-center align-items-center flex-column"
        style={{ padding: '5% 0' }}
      >
        <Col xs={'auto'}>
          <Typewriter text={['Minhas', 'Habilidades']} delay={1000} />
        </Col>
        <Col xs={12} className="mt-1">
          <SkillsContainer xs={12} gap={3}>
            {skills.map((skill: Skill, index: number) => (
              <Grid key={index}>
                <Text color="#f6f6f6">{skill.name}</Text>
                <Progress value={skill.level} color={skill.color} />
              </Grid>
            ))}
          </SkillsContainer>
        </Col>
      </Row>
    </Container>
  );
}
