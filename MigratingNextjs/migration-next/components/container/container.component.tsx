import { ContainerProps } from 'react-bootstrap';
import NavBar from '../navbar/navbar.component';

export default function Container({ children }: ContainerProps) {
  return (
    <div className="container">
      <NavBar />
      {children}
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1rem;
        }
      `}</style>
    </div>
  );
}
