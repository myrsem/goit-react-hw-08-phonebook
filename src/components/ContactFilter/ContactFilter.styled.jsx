import styled from 'styled-components';

export const FilterContainer = styled.div`
  margin: 10px 0 10px 0;
`;

export const FilterInput = styled.input`
  width: 400px;
  height: 30px;
  font-size: 16px;
  padding-left: 5px;
  border: none;
  outline: solid 1px;
  border-radius: 5px;
  &::placeholder {
    font-size: 12px;
  }
  &:focus {
    outline: solid 1px #1976d3;
  }
`;

export const FilterText = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 5px;
`;
