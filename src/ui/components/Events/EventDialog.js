/* eslint-disable */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import * as Modal from 'ui/components/Modal/AbstractModal';
import moment from 'moment';
import Rings from 'ui/icons/Rings.js';
import ViewEvent from 'ui/components/Events/ViewEvent';
import EditEvent from 'ui/components/Events/ViewEvent';
import Button from 'ui/elements/Button';

const Container = styled.div`
  display:flex;
`;


export default class EventDialog extends Modal.AbstractModal {
  state = {
    isAdding: this.props.event.id ? false : true,
    isEditing: this.props.event.id ? false : true
  };

  render(){
    const { id, event, rooms } = this.props;
    const { isEditing, isAdding } = this.state;
    return (
      <Modal.Modal
        open
        onClose={()=>this.onClose()}
      >
        <Modal.Title onClose={()=>this.onClose()}>
          <div className="icon"><Rings size={120}/></div>
          {event.name}
        </Modal.Title>
        <Modal.Content>
          {!isEditing
          &&
          <ViewEvent event={event} rooms={rooms}/>
          }
          {isEditing
          &&
          <EditEvent event={event} />
          }
        </Modal.Content>
        <Modal.Actions>
          <div>
            <Button onClick={()=>this.props.onSwitchToEdit(event)} label="Edit"/>
          </div>
        </Modal.Actions>
      </Modal.Modal>
    )
  }

  onClose() {
    this.props.onClose();
  }

}
