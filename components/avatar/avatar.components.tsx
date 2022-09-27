import Image from 'next/image';
import { Reponsive } from '../../libs/responsivesize/responsive';
import IMG_AVATAR from '../../public/images/avatar.png';
import { MyAvatar } from './avatar.style';

const Avatar = ({ mobile }: { mobile?: boolean }) => {
  return (
    <MyAvatar
      accessKey={`${
        mobile
          ? Reponsive('100px', '100px', 960)
          : Reponsive('120px', '150px', 960)
      }`}
    >
      <Image
        src={IMG_AVATAR}
        alt={'foto de perfil'}
        width={Reponsive('120px', '150px', 960)}
        height={Reponsive('120px', '150px', 960)}
      />
    </MyAvatar>
  );
};

export default Avatar;
