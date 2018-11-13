/* eslint-disable */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { compose } from 'redux';
import * as Modal from 'ui/components/Modal/AbstractModal';
import moment from 'moment';
import ViewEvent from 'ui/components/Events/ViewEvent';
import EditEvent from 'ui/components/Events/ViewEvent';
import Button from 'ui/elements/Button';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import Input from 'ui/elements/form/Input';
import {
  DateTimeDurationFilled,
  OwnerSelectedValidator,
  NotEmptyValidator,
} from 'ui/utils/formValidators';

const Container = styled.div`
  display:flex;
`;

const StyledButton = styled(Button)`
  margin: 0px 5px;
`;

const Help = styled.div`
  text-align: right;
  color: #b0b0b0;
`;

class EventFormDialog extends Modal.AbstractModal {
  state = {
    isAdding: this.props.event.id ? false : true
  };

  render(){
    const { id, event, rooms } = this.props;
    const { isAdding } = this.state;
    return (
      <Modal.Modal
        open
        onClose={()=>this.onClose()}
      >
        <Modal.Title onClose={()=>this.onClose()} smaller>
          {isAdding? 'Add event' : 'Edit event'}
        </Modal.Title>
        <Modal.Content>
          <Help>* All fields are required except the Notes.</Help>

          <Field
            name="name"
            label="Event name"
            component={Input}
            validate={NotEmptyValidator}
          />

          {/*
          <Field
            name="dateTimeDuration"
            label="Event Date & Time"
            component={DateTimeDurationField}
            validate={DateTimeDurationFilled}
          />
         */}

        </Modal.Content>
        <Modal.Actions>
          <div>
            <StyledButton
              label="Discard"
              onClick={this.props.onClose}
            />
            <StyledButton
              label="Save"
              kind="primary"
              onClick={this.props.handleSubmit}
            />
          </div>
        </Modal.Actions>
      </Modal.Modal>
    )
  }

  onClose() {
    this.props.onClose();
  }

}

export default compose(
  reduxForm({
    form: 'Event form',
  })
)(EventFormDialog);
