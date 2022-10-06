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
        src={`/images/avatar.png`}
        alt={'foto de perfil'}
        width={'150px'}
        height={'150px'}
        priority
      />
    </MyAvatar>
  );
};

export default Avatar;
