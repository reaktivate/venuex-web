/* eslint-disable */
import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';
import { getVenueId } from 'redux/venue/venueSelectors';
import GenericHeader from 'ui/components/GenericHeader';
import EventsCalendar from '../../components/Events/EventsCalendar';
import EventsHeader from '../../components/Events/EventsHeader';
import { openModal, closeModal } from 'redux/modals/modalActions';
import { createEventThunk } from 'redux/firebase/firebaseActions';

const LegendItem = styled.div`
  margin-top: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  &:first-child {
    margin-left: 0px;
  }

  div {
    display: inline-block;
    background-color: ${props =>
  `${props.theme.colors.primary}${props.opacity}`};
    width: 30px;
    border-radius: 2px;
    margin-right: 5px;
    height: 20px;
  }
`;

const EventsFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; 
  height: 900px;
  .rbc-month-view {
    border:1px solid #ededed;
    border-top: 0;
  
    .rbc-month-header {
      height:59px;
      background: #ffffff;
      border-bottom:1px solid #ededed;
      .rbc-header {
        border: none;
        line-height: 59px;
        text-align: center;
        text-transform: uppercase;
        font-family: 'Montserrat';
        font-size: 12px;
        letter-spacing: 0.3px;
        color: #888888;
        }
    }
    .rbc-event {
      background-color: ${props => `${props.theme.colors.primary}`};
    }
  }
  @media screen and (max-width: 1300px){
    height: 800px;
  }
  @media screen and (max-width: 1100px){
    height: 700px;
  }
  @media screen and (max-width: 900px){
    height: 600px;
  }
`;

const EventsFooter = styled.div`
`;

class Events extends PureComponent {

  state = {
    date: moment(),
    addDate: new Date(),
    isAddingEvent: false,
  };

  componentDidMount() {
    const {match} = this.props;
    if (match.params.id) {
    }
  }

  handleNextMonth = () => {
    this.setState({
      date: moment(this.state.date.add(1, 'M')),
    });
  };

  handlePreviousMonth = () => {
    this.setState({
      date: moment(this.state.date.subtract(1, 'M')),
    });
  }

  handleToday = () => {
    this.setState({
      date: moment(),
    });
  };

  closeModal = () => {
    this.props.history.push(`/events`);
    this.props.closeModal({id:''});
  }

  switchToEdit = (event) => {

    this.props.closeModal({id:'event-dialog'});
    this.props.openModal({
        id: "event-form-dialog",
        type: 'custom',
        props: {
          event: event,
          initialValues: event,
          onClose: this.closeModal,
          rooms: this.props.rooms
        }
      }
    );
  }

  defaultEvent(date) {
    return {
      dateTimeDuration: {
        date: moment(date)
      }
    }
  }

  handleAdd = (date = null) => {
    console.log(this.props);
    const addDate = date?date:this.state.date;

    this.setState({
      isAddingEvent: true,
      // addDate
    });
    this.props.openModal({
        id: "event-form-dialog",
        type: 'custom',
        props: {
          event: this.defaultEvent(addDate),
          onClose: this.closeModal,
          rooms: this.props.rooms
        }
      }
    );


    /*
        this.props.dispatch(openModal({
          id: "event-dialog",
          type: 'custom',
          content: (
            <EventDialog
              id='event-dialog'
              event={{start:moment(addDate)}}
              onClose={this.closeModal}
            />
          )
        }))
        */
  }

  handleEventClick = event => {

    this.setState({
      viewingEvent: event,
    });

    this.props.history.push(`/events/${event.id}`);
    this.props.openModal({
        id: "event-dialog",
        type: 'custom',
        props: {
          event: event,
          onClose: this.closeModal,
          onSwitchToEdit: this.switchToEdit,
          rooms: this.props.rooms
        }
      }
    );
  }

  render() {
    const { eventsByDate, match, allEvents } = this.props;

    let event;
    if (this.props.allEvents && match.params.id) {
      event = {
        ...this.props.allEvents[match.params.id],
        id: match.params.id,
      };
    }
    let events = [];

    for (let id in allEvents) {
      let event = {
        ...allEvents[id],
        start: new Date(allEvents[id].start),
        end: new Date(allEvents[id].start),
        title: allEvents[id].name,
        id: id
      }
      events.push(event)
    }

    return (
      <React.Fragment>
        <EventsFrame>
          <GenericHeader>
            <EventsHeader
              date={this.state.date}
              onNextMonth={this.handleNextMonth}
              onPreviousMonth={this.handlePreviousMonth}
              onAdd={this.handleAdd}
              onToday={this.handleToday}
            />
          </GenericHeader>
          {/*<AddEventModal*/}
            {/*isOpen={this.state.isAddingEvent}*/}
            {/*onClose={() => this.setState({ isAddingEvent: false })}*/}
            {/*initialValues={{*/}
              {/*dateTimeDuration: {*/}
                {/*date: moment(this.state.addDate)*/}
              {/*},*/}
            {/*}}*/}
          {/*/>*/}
          {/*<EventDetailModal*/}
            {/*event={event}*/}
            {/*top={100}*/}
            {/*bottom="initial"*/}
          {/*/>*/}
          {/*<EventsHeader*/}
            {/*date={this.state.date}*/}
            {/*onNextMonth={this.handleNextMonth}*/}
            {/*onPreviousMonth={this.handlePreviousMonth}*/}
            {/*onAdd={this.handleAdd}*/}
            {/*onToday={this.handleToday}*/}
          {/*/>*/}
          <EventsCalendar
            events={events}
            date={this.state.date.toDate()}
            onEventClick = {this.handleEventClick}
            onCellClick = {this.handleAdd}
            style={{"flex-grow": 1}}
          />

          <EventsFooter>
            <LegendItem opacity="FF"><div /> = 1st payment</LegendItem>
            <LegendItem opacity="A6"><div /> = 2nd payment</LegendItem>
            <LegendItem opacity="59"><div /> = 3rd payment</LegendItem>
          </EventsFooter>
        </EventsFrame>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  allEvents: isLoaded(state.firebase.data.events) ? state.firebase.data.events : {},
  rooms: state.firebase.data.venues[getVenueId(state)].rooms
});

const mapDispatchToProps = {
  createEventThunk,
  openModal,
  closeModal
};

export default compose(
  firebaseConnect((props, store) => [{
    path: 'events',
    queryParams: [
      'orderByChild=venueId',
      `equalTo=${getVenueId(store.getState())}`,
    ],
  }]),
  connect(mapStateToProps, mapDispatchToProps),
)(Events);
