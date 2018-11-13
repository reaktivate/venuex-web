import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

const SummaryItem = styled.div`
  padding: 0 23px 10px 23px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span:first-child{
    text-align: center;
    margin-bottom: 11px;
    font-size: 15px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.3px;
    color: #b0b0b0;
  }
  span:last-child{
    font-family: Lora;
    font-size: 46px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: -0.9px;
    color: #181818;
  }
  ${props => props.type === 'total' && css`
    position: relative;
    &:after, &:before{
      content: '';
      right: 4px;
      position: absolute;
      width: 4px;
      border-radius: 50%;
      height: 4px;
      background-color: #b0b0b0;
    }
    &:after{
      top: 52px;
    }
    &:before{
      top: 45px;
    }
  `}
  ${props => props.type === 'yes' && css`
    &>span:first-child{
      color: #2cb070;
    }
  `}
  ${props => props.type === 'no' && css`
    span:first-child{
      color: #c02026;
    }
  `}
  ${props => props.type === 'maybe' && css`
    span:first-child{
      color: #f9cc4f;
    }
  `}
  ${props => props.type === 'awaiting' && css`
    span:first-child{
      color: #888888;
    }
  `}
  ${props => props.type === 't_assigned' && css`
    border-left: 1px solid #b0b0b0;
    span:first-child{
      color: #b0b0b0;
    }
  `}
}
@media screen and (max-width: 1250px){
  padding: 0 10px 10px 10px;
  margin-bottom: 10px;
}
@media screen and (max-width: 1000px){
  flex-grow: 1;
  box-sizing: border-box;
  ${props => props.type === 'total' && css`
    &:after, &:before{
      right: 0%;
    }
  `}
`;
export default class SummaryBox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, count, type } = this.props;
    return (
      <SummaryItem type={type}>
        <span>{name}</span>
        <span>{count}</span>
      </SummaryItem>
    );
  }
}
