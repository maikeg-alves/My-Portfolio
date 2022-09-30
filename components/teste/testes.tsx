import { NextPage } from 'next';
import Image from 'next/image';
/* import { DarkMode, LightMode } from 'styles'; */
import { Reponsive } from '../../libs/responsivesize/responsive';

import { MyAvatar } from '../avatar/avatar.style';

type Mobile = {
  mobile?: boolean;
  img?: string;
};

const Testimg: NextPage<Mobile> = ({ mobile, img }) => {
  return (
    <MyAvatar
      accessKey={`${
        mobile
          ? Reponsive('100px', '100px', 960)
          : Reponsive('145px', '130px', 960)
      }`}
    >
      <Image
        /* src={`${img}`} */
        src={`${img}`}
        alt={'foto de perfil'}
        width={'500px'}
        height={'500px'}
      />
    </MyAvatar>
  );
};

export default Testimg;
