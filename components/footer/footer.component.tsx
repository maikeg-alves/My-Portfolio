import Layout from 'components/layout/layout.component';
import { NextPage } from 'next';
import { List } from '@styles';
import { AiFillLinkedin } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';
import { Col } from 'react-bootstrap';

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
