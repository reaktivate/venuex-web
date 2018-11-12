import React, { PureComponent } from 'react';
import styled from 'styled-components';
import UserBoxBtn from '../../elements/UserBoxBtn';

const UserContainer = styled.div`
  display: flex;
  margin-left: auto;
`;

export default class UserBox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <UserContainer className="user-box">
          <UserBoxBtn type="item" />
          <UserBoxBtn type="item" />
          <UserBoxBtn type="item" />
          <UserBoxBtn type="user" />
      </UserContainer>
    );
  }
}
