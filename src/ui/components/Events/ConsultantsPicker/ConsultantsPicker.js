/* eslint-disable */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import ConsultantsPickerRender from './ConsultantPickerRender'

class ConsultantsPicker extends PureComponent {

  state = {
    isOpen: false,
  };

  getEmployeeById = (id) => this.props.employees.filter(emp => emp.id === id)[0] || {};

  handleToggle = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  };

  handleEmployeeChecked = (employeeId, owner = false) => {
    const value = this.props.input.value || {
      picked: [],
      owner: null,
    };

    this.props.input.onChange({
      ...value,
      picked: [
        ...value.picked.filter(id => id !== employeeId),
        employeeId,
      ],
      owner: owner ? employeeId : value.owner,
    });
  };

  handleEmployeeUnchecked = employeeId => {
    const { value } = this.props.input;

    this.props.input.onChange({
      picked: value.picked.filter(id => id !== employeeId),
      owner: value.owner === employeeId ? null : value.owner,
    });
  };

  handleAssignClicked = employeeId => {
    const value = this.props.input.value || {
      picked: [],
      owner: null,
    };
    const isOwner = employeeId === value.owner;
    if (isOwner) {
      // Remove from owner
      this.props.input.onChange({
        picked: [...value.picked],
        owner: null,
      });
    } else {
      // Make owner
      this.handleEmployeeChecked(employeeId, true);
    }
  };

  render() {
    const value = this.props.input.value || {
      picked: [],
      owner: null,
    };

    return (
      <ConsultantsPickerRender
          handleToggle = {this.handleToggle}
          value = {value}
          getEmployeeById = {this.getEmployeeById}
          isOpen = {this.state.isOpen}
          handleEmployeeUnchecked = {this.handleEmployeeUnchecked}
          handleEmployeeChecked = {this.handleEmployeeChecked}
          handleAssignClicked = {this.handleAssignClicked}
          { ...this.props }
      />
    );
  }
}

export default compose(
    firebaseConnect(() => [{
      path: 'employees',
      queryParams: [
        'orderByChild=venueId',
        'equalTo=test_venue'
      ],
    }]),
    connect(state => ({
      employees: state.firebase.data.employees ? (
          Object.keys(state.firebase.data.employees).map(key => ({
            id: key,
            name: state.firebase.data.employees[key].fullName,
            picture: state.firebase.data.employees[key].picture,
          }))
      ) : [],
    })),
)(ConsultantsPicker);
