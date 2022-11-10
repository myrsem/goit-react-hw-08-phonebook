import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 25px 15px;
  color: white;
  display: block;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 700;
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
`;
