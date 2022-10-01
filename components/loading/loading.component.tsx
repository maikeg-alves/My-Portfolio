import { Loading } from '@nextui-org/react';
import { Typewriter, TextNext } from '@components';

const LoadingMy = () => {
  return (
    <Loading color="success">
      <TextNext>
        <Typewriter
          text={'Carregando...'}
          loop={true}
          speed={240}
          cursor={false}
        />
      </TextNext>
    </Loading>
  );
};

export default LoadingMy;
