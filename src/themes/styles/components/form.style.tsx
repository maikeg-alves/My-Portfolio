import { Form } from 'react-bootstrap';
import styled from 'styled-components';

export const FormMy = styled(Form)`
  input,
  textarea {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    padding: 0 10px;
    margin-bottom: 10px;
  }
  textarea {
    height: 100px;
  }
`;
