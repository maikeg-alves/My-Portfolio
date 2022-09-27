import { Text } from '@nextui-org/react';
import Link from 'next/link';
import { Nav } from './navbar.styled';

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
          {routes.map((item) => (
            <Link href={`${item.route}`}>
              <a>{item.name}</a>
            </Link>
          ))}
        </Nav.Content>

        <Nav.Collapse>
          {routes.map((item) => (
            <Nav.CollapseItem>
              <Link href={`${item.route}`}>
                <a>{item.name}</a>
              </Link>
            </Nav.CollapseItem>
          ))}
        </Nav.Collapse>
      </Nav>
    </>
  );
}
