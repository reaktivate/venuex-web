import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import defaultLogo from 'ui/icons/raw/default-logo.png';
import { getLogoThunk } from '../../redux/venue/venueActions';


const Container = styled.div`
  display: block;
  max-width: 192px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  margin: 0 auto 55px auto;
  @media screen and (max-width: 1100px){
    margin-bottom: 20px
  }
`;


const LogoImage = styled.img`
  width: 100%;
  height: auto;
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
