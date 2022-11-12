import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  width: 600px;
  padding: 30px;
  margin: 10px 0 10px 0;
  background-color: #88B9D5;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Text = styled.span`
  font-weight: 600;
  font-size: 16px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 500px;
  height: 30px;
  font-size: 16px;
  padding-left: 5px;
  border: none;
  border-radius: 5px;
  &::placeholder {
    font-size: 12px;
  }
  &:focus {
    outline: solid 1px #1976d3;
  }
`;

export const AddContactBtn = styled.button`
margin: 0 auto;
  font-size: 14px;
  font-weight: 600;
  width: 120px;
  height: 30px;
  cursor: pointer;
  background-color: #ebf2fa;
  border: none;
  border-radius: 5px;
  transition: transform 400ms;
  &:hover {
    background-color: #1976d3;
    color: #fff;
  }
`;
