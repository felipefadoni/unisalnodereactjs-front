import styled from 'styled-components';

import { Container } from 'react-bootstrap';

export const ContainerHome = styled(Container)`
  h2 {
    font-size: 30px;
    font-weight: 700;
    margin-top: 52px;
    margin-bottom: 26px;
  }

  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  form {
    border-bottom: 2px dashed #ccc;
    padding-bottom: 32px;
    margin-bottom: 32px;

    input {
      padding: 10px 18px;
      background: #ffffff;
      border: 1px solid #9a9a9a;
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
      background-color: #06406b;
      padding: 14px 0 13px 0;
      color: #fff;
      font-size: 12px;
      border: none;
      width: 100%;
      display: block;
      border-radius: 3px;

      &::hover {
        background-color: #06406b;
      }
    }
  }
`;

export const RowTodoList = styled.div`
  margin-bottom: 16px;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    padding: 16px 16px;
    transition: all 0.3s;
    text-decoration: none;

    h3 {
      font-size: 18px;
      margin: 0px;
      font-weight: 400;
      color: #8b8b8b;
    }

    .todo-data-icon {
      display: flex;
      align-items: baseline;

      .info-data {
        margin-right: 16px;

        h5 {
          font-size: 16px;
          color: #8d8d8d;
          margin: 0px;
        }
      }
    }

    &:hover {
      background-color: #06406b;

      svg {
        fill: #fff;
      }

      h3 {
        color: #fff;
      }

      .todo-data-icon {
        .info-data {
          h5 {
            color: #fff;
          }
        }
      }
    }
  }
`;
