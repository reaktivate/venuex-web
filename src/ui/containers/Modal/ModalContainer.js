/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'ui/components/Modal/Modal';
import * as actions from 'redux/modals/modalActions';

class Modals extends Component {
  render() {
    const modals = this.props.modals.map((item,i) => <Modal open item={item} key={i} zIndex={i} onClose={(item) => this.props.closeModal(item)}/>)
    return (
      <div className="modals">
        {modals}
      </div>
    );
  }
}
const ModalContainer = connect(
  function mapStateToProps(state) {
    return {
      modals: state.modals.modals
    };
  },
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
  }
)(Modals);

export default ModalContainer