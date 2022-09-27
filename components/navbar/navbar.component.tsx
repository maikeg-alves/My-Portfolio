import { Text } from '@nextui-org/react';
import Link from 'next/link';
import { LinkText, Nav } from './navbar.styled';

export default function NavBar() {
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
      <Nav
        isBordered
        variant="floating"
        css={{
          background: 'transparent',
        }}
      >
        <Nav.Toggle showIn="xs" />

        <Nav.Brand
          css={{
            '@xs': {
              w: '12%',
            },
          }}
        >
          <Text b color="inherit" hideIn="xs">
            MY PORTFOLIO
          </Text>
        </Nav.Brand>

        <Nav.Content hideIn="xs" variant="underline" activeColor={'success'}>
          {routes.map((item, id) => (
            <Link href={`${item.route}`} key={id}>
              <LinkText>{item.name}</LinkText>
            </Link>
          ))}
        </Nav.Content>

        <Nav.Collapse>
          {routes.map((item, id) => (
            <Nav.CollapseItem key={id}>
              <Link href={`${item.route}`}>
                <LinkText>{item.name}</LinkText>
              </Link>
            </Nav.CollapseItem>
          ))}
        </Nav.Collapse>
      </Nav>
    </>
  );
}
