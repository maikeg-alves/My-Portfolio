import React from 'react';
import { Text } from '@nextui-org/react';
import Link from 'next/link';
import { LinkText, Nav } from './navbar.styled';
import { Responsive } from 'libs';

export default function NavBar() {
  const [isSideMenuOpen, setIsSideMenuOpen] = React.useState<boolean>(false);
  const [activeMenu, setActiveMenu] = React.useState();

  React.useEffect(() => {
    isSideMenuOpen && (document.body.style.overflow = 'hidden');
  }, [isSideMenuOpen]);

  const HandleSideMenu = (flag = false, index = undefined) => {
    setTimeout(() => {
      setActiveMenu(index);
      flag && setIsSideMenuOpen(!isSideMenuOpen);
      isSideMenuOpen && setIsSideMenuOpen(false);
    }, 300);
  };

  type MenuProps = {
    route: string;
    name: string;
  };

  const routes: MenuProps[] = [
    {
      route: '/',
      name: 'Home',
    },
    {
      route: '/about',
      name: 'About me',
    },
    {
      route: '/skills',
      name: 'Skills',
    },
    {
      route: '/projects',
      name: 'Projects',
    },
    {
      route: '/contact',
      name: 'Contact',
    },
  ];

  return (
    <>
      <Nav variant="floating">
        <Nav.Toggle
          showIn="xs"
          isSelected={isSideMenuOpen}
          onChange={() => HandleSideMenu(true, activeMenu)}
        />
        <Nav.Brand
          css={{
            '@xs': {
              w: '12%',
            },
          }}
          className="col"
          style={{
            marginRight: '22px',
            justifyContent: Responsive('flex-start', 'center', 650),
          }}
        >
          <Text b color="inherit">
            MY PORTFOLIO
          </Text>
        </Nav.Brand>

        <Nav.Content hideIn="xs" variant="underline" activeColor={'success'}>
          {routes.map((item, id) => (
            <Link href={`${item.route}`} key={id}>
              <LinkText
                isActive={id === activeMenu}
                onClick={() => HandleSideMenu(false)}
              >
                {item.name}
              </LinkText>
            </Link>
          ))}
        </Nav.Content>

        <Nav.Collapse isOpen={isSideMenuOpen}>
          {routes.map((item, id) => (
            <Nav.CollapseItem key={id}>
              <Link href={`${item.route}`}>
                <LinkText
                  isActive={id === activeMenu}
                  onClick={() => HandleSideMenu(false)}
                >
                  {item.name}
                </LinkText>
              </Link>
            </Nav.CollapseItem>
          ))}
        </Nav.Collapse>
      </Nav>
    </>
  );
}
