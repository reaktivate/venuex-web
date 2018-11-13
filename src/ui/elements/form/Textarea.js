import React from 'react';
import styled, { css } from 'styled-components';
import { Field } from 'redux-form';
import BaseInput from 'ui/elements/form/BaseInput';

const StyledTextarea = styled.textarea`
  border: solid 1px #d8d8d8;
  border-radius: 2px;
  resize: none;
  width: 100%;

  &:focus {
    outline: 0;
    border: solid 1px ${props => props.theme.colors.primary};
  }

  ${props => props.meta && props.meta.error && props.meta.touched && css`
    border-bottom: solid 1px #c02026;
  `}
`;

const Textarea = props => {
  const { input } = props;

  return (
    <BaseInput {...props} alignItems="flex-start">
      <StyledTextarea {...input} rows={6} />
    </BaseInput>
  );
};

const TextareaField = (props) => (
  <Field component={Textarea} {...props} />
);

export default Textarea;
export { Textarea, TextareaField };
