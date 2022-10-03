/* import { ITheme } from 'interfaces'; */
import /* ITheme */ 'interfaces';
import { NextPage } from 'next';
import Image from 'next/image';
/* import { DarkMode, LightMode } from 'styles'; */
import { Responsive } from '../../libs/responsivesize/responsive';
/* import IMG_AVATAR from '../../public/images/avatar.png'; */
import { MyAvatar } from './avatar.style';

type Mobile = {
  mobile?: boolean;
};

const Avatar: NextPage<Mobile> = ({ mobile }) => {
  return (
    <MyAvatar
      accessKey={`${
        mobile
          ? Responsive('100px', '100px', 960)
          : Responsive('145px', '130px', 960)
      }`}
    >
      <Image
        src={`https://i.imgur.com/nBtsD1X.png`}
        alt={'foto de perfil'}
        width={'500px'}
        height={'500px'}
      />
    </MyAvatar>
  );
};

export default Avatar;
