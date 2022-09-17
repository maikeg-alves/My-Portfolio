import React from 'react';
import { MyAvatar } from '../themes/styles/components/avatar.style';
import IMGPROFILE from '@img/avatar.png';

export default function Avatar() {
  return (
    <MyAvatar className="img-flex col-5">
      <img src={IMGPROFILE} alt="avatar" />
    </MyAvatar>
  );
}
