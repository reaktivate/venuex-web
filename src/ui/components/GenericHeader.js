import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PersonalMenu from './Header/PersonalMenu';

const Container = styled.div`
  border-top: solid 1px #ededed;
  border-left: solid 1px #ededed;
  border-right: solid 1px #ededed;
  background-color: #fafafa;
  padding: 15px;
  padding-bottom: 0px;
  height: 80px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;


export default class GenericHeader extends PureComponent {
  render() {
    const {
      children
    } = this.props;

    return (
      <Container>
        <Header>
          <div style={{ width: '100%' }}>
            {children}
          </div>
          <div style={{ display: 'flex' }}>
            <PersonalMenu />
          </div>
        </Header>
      </Container>
    );
  }
}
