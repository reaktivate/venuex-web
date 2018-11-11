/* eslint-disable */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import AbstractModal from 'ui/components/Modal/AbstractModal';
import moment from 'moment';

const Container = styled.div`
  display:flex;
`;


export default class EventDialog extends AbstractModal {
  state = {
    count:1
  };

  onClose() {
    this.props.onClose();
  }

  getHeader() {
    const { id, event } = this.props;
    const { count } = this.state;
    return (
      <div>Test header {id} {event.id} {count}</div>
    );
  }

  increase = () => {
    this.setState({count: this.state.count + 1})
  }

  getContent() {
    const { id, event } = this.props;
    return (
      <div>
        Test content {id} {this.state.count}
        {moment(event.start).format()}
        <br/>
        <a onClick={()=>this.increase()}>+1</a>

      </div>
    );
  }
  getFooter() {
    const { id } = this.props;
    return (
      <div>Test footer {id}</div>
    );
  }

}
