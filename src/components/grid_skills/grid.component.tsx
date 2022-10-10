import React from 'react';
import { Grid, Text, Tooltip } from '@nextui-org/react';
import { Col } from 'react-bootstrap';
import Image from 'next/image';

import { Responsive } from 'src/libs';
import { TextUI } from 'src/styles';

import type { NextPage } from 'next';
import type { Techmology } from 'src/interfaces';

const GridLayout: NextPage<Techmology[]> = (props) => {
  const [techs, setTechs] = React.useState<Techmology[]>([]);

  React.useEffect(() => {
    if (props != null) {
      //transforma o array em um array de objetos
      setTechs(
        Object.keys(props).map((index) => props[Number(index)] as Techmology),
      ),
        [];
    }
  }, [props]);

  return (
    <Col
      style={{ display: `${Responsive('block', 'none', 960)}` }}
      className=" px-2"
    >
      <Col xs={12} className="text-center mb-2">
        <Text color="sucess" size={50} weight="bold" h1>
          Tecnologias
        </Text>
        <TextUI h6>
          Conheça as tecnologias que utilizo no meu dia a dia :D
        </TextUI>
      </Col>

      <Grid.Container gap={2} style={{ justifyContent: 'center' }}>
        {techs.map((item) => (
          <Grid xs={3} key={item.id} style={{ flexBasis: 'unset' }}>
            <Tooltip content={item.name} contentColor="success">
              <Image src={item.icon} width={70} height={70} alt={item.name} />
            </Tooltip>
          </Grid>
        ))}
      </Grid.Container>
    </Col>
  );
};

export default GridLayout;
