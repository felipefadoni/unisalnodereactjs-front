import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const ContainerTasks = styled(Container)`
  .icon-back {
    a {
      svg {
        fill: #282828;
      }
    }
  }

  .title-todolist {
    display: flex;

    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      line-height: 35px;
      color: #000000;
      margin-right: 16px;
    }

    .todolist-delete {
      button {
        border: none;
        background: transparent;
        margin-top: 5px;
      }
    }
  }

  .btn-add-task {
    border: none;
    background: transparent;
    border: 1px solid #f18465;
    background: #ffc5b5;
    border-radius: 50px;
    padding: 16px;
    transition: all 0.3s;
    outline: none;

    svg {
      transition: all 0.3s;
    }

    &:hover {
      background-color: #f18465;
      transform: scale(1.2);
      svg {
        fill: #fff;
      }
    }
  }
`;

export const FormTask = styled.form`
  .row {
    margin-bottom: 16px;

    input {
      padding: 8px 16px;
      width: 100%;
      border-radius: 3px;
      border: 1px solid #9A9A9A;
    }

    button {
      background: #06406B;
      border: none;
      width: 100%;
      color: white;
      border: none;
      border-radius: 3px;
      padding: 16px 0px;
    }

  }
`;
