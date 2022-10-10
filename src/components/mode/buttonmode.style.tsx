import styled from 'styled-components';

export const Float = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: #fff;
  text-align: center;
  font-size: 30px;
  cursor: pointer;
  z-index: 100;

  *,
  *::before,
  *::after {
    margin: 0;
    box-sizing: border-box;
  }

  .container {
    margin: 0;
    padding: 0;
    width: ${(props) => props.defaultValue};
    height: ${(props) => props.defaultValue};
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 50px;
  }

  #switch {
    position: relative;
    background: transparent;
    border: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
  }

  #checkbox {
    display: none;
  }

  #switch .mode {
    position: relative;
    width: 20px;
    height: 20px;

    border-radius: 50%;
    background: #111111;

    transition: transform 0.45s ease;
  }

  #switch .mode::before {
    // sun
    content: '';
    position: absolute;

    width: 6px;
    height: 6px;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 50%;

    background: inherit;

    z-index: -1;
    opacity: 0;

    transition: box-shadow 0.4s 0s ease;
  }

  #switch .mode::after {
    // moon

    content: '';
    position: absolute;
    width: 100%;
    height: 100%;

    top: -30%;
    left: 30%;

    border-radius: 50%;
    background: white;

    transition: transform 0.45s ease;
  }

  #checkbox:checked + .container {
    background: #111111;

    #switch .mode {
      transform: scale(0.5);
      background: white;

      &::before {
        opacity: 1;

        box-shadow: 0 -20px 0 0 white, 0 20px 0 0 white, -20px 0 0 0 white,
          20px 0 0 0 white, 15px 15px 0 0 white, 15px -15px 0 0 white,
          -15px 15px 0 0 white, -15px -15px 0 0 white;
      }

      &::after {
        opacity: 0;
        transform: translateX(50%) translateY(-50%);
      }
    }
  }
`;
