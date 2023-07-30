import { Layout } from '@components';
import { NextPage } from 'next';
import { List } from '@styles';
import { Col } from 'react-bootstrap';
import { AiFillLinkedin, MdOutlineEmail, SiGithub, BsWhatsapp } from '@styles';

const Footer: NextPage = () => {
  return (
    <footer>
      <Layout>
        <Col xs={12}>
          <List className="d-flex">
            <li>
              <a
                href="https://www.linkedin.com/in/maicon-gabriel-alves-7b171421b/"
                target={'_blank'}
                rel={'noreferrer'}
              >
                <span>
                  <AiFillLinkedin />
                </span>
              </a>
            </li>
            <li>
              <a href="mailto:maicongabrielalves99@gmail.com">
                <span>
                  <MdOutlineEmail />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/maikeg-alves"
                target={'_blank'}
                rel={'noreferrer'}
              >
                <span>
                  <SiGithub />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5511997217411"
                target={'_blank'}
                rel={'noreferrer'}
              >
                <span>
                  <BsWhatsapp />
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
