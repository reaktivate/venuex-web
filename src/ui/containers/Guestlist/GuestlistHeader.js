import React, { PureComponent } from 'react';
import styled from 'styled-components';
import ActionHeader from '../../components/ActionHeader.js';
import ActionHeaderBtn from '../../elements/ActionHeaderBtn.js';
import Search from '../../elements/Search.js';
import PersonalMenu from '../../components/Header/PersonalMenu.js';

import ImportFileIcon from '../../icons/ImportFile.js';
import AddGroupIcon from '../../icons/AddGroup.js';
import AddUserIcon from '../../icons/AddUserIcon.js';

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
    return (
      <Header>
        <Search placeholder="Search guest name" />
        <ActionHeader>
          <ActionHeaderBtn>
            <ImportFileIcon color="#ffffff" width="55%" />
          </ActionHeaderBtn>
          <ActionHeaderBtn>
            <AddGroupIcon color="#ffffff" width="85%" />
          </ActionHeaderBtn>
          <ActionHeaderBtn>
            <AddUserIcon color="#ffffff" width="55%" />
          </ActionHeaderBtn>
          <PersonalMenu />
        </ActionHeader>
      </Header>
    );
  }
}
