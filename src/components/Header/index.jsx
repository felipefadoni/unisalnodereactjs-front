import React from 'react';

import { useHistory } from 'react-router-dom';

import { Row, Col } from 'react-bootstrap';

import { BtnSair, ColLogoHeader } from './style';

import logo from '../../assets/images/logo.png';

export default ({ alignLogo = 'left', showExit = false }) => {
  const history = useHistory();

  const handleExit = () => {
    sessionStorage.removeItem('@auth:unisal');
    history.push('/');
  };

  return (
    <Row className='mt-5'>
      <ColLogoHeader align={alignLogo}>
        <img src={logo} alt='Logo' />
      </ColLogoHeader>
      {showExit ? (
        <Col className="text-center">
          <BtnSair onClick={handleExit}>Sair</BtnSair>
        </Col>
      ) : (
        ''
      )}
    </Row>
  );
};
