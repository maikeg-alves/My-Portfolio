import ProjectModal from "../layout/project_select";
import "./styles/projects.css";
import $ from "jquery";
import Slider from "react-slick/lib/slider";
import { Container, Modal, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Projects() {
  
  const [show, setShow] = useState(false)
  const [id, setID]= useState()


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 5,
    slidesToShow: 5,
  };

  return (
    <>
    <div className="Project" id="projects">
      <Container className="mw-100 h-100">
        <Row className="align-items-center h-100">
          <div>
          <div className="col-12 py-4 ps-5">
            <h1 className="name">PROJETOS</h1>
          </div>
          <div>
            <Slider {...settings}>
              <div>
                <div className="item" onClick={()=>  {setShow(true), setID(1) }}></div>
              </div>
              <div>
                <div className="item" onClick={()=>  {setShow(true), setID(2) }}></div>
              </div>
              <div>
                <div className="item"></div>
              </div>
              <div>
                <div className="item"></div>
              </div>
              <div>
                <div className="item"></div>
              </div>
              <div>
                <div className="item"></div>
              </div>
              <div>
                <div className="item"></div>
              </div>
              <div>
                <div className="item"></div>
              </div>
            </Slider>
          </div>
          </div>

        </Row>
      </Container>
    </div>

    <Modal show={show} fullscreen={true} onHide={()=> setShow(false)}>
     <ProjectModal
     idname={id}
     />
    </Modal>  
    </>
  );
}
