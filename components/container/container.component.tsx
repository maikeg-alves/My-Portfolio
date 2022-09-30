import { NavBar, Footer } from '../index';
import { Main } from '../container/container.styled';
import { ContainerProps } from 'react-bootstrap';
import styles from '../../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function Container({ children }: ContainerProps) {
  return (
    <Main className={styles.main}>
      <NavBar />
      <Main>{children}</Main>
      <Footer />
    </Main>
  );
}
