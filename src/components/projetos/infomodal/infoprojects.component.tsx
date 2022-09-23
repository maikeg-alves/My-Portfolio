import { ICard } from '@/interfaces/projects.interface';
import { Col, Container, Row } from 'react-bootstrap';

export default function InfoProjects({
  name,
  description,
  image,
  url,
  github,
  technologies,
  data,
}: ICard) {
  return (
    <Container style={{ height: '100%' }}>
      <Row className="justify-content-center align-items-center flex-column h-100 w-100 m-0 ">
        <Col xs={12}>
          <h1>{name}</h1>
          <p>{description}</p>
          <p>{image}</p>
          <p>{url}</p>
          <p>{github}</p>
          <p>{technologies}</p>
          <p>{data}</p>
        </Col>
      </Row>
    </Container>
  );
}
