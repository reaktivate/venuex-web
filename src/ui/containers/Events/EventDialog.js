/* eslint-disable */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import * as Modal from 'ui/components/Modal/AbstractModal';
import moment from 'moment';

import ViewEvent from 'ui/components/Events/ViewEvent';
import EditEvent from 'ui/components/Events/ViewEvent';

const Container = styled.div`
  display:flex;
`;


export default class EventDialog extends Modal.AbstractModal {
  state = {
    isAdding: this.props.event.id ? false : true,
    isEditing: this.props.event.id ? false : true
  };

  render(){
    const { id, event } = this.props;
    const { isEditing, isAdding } = this.state;
    return (
      <Modal.Modal
        open
        onClose={()=>this.onClose()}
      >
        <Modal.Title onClose={()=>this.onClose()}>
          This is a text
        </Modal.Title>
        <Modal.Content>
          {!isEditing
          &&
          <ViewEvent event={event} />
          }
          {isEditing
          &&
          <EditEvent event={event} />
          }
        </Modal.Content>
        <Modal.Actions>
          <div>footer :)</div>
        </Modal.Actions>
      </Modal.Modal>
    )
  }

  onClose() {
    this.props.onClose();
  }

}
