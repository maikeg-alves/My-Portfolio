import { useEffect, useState } from "react";
import { Col, Container, Modal, Row, Stack } from "react-bootstrap";
import apiGithub from "../services/apiGithub";
import CircleProgress from "./CircleProgress";
import api from "../services/api";
import {
  ImgDemostration,
  ModalHeader,
  ModalProject,
  Thechology,
} from "../themes/styles/components/Project-select-style";

export default function ProjectModal({
  name,
  date,
  description,
  gif,
  gitName,
  difficuty,
  technology1,
  technology2,
  technology3,
}) {
  const [data, setData] = useState([]);
  const [datatech, setDatatech] = useState();

  const acontdays = (day1, day2) => {
    let day1_date = new Date(day1);
    let day2_date = new Date(day2);
    let timeDiff = Math.abs(day2_date.getTime() - day1_date.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (diffDays > 1 && diffDays <= 30) {
      return diffDays + " dias";
    } else if (diffDays > 30 && diffDays <= 365) {
      return Math.ceil(diffDays / 30) + " meses";
    } else if (diffDays > 365) {
      return Math.ceil(diffDays / 365) + " anos";
    }
  };

  const dateformating = (date) => {
    const dateObj = new Date(date);
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    setTimeout(() => {
      apiGithub.get(`/${gitName}`).then((res) => {
        setData([res.data]);
      });

      api.get(`/technologys`).then((res) => {
        setDatatech(res.data.tecnologi);
      });
    }, 100);
  }, []);

  //select technologies from api and compare with data.tech
  function getId(id) {
    return datatech.find((item) => item.id === id);
  }

  if (!data || data.length === 0) {
    return null;
  }

  if (!datatech || datatech.length === 0) {
    return null;
  }

  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  }

  return (
    <>
      <ModalHeader closeButton></ModalHeader>
      <Modal.Body>
        <Container>
          <Row>
            <ModalProject className="d-flex justify-content-between">
              <Col xs={6}>
                <Col xs={12}>
                  <h1> {name} </h1>
                </Col>
                <Col xs={12}>
                  <p> {date}</p>
                </Col>
                <div>
                  <p className="text-brek">{description}</p>
                </div>
              </Col>
              <Col xs={5}>
                <div>
                  <p>video demostration project</p>
                </div>
                <ImgDemostration>
                  <img src={gif} alt="this slowpoke moves" width="250" />
                </ImgDemostration>
                <Stack direction="horizontal" className="pt-3" gap={2}>
                  {data.map((item) => {
                    return (
                      <>
                        <Stack key={generateUniqueId()} gap={3}>
                          <a href={item.html_url}>Link do repositorio</a>
                          <p>
                            tempo de criação:{" "}
                            {acontdays(item.created_at, item.updated_at)}
                          </p>
                          <p>
                            ultima atualização: {dateformating(item.updated_at)}
                          </p>
                        </Stack>
                      </>
                    );
                  })}
                  <Stack
                    direction="vertical"
                    className="align-items-center"
                    gap={1}
                  >
                    <p>Dificuldade </p>
                    <CircleProgress value={difficuty} />
                  </Stack>
                </Stack>
                <div className="pt-3">
                  <p>Tecnologias</p>
                  <Thechology direction="horizontal" gap={3}>
                    <li>
                      <img
                        style={{ height: "100%", width: "100%" }}
                        src={getId(technology1).img}
                        alt={getId(technology1).name}
                      />
                    </li>
                    <li>
                      <img
                        style={{ height: "100%", width: "100%" }}
                        src={getId(technology2).img}
                        alt={getId(technology2).name}
                      />
                    </li>
                    <li>
                      <img
                        style={{ height: "100%", width: "100%" }}
                        src={getId(technology3).img}
                        alt={getId(technology3).name}
                      />
                    </li>
                  </Thechology>
                </div>
              </Col>
            </ModalProject>
          </Row>
        </Container>
      </Modal.Body>
    </>
  );
}
