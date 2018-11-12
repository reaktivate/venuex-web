/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'ui/components/Modal/Modal';
import * as actions from 'redux/modals/modalActions';

import EventDialog from 'ui/containers/Events/EventDialog';

const MODAL_COMPONENTS = {
  'event-dialog': EventDialog
  /* other modals */
}



class Modals extends Component {

  getSingleModal(modalType, modalProps){
     const SpecificModal = MODAL_COMPONENTS[modalType]
      return <SpecificModal open {...modalProps} />
  }
  render() {
    const modals = this.props.modals.map((item,i) => {
      const SpecificModal = MODAL_COMPONENTS[item.id]
      return <SpecificModal open {...item.props} />

    })
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