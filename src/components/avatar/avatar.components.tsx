/* import { ITheme } from 'interfaces'; */
import /* ITheme */ 'src/interfaces';
import { NextPage } from 'next';
import Image from 'next/image';
/* import { DarkMode, LightMode } from 'styles'; */
import { Responsive } from '../../libs/responsivesize/responsive';
/* import IMG_AVATAR from '../../public/images/avatar.png'; */
import { MyAvatar } from './avatar.style';

type Props = {
  mobile?: boolean;
};

const Avatar: NextPage<Props> = (props) => {
  return (
    <MyAvatar
      accessKey={`${
        props.mobile
          ? Responsive('100px', '100px', 960)
          : Responsive('145px', '100%', 960)
      }`}
      /*  width={`${props.mobile ? '125px' : '150px'}`}
      height={`${props.mobile ? '125px' : '150px'}`} */
    >
      {/*   <Image
        src={`/images/avatar.png`}
        alt={'foto de perfil'}
        width={}
        height={}
        priority
      /> */}

      <Image
        src={`/images/avatar.png`}
        alt={'foto de perfil'}
        width={150}
        height={150}
        priority
      />
    </MyAvatar>
  );
};

export default Avatar;
