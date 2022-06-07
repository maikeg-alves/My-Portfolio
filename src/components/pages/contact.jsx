import { Form } from "react-bootstrap";
import "./styles/contact.css";
import {AiOutlineClose} from "react-icons/ai"

export default function Contact() {
  return (
    <>
 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content bg-black">
      <div class="modal-body p-0">
      <div className="Contact d-flex justify-content-center my-3" >
      <div className="close close_contact col-11 " type="button" data-dismiss="modal" aria-label="Close">
        <span><AiOutlineClose/></span> 
      </div>
      <div className="Row_Contact col-12">
        <div>
          <img src="/src/img/Grupo35.png" alt="" />
        </div>
        <div className="col-12 px-5 my-2">
          <h2 className="text-break">
            Me mande uma proposta de reunião ou entrevista, estou a disposição,
            irei retornar contato o mais breve possível.
          </h2>
        </div>
        <Form className="col-12 px-5 my-2">
          <Form.Group className=" mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome:</Form.Label>
            <Form.Control type="name"  placeholder="Insira seu nome ou da sua corporação" />
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email"  placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Proposta:</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
        <div className="enviar col-auto ">
            <button className="enviar-style"> Enviar</button>
        </div>
      </div>
    </div>
      </div>
    </div>
  </div>
</div>
</>
  );
}
