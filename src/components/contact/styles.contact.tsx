import { Form } from 'react-bootstrap';

const StyledForm = styled(Form)`
  input,
  textarea {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    padding: 0 10px;
    margin-bottom: 10px;
    border: ${!input ? `1px solid #656565` : `2px solid #ff0000`};
  }
  textarea {
    height: 100px;
  }
`;
