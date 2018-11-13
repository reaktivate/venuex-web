import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { isLoaded } from 'react-redux-firebase';
import { Field, reduxForm } from 'redux-form';
import { withVenueConfig } from 'providers/VenueConfigProvider';

import Help from 'ui/elements/form/Help';
import { InputField } from 'ui/elements/form/Input';
import { SelectField } from 'ui/elements/form/Select';
import { TextareaField } from 'ui/elements/form/Textarea';
import { DatePickerField } from 'ui/elements/form/DatePicker';
import Button from 'ui/elements/Button';
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

class EventsAdd extends Component {

  handleAdd = (date = null) => {
    console.log(date);
  };


  render() {
    const {
      venueConfig,
      onClose,
      handleSubmit
    } = this.props;

    return (
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
            options={Object.keys(venueConfig.rooms).map(roomId => ({
              label: venueConfig.rooms[roomId].name,
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
          <Footer>
            <Button
              label="Discard"
              onClick={onClose}
            />
            <Button
              label="Save"
              kind="primary"
              onClick={handleSubmit}
            />
          </Footer>
        </EventsFrame>
      </React.Fragment>
    );
  }
}

export default compose(
  withVenueConfig,
  connect(state => ({
    allEvents: isLoaded(state.firebase.data.events) ? state.firebase.data.events : {},
  })),
  reduxForm({
    form: 'Event form',
  })
)(EventsAdd);
