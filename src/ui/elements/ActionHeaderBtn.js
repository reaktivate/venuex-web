import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 0;
  &:focus, &:active{
    outline: none;
    border: 0;
  }
  margin-right: 18px;
  background-color: #c0b69b;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  transition-timing-function: ease-in;
  transition: .2s box-shadow;
  &:hover{
    box-shadow: 0 0 10px 0 rgba(151,134,89,.5);
  }
  img, svg{
    max-width: 90%;
    min-width: 40%;
    height: auto;
  }
`;

export default ({
  onClick,
  children
}) => (
  <Button onClick={onClick}>
    {children}
  </Button>
);
