import { Box, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import api from "../services/api";
import { Sheleton_skills } from "../skeleton/sheleton";
import { Skills_row } from "../themes/styles/skills-styles";
import { SizeWin } from "../themes/styles/stylesAll";

export default function Skills() {
  const [tech, setTech] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      api.get("/technologys").then((res) => {
        setTech(res.data.tecnologi);
      });
    }, 1000);
  }, []);
  
  return (
    <SizeWin className="Skills " id="skills">
      <Skills_row className="reveal">
        <Col xs={12}>
          <h1>HABILIDADES</h1>
        </Col>
        <Col>
          <ul className="ul-bg">
            {tech.length > 0 ? (
              tech.map((tech) => (
                <li key={tech.id}>
                  <img src={tech.img} alt={tech.name} />
                  <p>{tech.name}</p>
                </li>
              ))
            ) : (
              <Sheleton_skills />
            )}
          </ul>
        </Col>
      </Skills_row>
    </SizeWin>
  );
}
