/* import { Container, Nav, Navbar } from "react-bootstrap";*/
import { Text } from "@nextui-org/react";
import {Nav} from "../themes/styles/components/menu.style";
import RouteLink from "./RouteLink";


export default function Menu() {

  const date = new Date();

  const monthNames: String[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function day():string{
    if (date.getHours() <= 11) {
         return "Bom dia";
      } else if (date.getHours() == 12 || date.getHours() <= 17) {
          return "Boa tarde";
      } else {
         return "Boa noite";
    }

  };

  
  const routes = [
    {
      route: "/",
      text: "Home",

    },
    {
      route: "/aboutme",
      text: "About me",
    },
    {
      route: "/skills",
      text: "Skills",
    },
    {
      route: "/projects",
      text: "Projects",
    },
    {
      route: "/contact",
      text: "Contact",
    },

  ];

  return (
    <Nav isBordered variant="floating" css={{
      background: "transparent",
    }} >
      <Nav.Toggle showIn="xs" />

      <Nav.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Text b color="inherit" hideIn="xs">
          MY PORTFOLIO
        </Text>
        
      </Nav.Brand>
      
      <Nav.Content
        hideIn="xs"
        variant="underline" 
      >
    
        {routes.map((route) => (
          <Nav.Link>
          <RouteLink route={route.route} text={route.text} />
          </Nav.Link>
        ))}
        
      </Nav.Content>
     
     <Nav.Collapse  >
        
        {routes.map((route) => (
        
          <Nav.CollapseItem>
            <RouteLink route={route.route} text={route.text}/>
         </Nav.CollapseItem>
        ) 
        )}
        
      </Nav.Collapse> 
    </Nav>
  );
}



