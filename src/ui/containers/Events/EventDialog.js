/* eslint-disable */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import AbstractModal from 'ui/components/Modal/AbstractModal';
import moment from 'moment';

import ViewEvent from 'ui/components/Events/ViewEvent';

const Container = styled.div`
  display:flex;
`;


export default class EventDialog extends AbstractModal {
  state = {
    isAdding: this.props.event.id ? false : true,
    isEditing: this.props.event.id ? false : true
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

  getContent() {
    const { event } = this.props;
    const { isEditing } = this.state;
    return (
      <React.Fragment>
        {!isEditing
        &&
        <ViewEvent event={event} />
        }
      </React.Fragment>
    );
  }
  getFooter() {
    const { isEditing } = this.state;
    return (
      <div>

      </div>
    );
  }

}
