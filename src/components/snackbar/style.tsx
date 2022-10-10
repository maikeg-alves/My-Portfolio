import styled from 'styled-components';

interface Props {
  readonly open?: boolean;
  readonly type?: 'error' | 'success';
}

export const MYSnackbar = styled.div<Props>`
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  min-width: 250px;
  margin-left: -150px;
  background-color: ${(props) =>
    (props.type === 'error' && '#f44336') ||
    (props.type === 'success' && '#4caf50')};

  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;

  span {
    padding: 8px 0px;
    min-width: 0px;
    overflow: auto;
  }

  .icon {
    margin-right: 10px;
  }

  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;

  @-webkit-keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
`;
