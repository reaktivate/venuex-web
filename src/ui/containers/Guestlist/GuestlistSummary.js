import React, { PureComponent } from 'react';
import styled from 'styled-components';
import ImportBtn from '../../elements/ImportBtn.js';
import SummaryItem from '../../elements/SummaryItem.js';

const SummaryContainer = styled.div`
  display: flex;
  padding: 25px 30px 14px 7px;
  border-radius: 2px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  margin: 20px auto;
  align-items: center;
  &>button{
    font-family: 'Montserrat', sans-serif;
    margin: auto 0 auto auto;
  }
  @media screen and (max-width: 1000px){
    align-items: flex-end;
    flex-wrap: wrap;
    padding: 15px 10px;
    &>button{
      margin: auto;
    }
  }
`;
export default class SummaryBox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SummaryContainer>
        <SummaryItem type="total" name="Total Guests" count="200" />
        <SummaryItem type="yes" name="Yes" count="96" />
        <SummaryItem type="no" name="No" count="28" />
        <SummaryItem type="maybe" name="Maybe" count="32" />
        <SummaryItem type="awaiting" name="Awaiting" count="44" />
        <SummaryItem type="t_assigned" name="Table Assigned" count="82" />
        <ImportBtn />
      </SummaryContainer>
    );
  }
}
