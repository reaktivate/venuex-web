import React, { Component } from 'react';
import styled from 'styled-components';
import Sidebar from '../../components/Sidebar';
import Header from './GuestlistHeader.js';
import Summary from './GuestlistSummary.js';

const Container = styled.div`
  padding: 15px 20px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ededed;
  background-color: #fcfbfc;
  @media screen and (max-width: 1100px){
    padding: 10px;
  }
`;
export default class Guestlist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Sidebar>
        <Container>
          <Header />
          <Summary />
        </Container>
      </Sidebar>
    );
  }
}
