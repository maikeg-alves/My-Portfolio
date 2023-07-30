import React from 'react';
import { Main, Overlay } from './styles';
/* import { useAnimation } from 'framer-motion';
 */
interface MenuFullScreenProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const MenuFullScreen: React.FC<MenuFullScreenProps> = ({
  isOpen,
  children,
}) => {
  return (
    <Main isOpen={isOpen}>
      <Overlay isOpen={isOpen}>
        <div className={`fade-in${isOpen ? ' show' : ''}`}>{children}</div>
      </Overlay>
    </Main>
  );
};

export default MenuFullScreen;
