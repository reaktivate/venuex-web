/* eslint-disable */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { compose } from 'redux';
import * as Modal from 'ui/components/Modal/AbstractModal';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import moment from 'moment';
import ViewEvent from 'ui/components/Events/ViewEvent';
import EditEvent from 'ui/components/Events/ViewEvent';
import Button from 'ui/elements/Button';

import { InputField } from 'ui/elements/form/Input';
import { SelectField } from 'ui/elements/form/Select';
import { TextareaField } from 'ui/elements/form/Textarea';
import { DatePickerField } from 'ui/elements/form/DatePicker';
import ConsultantsPicker from 'ui/components/Events/ConsultantsPicker/ConsultantsPicker';

import {
  DateTimeDurationFilled,
  OwnerSelectedValidator,
  NotEmptyValidator,
} from 'ui/utils/formValidators';

import { DateTimeDurationField } from '../../elements/form/DateTimeDuration';

const EventsFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%; 
  
  .rbc-month-view {
    border:1px solid #ededed;
    border-top: 0;
  
    .rbc-month-header {
      height:59px;
      background: #ffffff;
      border-bottom:1px solid #ededed;
      .rbc-header {
        border: none;
        line-height: 59px;
        text-align: center;
        text-transform: uppercase;
        font-family: 'Montserrat';
        font-size: 12px;
        letter-spacing: 0.3px;
        color: #888888;
        }
    }
    .rbc-event {
      background-color: ${props => `${props.theme.colors.primary}`};
    }
  }
`;

const PaymentSchedule = styled.div`
  display: flex;
`;

const Label = styled.div`
  font-size: 15px;
  color: #7d7d7d;
  font-weight: 500;
  padding-top: 20px;
  padding-right: 15px;
`;

const Footer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center
`;

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
          <React.Fragment>
            <EventsFrame>
              <Help>* All fields are required except the Notes.</Help>

              <Field
                name="consultants"
                component={ConsultantsPicker}
                validate={OwnerSelectedValidator}
              />

              <InputField
                name="name"
                label="Event name"
                validate={NotEmptyValidator}
              />

              <DateTimeDurationField
                name="dateTimeDuration"
                label="Event Date & Time"
                validate={DateTimeDurationFilled}
              />

              <InputField
                name="minimumGuests"
                label="Guest minimum"
                validate={NotEmptyValidator}
              />

              <SelectField
                name="type"
                label="Event Type"
                validate={NotEmptyValidator}
                onChange={this.handleSelect}
                options={[
                  { value: 'wedding', label: 'Wedding' },
                ]}
              />

              <SelectField
                name="room"
                label="Room"
                validate={NotEmptyValidator}
                options={Object.keys(this.props.rooms).map(roomId => ({
                  label: this.props.rooms[roomId].name,
                  value: roomId,
                }))}
              />

              <InputField
                name="clientName"
                label="Client name"
                validate={NotEmptyValidator}
              />

              <TextareaField
                name="notes"
                label="Notes"
              />

              <PaymentSchedule>
                <Label>Payment schedule:</Label>
                <div style={{ flex: 1 }}>
                  <DatePickerField
                    label="1st:"
                    name="firstPaymentDue"
                    validate={NotEmptyValidator}
                  />
                  <DatePickerField
                    label="2nd:"
                    name="secondPaymentDue"
                    validate={NotEmptyValidator}
                  />

                  <DatePickerField
                    label="3rd:"
                    name="thirdPaymentDue"
                    validate={NotEmptyValidator}
                  />
                </div>
              </PaymentSchedule>

              <SelectField
                name="ceremonyKind"
                label="Ceremony"
                validate={NotEmptyValidator}
                options={[
                  {
                    label: 'Onsite',
                    value: 'onsite',
                  },
                  {
                    label: 'Offsite',
                    value: 'offsite',
                  }
                ]}
              />
            </EventsFrame>
          </React.Fragment>

        </Modal.Content>
        <Modal.Actions>
          <Footer>
            <StyledButton
              label="Discard"
              onClick={this.props.onClose}
            />
            <StyledButton
              label="Save"
              kind="primary"
              onClick={this.props.handleSubmit}
            />
          </Footer>
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
