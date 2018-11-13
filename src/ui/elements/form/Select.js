import React from 'react';
import styled, { css } from 'styled-components';
import { Field } from 'redux-form';
import BaseInput from 'ui/elements/form/BaseInput';
import dropdownCaretDown from 'ui/icons/raw/caret-down-custom.svg';

const StyledSelect = styled.select`
  border: none;
  -webkit-appearance: none;
  background-color: #FFF;
  border-bottom: solid 1px #d8d8d8;
  border-radius: 0px;
  width: 100%;
  padding: 5px;
  cursor: pointer;
  &:focus {
    outline: 0;
  }

  ${props => props.meta && props.meta.error && props.meta.touched && css`
    border-bottom: solid 1px #c02026;
  `}
`;

const Container = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    right: 10px;
    top: calc(50% - 4px);
    width: 13px;
    height:   8px;
    background-image: url(${dropdownCaretDown});
    background-size: cover;
  }
`;

const Select = (props) => {
  const { input, options } = props;

  return (
    <BaseInput {...props}>
      <Container>
        <StyledSelect {...input} {...props}>
          <option value="">Select one</option>
          {options.map(({ value, label }) => (
              <option value={value}>{label}</option>
          ))}
        </StyledSelect>
      </Container>
    </BaseInput>
  );
};

const SelectRenderer = ({
     input,
     label,
     meta: { touched, error },
     ...custom
   }) => (
    <Select
      hintText={label}
      floatingLabelText={label}
      label={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
);


const SelectField = (props) => (
  <Field component={SelectRenderer} {...props} />
);

export default Select;
export { Select, SelectField };
