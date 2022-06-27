import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import api from "../services/api";
import { Skills_row, Skills_row_lodding } from "../themes/styles/skills-styles";
import { SizeWin } from "../themes/styles/stylesAll";

export default function Skills() {
  const [tech, setTech] = useState([]);

  useEffect(() => {
    api.get("/technologys").then((res) => {
      setTech(res.data.tecnologi);
    });
  }, []);

  console.log(tech);

  return (
    <SizeWin className="Skills" id="skills">
      <Skills_row >
        <Col xs={12}>
          <h1>HABILIDADES</h1>
        </Col>
        <Col>
          <ul>
            {tech === [] ? (
                <Skills_row_lodding>
                    <li>Carregando...</li> 
                </Skills_row_lodding>    
            ) : (
              tech.map((tech) => 
              <li>
                <img src={tech.img} alt={tech.name} />
                  <p>{tech.name}</p> 
              </li>
            ))}
          </ul>
        </Col>
      </Skills_row>
    </SizeWin>
  );
}
