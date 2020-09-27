import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { Row, Col } from 'react-bootstrap';

import authenticationsServices from '../../services/authentications';
import basicAuthService from '../../services/basic';

import Header from '../../components/Header';
import { ContainerLogin } from './style';

import imagemLogin from '../../assets/images/imagem-login.png';

export default () => {
  const history = useHistory();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const autenticar = await authenticationsServices.authenticate({
      login,
      password
    });
    const { authenticate } = autenticar.data;
    if (authenticate) {
      const basicAuth = basicAuthService();
      sessionStorage.setItem('@auth:unisal', JSON.stringify(basicAuth));
      history.push('/home');
    } else {
      setLogin('');
      setPassword('');
      alert('Erro! Dados de acesso inválidos.');
    }
  };

  return (
    <ContainerLogin>
      <Header />
      <Row className='mt-5'>
        <Col xs={12} sm={12} md={12} lg={6} xl={8} className='text-center'>
          <img src={imagemLogin} className='img-responsiva' alt='Login img' />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={4}>
          <div className='container-login'>
            <form autoComplete='off' onSubmit={handleFormSubmit}>
              <h2>Acessar</h2>
              <Row className='mb-4'>
                <Col>
                  <input
                    type='text'
                    placeholder='Seu login'
                    onChange={(input) => setLogin(input.target.value)}
                    value={login}
                  />
                </Col>
              </Row>
              <Row className='mb-4'>
                <Col>
                  <input
                    type='password'
                    placeholder='Sua senha'
                    onChange={(input) => setPassword(input.target.value)}
                    value={password}
                  />
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
