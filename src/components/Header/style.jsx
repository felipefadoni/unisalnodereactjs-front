import styled from 'styled-components';

import { Col } from 'react-bootstrap';

export const ColLogoHeader = styled(Col)`
  text-align: ${props => props.align};
`;

export const BtnSair = styled.button`
  border: none;
  background: transparent;
  font-size: 14px;
  color: #000;
  cursor: pointer;
  font-weight: 700;
  margin-top: 16px;
`
