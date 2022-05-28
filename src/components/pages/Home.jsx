import { Button, Container, Row } from "react-bootstrap";

import './style-all-pages.css'


export default function Home() {
    return (
       <div className="">
       <Container className="Home" >
           <Row className="home-row align-content-center">
               <div className="corpo-home col-12 px-5">
                   <div className="home-hello col-12 py-1">
                       <h1>Hello World</h1>
                   </div>
                   <div className="home-name col-12 py-2">
                       <h1>MAICON GABRIEL ALVES</h1>
                   </div>
                   <div className="home-description col-6">
                       <p className="text-break">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti ullam, et aperiam sint iste eaque libero. Nostrum, neque! Ad cupiditate magni debitis nemo quos quaerat libero voluptatibus, porro ipsam voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus voluptate ipsa. Optio obcaecati ullam ea quas minus qui ipsum voluptates, iusto maiores natus quo dolore maxime vero quia atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quibusdam quo dolorum iste incidunt dolor totam, atque illum, pariatur ipsam mollitia maxime similique recusandae, facilis deserunt numquam cum est dolore!</p>
                   </div>
                   <div className="home-contato col-12 py-2">
                       <Button>ENTRE EM CONTATO</Button>
                   </div>
               </div>
           </Row>
       </Container>
       </div>
   
    )
}
