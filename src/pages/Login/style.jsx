import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const ContainerLogin = styled(Container)`

  .container-login {
    border: 1px solid #E7E7E7;
    display: block;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    padding: 27px 23px;

    h2 {
      margin-bottom: 38px;
      font-weight: 700;
    }

    input[type=text],
    input[type=password] {
      padding: 10px 18px;
      background: #FFFFFF;
      border: 1px solid #9A9A9A;
      box-sizing: border-box;
      border-radius: 3px;
      font-size: 14px;
      color: #828282;
      font-weight: 400;
      outline: none;
      display: block;
      width: 100%;

      &::placeholder {
        color: #828282;
      }
    }

    button {
      background: #06406B;
      border-radius: 3px;
      outline: none;
      font-size: 14px;
      color: #FFF;
      border: none;
      display: block;
      width: 100%;
      padding: 18px 0px;
    }
  }

  @media screen and (min-width: 0) and (max-width: 508px) {
    .img-responsiva {
      width: 100%;
    }
  }

`;
