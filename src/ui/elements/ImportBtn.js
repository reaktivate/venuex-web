import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import ImportImg from '../icons/People.js';

const Button = styled.button`
  padding: 5px;
  justify-content: center;
  display: flex;
  max-width: 184px;
  width: 100%;
  height: 50px;
  opacity: 0.4;
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(125, 125, 125, 0.2);
  background-color: #c0b69b;
  align-items: center;
  box-sizing: border-box;
  text-decoration: none;
  outline: none;
  border: none;
  img, svg{
    max-width: 24px;
    height: auto;
    margin-right: 5px;
  }
  span{
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    transition-timing-function: ease-in;
    transition: .2s opacity;
  }
  ${props => props.ready && css`
    cursor: pointer;
    opacity: 1;
    transition: .2s box-shadow;
    &:hover{
      box-shadow: 0 0px 15px 0 rgba(192,182,155, 1);
    }
  `}
`;
export default class ImportBtn extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Button ready={false}>
        <ImportImg color="#ffffff" />
        <span>Export guest list</span>
      </Button>
    );
  }
}
