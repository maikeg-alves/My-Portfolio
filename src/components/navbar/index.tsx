import React from 'react';
import HamburgerMenu from './menuHamburger';
import { NavBar, Nav, NavLink, SimpleLink } from './styles';

import { useRouter } from 'next/router';
import { useMediaQuery } from '@libs';
import MenuFullScrean from './menuFullScreen';

export default function NavBar() {
  const router = useRouter();

  const routes = [
    {
      id: 1,
      route: '/',
      name: 'Home',
    },
    {
      id: 2,
      route: '/about',
      name: 'Sobre mim',
    },
    {
      id: 3,
      route: '/skills',
      name: 'Habilidades',
    },
    {
      id: 4,
      route: '/projects',
      name: 'Projetos',
    },
    {
      id: 5,
      route: '/contact',
      name: 'Contato',
    },
  ];

  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const isMobile = useMediaQuery(768);

  return (
    <>
      <NavBar>
        <Nav>
          {isMobile && (
            <div>
              <HamburgerMenu isOpen={isMenuOpen} onClick={handleMenuToggle} />
            </div>
          )}

          <SimpleLink
            onClick={() => router.push('/')}
            isHambugerVisible={useMediaQuery(650)}
          >
            <b>MY PORTFOLIO</b>
          </SimpleLink>

          <div className="d-none d-md-block">
            <ul>
              {routes.map((route) => (
                <NavLink
                  key={route.id}
                  onClick={() => router.push(route.route)}
                >
                  {route.name}
                </NavLink>
              ))}
            </ul>
          </div>
        </Nav>
      </NavBar>

      <MenuFullScrean isOpen={isMenuOpen}>
        {routes.map((route) => (
          <NavLink key={route.id} onClick={() => router.push(route.route)}>
            {route.name}
          </NavLink>
        ))}
      </MenuFullScrean>
    </>
  );
}
