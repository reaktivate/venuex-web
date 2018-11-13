import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import ModalContainer from 'ui/containers/Modal/ModalContainer';

import calendarWhiteIcon from '../icons/raw/calendar-white.svg';
import peopleWhiteIcon from '../icons/raw/people-white.svg';
import billingWhiteIcon from '../icons/raw/bill-white.svg';

import Logo from './Logo';

const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
  max-width: 227px;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  padding: 40px 0 30px 0;
  overflow-y: scroll;
  @media screen and (max-width: 1100px){
    max-width: 160px
  }
`;
const Item = styled(Link)`
  box-sizing: border-box;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 70px;
  transition-timing-function: ease-in;
  transition: 0.2s;
  text-decoration: none;
  span{
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.1px;
    color: #ffffff;
  }
  &:hover{
    background-color: ${props => props.theme.colors.primary}4D;
  }
  ${props => props.isActive && css`
      position: relative;
      background-color: ${props => props.theme.colors.primary}99!important;
      &:after{
        display: block;
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 6px;
        box-shadow: 3px 0 4px 0 rgba(0, 0, 0, 0.1);
        background-color: ${props => props.theme.colors.primary};
      }
  `}
  @media screen and (max-width: 1100px){
    min-height: 50px;
    padding: 10px;
  }
`;
const ItemIconWrap = styled.div`
    max-width: 23px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;
const ItemIcon = styled.img`
  max-width: 100%;
  height: auto;
  @media screen and (max-width: 1100px){
    max-width: 20px;
  }
`;
const Layout = styled.div`
  box-sizing: border-box;
  display: block;
  padding: 0px 0px 0px 227px;
  min-width: 800px;
  @media (max-width: 1100px) {
    padding: 0 0 0 160px
  }
`;

const MainScreen = styled.div`
  display: flex;
  padding: 20px 11px 20px 32px;
  box-sizing: border-box;
  width:100%;
`;

const Sidebar = ({ children, match }) => {
  return (
    <Layout>
      <Container>
        <Logo />
        <Item isActive={match.path.indexOf('/events') !== -1 || match.path === '/'} to="/events">
          <ItemIconWrap>
            <ItemIcon src={calendarWhiteIcon} />
          </ItemIconWrap>
          <span>Events overview</span>
        </Item>
        <Item isActive={match.path.indexOf('/managestaff') !== -1} to="/managestaff">
          <ItemIconWrap>
            <ItemIcon src={peopleWhiteIcon} />
          </ItemIconWrap>
          <span>Manage Staff</span>
        </Item>
        <Item isActive={match.path.indexOf('/billing') !== -1} to="/billing">
          <ItemIconWrap>
            <ItemIcon src={billingWhiteIcon} />
          </ItemIconWrap>
          <span>Billing</span>
        </Item>
      </Container>
      <MainScreen>
        <ModalContainer />
        {children}
      </MainScreen>
    </Layout>
  );
};

export default withRouter(Sidebar);
