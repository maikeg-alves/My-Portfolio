import React from 'react';
import { Float } from './buttonmode.style';
import { Reponsive } from '@libs';

type Props = {
  readonly setState: (arg0: boolean) => void;
};

const BtnMode: React.FC<Props> = ({ setState }) => {
  const handleChange = (e: React.MouseEvent) => {
    setState((e.target as HTMLInputElement).checked);
  };

  return (
    <Float className="float" defaultValue={Reponsive('60px', '50px', 960)}>
      <div className="my-float">
        <input id="checkbox" type="checkbox" onClick={handleChange} />
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
