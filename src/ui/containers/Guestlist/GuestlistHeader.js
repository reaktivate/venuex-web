import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Header = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding-bottom: 15px;
    &:after{
      content: '';
      position: absolute;
      left: -20px;
      width: calc(100% + 40px);
      bottom: -1px;
      height: 1px;
      background-color: #ededed;
    }
    @media screen and (max-width: 1100px){
      &:after{
        left: -10px;
        width: calc(100% + 20px);
      }
    }
`;

export default class GuestlistHeader extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <Header>{children}</Header>
    );
  }
}
