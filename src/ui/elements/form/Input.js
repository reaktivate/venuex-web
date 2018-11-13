import React from 'react';
import styled, { css } from 'styled-components';
import { Field } from 'redux-form';
import BaseInput from 'ui/elements/form/BaseInput';

const StyledTextField = styled.input`
  border: none;
  border-bottom: solid 1px #d8d8d8;
  display: block;
  width: 100%;
  padding: 5px;
  transition-duration: 0.3s;

  &:focus {
    outline: none;
    border-bottom: solid 1px ${props => props.theme.colors.primary};
  }

  ${props => props.meta && props.meta.error && props.meta.touched && css`
    border-bottom: solid 1px #c02026;
  `}

`;

const Input = (props) => (
  <BaseInput {...props}><StyledTextField {...props} /></BaseInput>
);

const TextFieldRenderer = ({
   input,
   label,
   meta: { touched, error },
   ...custom
 }) => (
  <Input
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    label={label}
    {...input}
    {...custom}
  />
);


const InputField = (props) => (
  <Field component={TextFieldRenderer} {...props} />
);

export default Input;
export { Input, InputField };
