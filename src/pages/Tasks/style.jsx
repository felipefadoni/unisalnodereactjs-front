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
    border: 1px solid #F18465;
    background: #FFC5B5;
    border-radius: 50px;
    padding: 16px;
    transition: all 0.3s;

    svg {
      transition: all 0.3s;
    }

    &:hover {
      background-color: #F18465;
      transform: scale(1.2);
      svg {
        fill: #fff;
      }
    }
  }
`;
