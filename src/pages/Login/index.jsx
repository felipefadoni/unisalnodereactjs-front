import React from 'react';

import { Row, Col } from 'react-bootstrap';

import { ContainerLogin } from './style';

import logo from '../../assets/images/logo.png';
import imagemLogin from '../../assets/images/imagem-login.png';

export default () => {
  return (
    <ContainerLogin>
      <Row className='mt-5'>
        <Col>
          <img src={logo} />
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col xs={12} sm={12} md={12} lg={6} xl={8} className='text-center'>
          <img src={imagemLogin} className='img-responsiva' />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={4}>
          <div className='container-login'>
            <form>
              <h2>Acessar</h2>
              <Row className="mb-4">
                <Col>
                  <input type='text' placeholder='Seu login' />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <input type='password' placeholder='Sua senha' />
                </Col>
              </Row>
              <Row>
                <Col>
                  <button>Entrar</button>
                </Col>
              </Row>
            </form>
          </div>
        </Col>
      </Row>
    </ContainerLogin>
  );
};
