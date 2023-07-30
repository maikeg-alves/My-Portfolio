import { NextPage } from 'next';
import Image from 'next/image';

import { Responsive } from '@utils';
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
    >
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
