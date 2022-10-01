import { NextPage } from 'next';
import { Text } from './textnext.style';

type TextProps = {
  children: React.ReactNode;
  size?:
    | 'fs-1 text'
    | 'fs-2 text'
    | 'fs-3 text'
    | 'fs-4 text'
    | 'fs-5 text'
    | 'fs-6 text';
};

const TextNext: NextPage<TextProps> = ({ children, size }) => {
  return (
    <Text className={`${size}`}>
      <span>{children}</span>
    </Text>
  );
};

export default TextNext;
