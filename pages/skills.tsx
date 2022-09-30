import { Grid, Progress, Text } from '@nextui-org/react';
import { Col } from 'react-bootstrap';
import { Typewriter, Layout } from '@components';

import type { NextPage } from 'next';
import { ITheme } from 'interfaces';

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
    <Layout justify="center">
      <Col xs={'auto'}>
        <h3>
          <Typewriter text={['Minhas', 'Habilidades']} delay={1000} />
        </h3>
      </Col>
      <Col xs={12} className="mt-1">
        <Grid.Container xs={12} gap={3} className="p-2">
          {skills.map((skill: Skill, index: number) => (
            <Grid key={index}>
              <Text color={`${(props: ITheme) => props.theme.body.color}`}>
                {skill.name}
              </Text>
              <Progress value={skill.level} color={skill.color} />
            </Grid>
          ))}
        </Grid.Container>
      </Col>
    </Layout>
  );
};

export default Skills;
