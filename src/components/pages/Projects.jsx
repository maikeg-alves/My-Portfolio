//componets are the pieces of the application
import ProjectModal from "../layout/project_select";
import { useEffect, useState } from "react";
import { useRef } from "react";
import api from "../services/api";

//styled components
import {
  AiFillGithub,
  AiOutlineCodeSandbox,
  AiOutlineRead,
} from "react-icons/ai";
import { Modal } from "react-bootstrap";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { SizeWin } from "../themes/styles/stylesAll";
import {
  Buttun,
  RowBtn,
  Carousel,
  Title,
  Card,
} from "../themes/styles/Projects_styles";
import { Skeleton_Select, Skeleton_Projects } from "../skeleton/sheleton";

export default function Projects() {
  const [ID, setID] = useState(0);

  const [show, setShow] = useState(false);

  const [base, setBase] = useState([]);
  const [project, setProject] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      api.get("/projects").then((res) => {
        setBase(res.data.project);
      });

      api.get(`/project/${ID}`).then((res) => {
        setProject([res.data]);
      });
    }, 1000);
  }, [ID]);

  //SCROL CAROUSEL
  function leftscroll(e) {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  function rightscroll(e) {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  const dateformating = (date) => {
    const dateObj = new Date(date);
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <>
      <SizeWin className="Project" id="projects">
        <div className="container w-100 h-100 d-flex flex-column justify-content-center align-items-center reveal">
          <Title className="container col-12">
            <h1>PROJETOS</h1>
          </Title>

          <div className="container d-flex align-items-center ">
            <RowBtn>
              <Buttun onClick={leftscroll}>
                <AiOutlineLeft />
              </Buttun>
            </RowBtn>

            <Carousel
              className=" d-flex w-100 align-items-center"
              ref={carousel}
            >
              <div className="d-flex">
                {base.length > 0 ? (
                  base.map((item) => {
                    return (
                      <Card>
                        <div
                          className="card-img"
                          style={{ backgroundImage: `url(${item.img})` }}
                        ></div>
                        <ul className="social-media">
                          <li>
                            <button
                              onClick={() => {
                                setShow(true), setID(item.id);
                              }}
                            >
                              <AiOutlineRead />
                            </button>
                          </li>
                          <li>
                            <a
                              href={`https://githubbox.com/maikeg-alves/${item.github_name}`}
                              target="_blank"
                              alt="CodeSandBox"
                            >
                              <AiOutlineCodeSandbox />
                            </a>
                          </li>
                          <li>
                            <a
                              href={`https://github.com/maikeg-alves/${item.github_name}`}
                              target="_blank"
                              alt="Github link repositorio"
                            >
                              <AiFillGithub />
                            </a>
                          </li>
                        </ul>
                        <div className="card-info">
                          <p className="title">{item.name_project}</p>
                          <p className="subtitle">
                            {dateformating(item.date_created)}
                          </p>
                        </div>
                      </Card>
                    );
                  })
                ) : (
                  <>
                    <Skeleton_Projects />
                  </>
                )}
              </div>
            </Carousel>

            <RowBtn>
              <Buttun onClick={rightscroll}>
                <AiOutlineRight />
              </Buttun>
            </RowBtn>
          </div>
        </div>
      </SizeWin>

      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        {project.length > 0 ? (
          project.map((item) => {
            return (
              <ProjectModal
                key={generateUniqueId()}
                name={item.name_project}
                description={item.description}
                gif={item.gif}
                repo={item.linkrepo}
                gitName={item.github_name}
                difficuty={item.difficulty}
                technology1={item.technologys?.[0].id_technology}
                technology2={item.technologys?.[1].id_technology}
                technology3={item.technologys?.[2].id_technology}
              />
            );
          })
        ) : (
          <>
            <Skeleton_Select />
          </>
        )}
      </Modal>
    </>
  );
}
