import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import defaultLogo from 'ui/icons/raw/default-logo.png';
import { getLogoThunk } from '../../redux/venue/venueActions';


const Container = styled.div`
  display: flex;
`;


const LogoImage = styled.img`
  height: 100px;
  object-fit: contain;
  margin:auto;
`;


class Logo extends PureComponent {
  state = {};

  componentWillMount() {
    const { props } = this;
    props.getLogo();
  }

  render() {
    const { config } = this.props;
    return (
      <Container>
        <LogoImage src={(config && config.logo) ? config.logo : defaultLogo} alt="Home" />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  config: state.venue
});

const mapDispatchToProps = (dispatch) => ({
  // same effect
  getLogo: () => dispatch(getLogoThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logo);
