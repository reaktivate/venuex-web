import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import calendarWhiteIcon from '../icons/raw/calendar-white.svg';
import peopleWhiteIcon from '../icons/raw/people-white.svg';
import billingWhiteIcon from '../icons/raw/bill-white.svg';

import Logo from './Logo';

const Container = styled.div`
  width: 226px;
  height: 100%;
  background-color: #000000;
  color: #FFF;
`;

const Item = styled(Link)`
  color: #FFF;
  text-decoration: none;
  height: 70px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  position: relative;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  transition-duration: 0.3s;

  &:hover {
    background-color: ${props => props.theme.colors.primary}4D;
  }

  ${props => props.isActive && css`
    background-color: ${props => props.theme.colors.primary}99;

    &:hover {
      background-color: ${props => props.theme.colors.primary}99;
    }

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      height: 100%;
      width: 5px;
      background-color: ${props => props.theme.colors.primary};
      box-shadow: 3px 0 4px 0 rgba(0, 0, 0, 0.1);
    }
  `}
`;

const ItemIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const Layout = styled.div`
  display: flex;
  height: 100vh;
`;

const MainScreen = styled.div`
  display: flex;
  height: calc(100% - 40px);
  padding: 20px;
  width:100%;
`;

const Sidebar = ({ children, match }) => {

  return (
    <Layout>
      <Container>
        <Logo />
        <Item isActive={match.path.indexOf('/events') !== -1 || match.path === '/'} to="/events">
          <ItemIcon src={calendarWhiteIcon} />
          <div>Events overview</div>
        </Item>
        <Item isActive={match.path.indexOf('/managestaff') !== -1} to="/managestaff">
          <ItemIcon src={peopleWhiteIcon} />
          <div>Manage Staff</div>
        </Item>
        <Item isActive={match.path.indexOf('/billing') !== -1} to="/billing">
          <ItemIcon src={billingWhiteIcon} />
          <div>Billing</div>
        </Item>
      </Container>
      <MainScreen>
        {children}
      </MainScreen>
    </Layout>
  );
};

export default withRouter(Sidebar);
