import { Loading } from '@nextui-org/react';
import { Typewriter } from '@components';
import { TextUI } from 'styles';

const LoadingMy = () => {
  return (
    <Loading color="success">
      <TextUI>
        <Typewriter
          text={'Carregando...'}
          loop={true}
          speed={240}
          cursor={false}
        />
      </TextUI>
    </Loading>
  );
};

export default LoadingMy;
