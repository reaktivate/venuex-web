/* eslint-disable */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import closeIcon from 'ui/icons/Close';

export const Modal = styled(Dialog)``;

export const Content = styled(DialogContent)`
&&{
  padding: 20px 50px 20px 50px;
}
`;

export const IClose = styled(closeIcon)`
  cursor: pointer;
`;

export const StyledDialogTitle = styled(DialogTitle)`
  &&{
    background-color: ${props => props.theme.colors.primary}66;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    padding: 20px 20px 20px 20px;
  }
`;

export class Title extends PureComponent {
  render() {
    return (
      <StyledDialogTitle>
        <div style={{ float: 'right' }}><IClose onClick={()=>this.props.onClose()} size={14} /></div>
        {this.props.children}
      </StyledDialogTitle>
    )
  }
}

export const Actions = styled(DialogActions)`
  &&{
    margin: 0;
    border: none;
    padding: 14px 15px 15px 15px;
    border-top: solid 1px #d8d8d8;
    display: block;
  }
`;

export class AbstractModal extends PureComponent {

}
