import React, { PureComponent } from 'react';
import styled from 'styled-components';

const ActionHeaderContainer = styled.div`
  display: flex;
  margin-left: auto;
`;

export default class ActionHeader extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <ActionHeaderContainer>
        {children}
      </ActionHeaderContainer>
    );
  }
}
