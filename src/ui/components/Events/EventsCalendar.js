/* eslint-disable */
import React, { PureComponent } from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar-like-google';
import 'react-big-calendar-like-google/lib/css/react-big-calendar.css';

class EventsCalendar extends PureComponent {

  onDrillDown = (date) => this.props.onCellClick(date);

  CellWrapper = ({ children, value }) => {
    const { onCellClick } = this.props;

    const content = {
      ...children,
      props: { ...children.props, onClick: () => onCellClick(new Date(value)) }
    };

    return content;
  };

  HeaderWrapper = ({ onDrillDown, label }) => <div onClick={onDrillDown}>{label}</div>;

  render() {
    const { events, date, onEventClick } = this.props;

    BigCalendar.momentLocalizer(moment);

    return (
      <BigCalendar
        events={events}
        views={['month']}
        step={60}
        date={date}
        toolbar={false}
        onSelectEvent={onEventClick}
        onDrillDown={this.onDrillDown}
        components={{
          // you have to pass your custom wrapper here
          // so that it actually gets used
          dateCellWrapper: this.CellWrapper,
          dateHeader: this.HeaderWrapper
        }}
      />
    );
  }
}

export default EventsCalendar;
