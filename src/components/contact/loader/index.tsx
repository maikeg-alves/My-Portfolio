import styled from 'styled-components';

export const Spinner = styled.div<{ bodyMode: boolean }>`
  height: ${(props) => (props.bodyMode ? '500px' : '360px')};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .spinner {
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    &::before,
    &:after {
      content: '';
      position: absolute;
      border-radius: inherit;
    }

    &:before {
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        0deg,
        #00ee87 0%,
        ${(props) =>
            props.bodyMode
              ? props.theme.body.color
              : props.theme.body.background}
          100%
      );
      animation: spin8932 0.5s infinite linear;
    }

    &:after {
      width: 85%;
      height: 85%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: ${(props) =>
        props.bodyMode ? props.theme.body.color : props.theme.body.background};
    }

    @keyframes spin8932 {
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

interface Props {
  bodyMode: boolean;
}

export default function SpinnerLoader({ bodyMode }: Props) {
  console.log('o avatar está', bodyMode ? 'foi' : 'não foi ');

  return (
    <Spinner bodyMode={bodyMode}>
      <div className="spinner"></div>
    </Spinner>
  );
}
