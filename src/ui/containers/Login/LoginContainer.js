/* eslint-disable */
// TODO: Refactor this container, copied from old project.

import React, { PureComponent } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { login } from '../../../redux/auth/authActions';
import { getUser } from '../../../redux/auth/authSelectors';
// import { withFirebase } from 'react-redux-firebase';

import { reduxForm, Field } from 'redux-form';
import styled from 'styled-components';
import Input from '../../elements/form/Input';
import Button from '../../elements/Button';
import { NotEmptyValidator } from '../../utils/formValidators';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const mapStateToProps = (state) => ({
  currentUser: getUser(state)
});

const mapDispatchToProps = {
  login
};

const form = {
  form: 'login-form',
};

class LoginContainer extends PureComponent {

  state = {
    error: '',
  };

  handleFixture = () => {
    const { login } = this.props;

    login();
  };

  handleLogin = (values) => {
    const { login } = this.props;
    login(values);
  };

  render() {

    return (
      <Container>
        {this.props.currentUser && <Redirect to="/" />}
        <Field
          name="email"
          component={Input}
          placeholder="Email address"
          type="email"
          validate={NotEmptyValidator}
        />
        <Field
          name="password"
          component={Input}
          placeholder="Password"
          type="password"
          validate={NotEmptyValidator}
        />

        {this.state.error}

        <Button
          kind="primary"
          label="Login"
          onClick={this.props.handleSubmit(this.handleLogin)}
        />
      </Container>
    );
  }
}

export default compose(
  reduxForm(form),
  connect(mapStateToProps, mapDispatchToProps)
)(LoginContainer);

