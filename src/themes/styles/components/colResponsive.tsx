import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import withResponsive from '@/components/sizeresponsive/withresponsive.component';

export const ColResponsive = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => withResponsive('100%', '80%')};
`;
