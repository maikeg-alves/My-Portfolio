import React from 'react';
import {
  BarBottom,
  BarMiddle,
  BarTop,
  HamburgerMenuWrapper,
  InputCheckbox,
  LabelToggle,
} from './styles';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClick }) => {
  return (
    <HamburgerMenuWrapper onClick={onClick}>
      <InputCheckbox
        type="checkbox"
        checked={isOpen}
        onChange={() => {
          console.log('');
        }}
      />
      <LabelToggle>
        <BarTop isOpen={isOpen} />
        <BarMiddle isOpen={isOpen} />
        <BarBottom isOpen={isOpen} />
      </LabelToggle>
    </HamburgerMenuWrapper>
  );
};

export default HamburgerMenu;
