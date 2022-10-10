import Image from 'next/image';
import styled from 'styled-components';

type Props = {
  radios?: string;
};

export const ImageNext = styled(Image)`
  border-radius: ${(props: Props) => props.radios || '0px'};
  border: 3px solid #00ee87 !important;
`;
