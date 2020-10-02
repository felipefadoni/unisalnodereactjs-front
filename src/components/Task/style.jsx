import styled from 'styled-components';

export const RowTask = styled.div`
  border-bottom: 2px dotted #ccc;
  padding-bottom: 32px;
  margin-top: 32px;

  button {
    border: none;
    background: transparent;
    outline: none;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.3);
    }
  }

  h3 {
    color: #8D8D8D;
    font-size: 20px;
    margin: 0px;
  }

  .color-black {
    color: #000;
  }

  h4 {
    color: #8D8D8D;
    font-size: 14px;
    margin: 0px;
  }
`
