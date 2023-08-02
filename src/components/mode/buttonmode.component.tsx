import React from 'react';
import { Float } from './buttonmode.style';

type Props = {
  readonly setState: (args: boolean) => void;
};

const BtnMode: React.FC<Props> = ({ setState }) => {
  const handleChange = (e: React.MouseEvent) => {
    setState((e.target as HTMLInputElement).checked);

    //store in localstorage
    localStorage.setItem(
      'mode',
      (e.target as HTMLInputElement).checked ? 'light' : ' dark',
    );
  };

  return (
    <Float className="float">
      <div className="my-float" onClick={handleChange}>
        <input id="checkbox" type="checkbox" />
        <div className="container">
          <label htmlFor="checkbox" id="switch">
            <div className="mode"></div>
          </label>
        </div>
      </div>
    </Float>
  );
};

export default BtnMode;
