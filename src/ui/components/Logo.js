/* eslint-disable */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { withFirebase } from 'react-redux-firebase';

const Container = styled.div`
  display: flex;
`;

const LogoImage = styled.img`
  height: 100px;
  object-fit: contain;
  margin:auto;
`;

class Logo extends PureComponent {
  state = {
    url: 'about:blank',
  };

  componentWillMount() {
    this.props.firebase.storage().ref().child('venues/test_venue/assets/images/splash_screen_logo.png').getDownloadURL()
      .then((url) => {
        this.setState({ url });
      });
  }

  render() {
      return (
        <Container >
          <LogoImage src={this.state.url} alt="Home" />
        </Container>
      );
  }
}

export default withFirebase(Logo);
