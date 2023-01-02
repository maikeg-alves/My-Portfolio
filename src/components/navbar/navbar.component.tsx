import React from 'react';
import { Text } from '@nextui-org/react';
import Link from 'next/link';
import { LinkText, Navbar } from './navbar.styled';
import { Responsive } from 'src/libs';

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
      name: 'Sobre mim',
    },
    {
      route: '/skills',
      name: 'Habilidades',
    },
    {
      route: '/projects',
      name: 'Projetos',
    },
    {
      route: '/contact',
      name: 'Contato',
    },
  ];

  return (
    <>
      <Navbar variant="floating">
        <Navbar.Toggle
          showIn="xs"
          onChange={() => HandleSideMenu(true, activeMenu)}
        />
        <Navbar.Brand
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
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="underline" activeColor={'success'}>
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
        </Navbar.Content>
        <Navbar.Collapse isOpen={isSideMenuOpen}>
          {routes.map((item, id) => (
            <Navbar.CollapseItem key={id}>
              <Link href={`${item.route}`}>
                <LinkText
                  isActive={id === activeMenu}
                  onClick={() => HandleSideMenu(false)}
                >
                  {item.name}
                </LinkText>
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
