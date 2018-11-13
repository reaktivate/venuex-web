import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUser } from 'redux/auth/authSelectors';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import styled from 'styled-components';
import LogOut from 'ui/icons/LogOut';

const Container = styled.div`
  div[role=tooltip] {
    z-index:100;
    margin-left:-100px;
  }
`;

const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, .10);
  cursor: pointer;
`;

/*
const NameSection = styled.div`
  padding: 10px 0px;
  border-bottom: solid 1px #d8d8d8;
  text-align: center;
`;

const Item = styled.div`
  display: flex;
  font-size: 11px;
  font-weight: 800;
  color: #b0b0b0;
  align-items: center;
  text-transform: uppercase;
  padding: 10px 5px;
  cursor: pointer;

  svg {
    margin-right: 8px;
  }
`;
*/
class PersonalMenu extends PureComponent {
  state = {
    open: false
  };


  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl && this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { currentUser } = this.props;
    const { open } = this.state;
    return (
      <Container>
        <ProfilePicture src="https://placehold.it/100x100" onClick={this.handleToggle} />
        <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
          {({ TransitionProps }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: 'center top' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    <ListItem>
                      <ListItemText primary={`Hi, ${currentUser.displayName || 'user'}`} />
                    </ListItem>
                    <MenuItem onClick={this.handleClose}>
                      <ListItemIcon>
                        <LogOut color="#b0b0b0" />
                      </ListItemIcon>
                      <ListItemText inset primary="Log out" />
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Container>
    );
  }
}


export default connect(state => ({
  currentUser: getUser(state),
}))(PersonalMenu);
