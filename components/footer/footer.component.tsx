import Layout from 'components/layout/layout.component';
import { NextPage } from 'next';
import { List } from '@styles';
import { Col } from 'react-bootstrap';
import { AiFillLinkedin, MdOutlineEmail, SiGithub } from '@styles';

const Footer: NextPage = () => {
  return (
    <footer>
      <Layout>
        <Col xs={12}>
          <List>
            <li>
              <a href="">
                <span>
                  <AiFillLinkedin />
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <span>
                  <MdOutlineEmail />
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <span>
                  <SiGithub />
                </span>
              </a>
            </li>
          </List>
        </Col>
      </Layout>
    </footer>
  );
};

export default Footer;
