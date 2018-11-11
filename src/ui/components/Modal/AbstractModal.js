/* eslint-disable */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import closeIcon from 'ui/icons/Close';

const StyledDialog = styled(Dialog)``;

const StyledDialogContent = styled(DialogContent)`
&&{
  padding: 20px 50px 20px 50px;
}
`;

const IClose = styled(closeIcon)`
  cursor: pointer;
`;

const StyledDialogTitle = styled(DialogTitle)`
  &&{
    background-color: ${props => props.theme.colors.primary}66;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    padding: 20px 20px 20px 20px;
  }
`;

const StyledDialogActions = styled(DialogActions)`
  &&{
    margin: 0;
    border: none;
    padding: 14px 15px 15px 15px;
    border-top: solid 1px #d8d8d8;
    display: block;
  }
`;

class AbstractModal extends PureComponent {

  onClose() {
    console.log('close');
  }
  getHeader() {
    return '';
  }
  getContent() {
    return (
      <div>test</div>
    );
  }
  getFooter(){
    return '';
  }

  render() {
    return (
      <StyledDialog
        open
        onClose={()=>this.onClose()}
      >
        <StyledDialogTitle>
          <div style={{ float: 'right' }}><IClose onClick={()=>this.onClose()} size={14} /></div>
          {this.getHeader()}
        </StyledDialogTitle>
        <StyledDialogContent>
          {this.getContent()}
        </StyledDialogContent>
        <StyledDialogActions>
          {this.getFooter()}
        </StyledDialogActions>
      </StyledDialog>
    );
  }
}

export default AbstractModal;