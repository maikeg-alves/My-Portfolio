import { Col, Container, Row } from "react-bootstrap";
import { BsFillCircleFill } from "react-icons/bs";
import $ from "jquery";
import "./navbools.css";

export default function NavBools() {
  const menuLinks = document.querySelectorAll('.menu-bol a[href^="#"]');

  function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
  }

  // function nativeScroll(distanceFromTheTop) {
  //   window.scroll({
  //     top: distanceFromTheTop,
  //     behavior: "smooth",
  //   });
  // }

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

  return (
    <>
      <Row className="Navbools">
        <Col xs="auto">
          <li className="menu-bol" onClick={()=> $('.circle1').addClass('select')}>
            <a className="circle1" href="#home">
              <BsFillCircleFill />
            </a>
          </li>
          <li className="menu-bol">
            <a className="circle2" href="#aboutme">
              <BsFillCircleFill />
            </a>
          </li>
          <li className="menu-bol">
            <a className="circle3" href="#projects">
              <BsFillCircleFill />
            </a>
          </li>
          <li className="menu-bol">
            <a className="circle4" href="#footer">
              <BsFillCircleFill />
            </a>
          </li>
        </Col>
      </Row>
    </>
  );
}
