import { MyAvatar } from '../themes/styles/components/avatar.style';
import IMGPROFILE from '../assets/img/avatar.png';

export default function Avatar() {
  return (
    <MyAvatar className="img-flex col-5">
      <img src={`${IMGPROFILE}`} alt="avatar" />
    </MyAvatar>
  );
}
