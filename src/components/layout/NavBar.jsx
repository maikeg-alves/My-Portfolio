import { Container, Nav, Navbar} from "react-bootstrap";
import { Menu, Day_menu, Show_menu } from "../themes/styles/components/Navbar-styles";


export default function NavBar() {

  const menuLinks = document.querySelectorAll('.menu-bol a[href^="#"]');
  function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
  }

  function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
    smoothScrollTo(0, distanceFromTheTop);
  }

  menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });

  function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== "undefined" ? duration : 400;

    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60);
  }

  const date = new Date();
  const monthNames = [
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

  const day = () => {
    if (date.getHours() <= 11) {
      return "Bom dia ";
    } else if (date.getHours() == 12 || date.getHours() <= 17) {
      return "Boa tarde ";
    } else {
      return "Boa noite ";
    }
  };

  return (
    <Menu className=" container-lg">
      <Navbar>
        <Container>
          <Navbar.Toggle />
          <Navbar href="#home">
            <Day_menu className="col-auto fs-5">{day() + date.getDate() + " " + monthNames[date.getMonth()]}</Day_menu> 
          </Navbar>
          <Show_menu>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#aboutme">ABOUT ME</Nav.Link>
            <Nav.Link href="#skills">HABILIDADES</Nav.Link>
            <Nav.Link href="#projects">PROJETOS</Nav.Link>
            <Nav.Link href="#footer">CONTATO</Nav.Link>
          </Navbar.Collapse>
          </Show_menu>
        </Container>
      </Navbar>
    </Menu>
  );
}
