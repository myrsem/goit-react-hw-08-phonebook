import styled from 'styled-components';

export const Name = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-right: 10px;
`;

export const DeleteBtn = styled.button`
  font-size: 14px;
  font-weight: 600;
  margin-top: 5px;
  width: 80px;
  height: 30px;
  cursor: pointer;
  background-color: #ebf2fa;
  border: none;
  border-radius: 5px;
  transition: transform 400ms;
  &:hover {
    background-color: #1976d3;
    color: #fff;
    border: none;
  }
`;
