import React from 'react';
import styled from 'styled-components';
import DatePicker from 'ui/elements/form/DatePicker';
import BaseInput from 'ui/elements/form/BaseInput';
import { Field } from 'redux-form';

const Spacing = styled.div`
  padding: 0px 5px;
`;

const DateTimeDuration = props => {
// eslint-disable-next-line
  const value = props.input.value || {};

  const handleChangeDate = newDate => {
    props.input.onChange({
      ...value,
      date: newDate,
    });
  };

  const handleChangeStartTime = newTime => {
    props.input.onChange({
      ...value,
      startTime: newTime,
    });
  };

  const handleChangeEndTime = newTime => {
    props.input.onChange({
      ...value,
      endTime: newTime,
    });
  };


  return (
    <BaseInput {...props}>
      <div style={{ display: 'flex' }}>
        <Spacing>
          <DatePicker
            width="130px"
            selected={value.date}
            onChange={handleChangeDate}
            {...props}
          />
        </Spacing>
        <Spacing>
          <DatePicker
            selected={value.startTime}
            onChange={handleChangeStartTime}
            showTimeSelect
            showTimeSelectOnly
            dateFormat="LT"
            timeIntervals={15}
            timeCaption="Time"
            {...props}
          />
        </Spacing>
        <Spacing>
          <DatePicker
            selected={value.endTime}
            onChange={handleChangeEndTime}
            showTimeSelect
            showTimeSelectOnly
            dateFormat="LT"
            timeIntervals={15}
            timeCaption="Time"
            {...props}
          />
        </Spacing>
      </div>
    </BaseInput>
  );
};

const DateTimeDurationField = (props) => (
  <Field component={DateTimeDuration} {...props} />
);

export default DateTimeDuration;
export { DateTimeDuration, DateTimeDurationField };
