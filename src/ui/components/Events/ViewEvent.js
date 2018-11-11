/* eslint-disable */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { humanize } from 'ui/utils';
import SideTabs from './SideTabs';
import Button from 'ui/elements/Button';
import UserWithPicture from 'ui/elements/UserWithPicture';
import grayRoomIcon from 'ui/icons/raw/room-gray.svg';
import calendarIcon from 'ui/icons/raw/calendar-gray.svg';
import notesIcon from 'ui/icons/raw/notes-icon.svg';
import clientDetailsIcon from 'ui/icons/raw/client-details-icon.svg';


const Header = styled.div`
  height: 160px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
`;

const EventKindBadge = styled.div`
  height: 120px;
  width: 120px;
  background-color: #FFF;
  border-radius: 50%;
  margin-right: 15px;
  box-shadow: 0px 2px 4px rgba(125, 125, 125, 0.2);
`;

const KindImage = styled.img`
  width: 120px;
  height: 120px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 24px;
  color: #181818;
  margin-bottom: 5px;
`;

const SubTitle = styled.div`
  font-size: 14px;
  color: #7d7d7d;
  font-weight: 500;
`;

const DescriptionList = styled.dl`
  padding-left: 35px;
  font-weight: 500;
  font-size: 15px;

  .row {
    padding: 10px 0px;
    display: flex;
    align-items: center;
  }

  dt {
    display: inline-block;
    color: #7d7d7d;
    white-space: nowrap;
  }
  dd {
    display: inline-block;
    color: #222222;
    margin-left: 15px;
  }
`;

const Flex = styled.div`
  display: flex;

  .row {
    margin-right: 15px;

    &:last-child {
      margin-right: 0px;
    }
  }
`;

const FooterButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  margin: 0 5px;
`;

const ReminderSentLabel = styled.div`
  color: #7D7D7D;
  font-size: 12px;
  text-transform: lowercase;
`;

const StyledTitle = styled(Title)`
  font-family: Lora;
  font-size: 24px;
`;

class ViewEvent extends PureComponent {
  state = {};

  render() {
    return (
      <SideTabs
        tabs={[
          {
            title: 'Event overview',
            icon: calendarIcon,
            content: (
              <DescriptionList>
                <div className="row">
                  <dt>Consultant:</dt>
                  <dd>
                    <UserWithPicture
                      picture="https://placehold.it/100x100"
                      name="Matthew chow"
                    />
                  </dd>
                </div>

                <div className="row">
                  <dt>Event Type:</dt>
                  <dd>{humanize(event.type)}</dd>
                </div>

                <div className="row">
                  <dt>Start Time:</dt>
                  <dd>{moment(event.start).format('HH:mm a')}</dd>
                </div>

                <div className="row">
                  <dt>End Time:</dt>
                  <dd>{moment(event.end).format('HH:mm a')}</dd>
                </div>
              </DescriptionList>
            )
          },
          {
            title: 'Client details',
            icon: clientDetailsIcon,
            content: (
              <DescriptionList>
                <div className="row">
                  <dt>Client Name:</dt>
                  <dd>{event.clientName}</dd>
                </div>

                <div className="row">
                  <dt>Client email:</dt>
                  <dd>{event.clientEmail}</dd>
                </div>

                <div className="row">
                  <dt>Client phone:</dt>
                  <dd>{event.clientPhone}</dd>
                </div>

                <div className="row" style={{paddingRight: 15}}>
                  <dt>Payment:</dt>
                  <dd>
                    <div className="row">
                      <Flex>
                        <div style={{marginRight: 10}}>
                          <dt>1st:</dt>
                          <dd>10/01/17</dd>
                        </div>
                        <div>
                          <dt>Paid:</dt>
                          <dd>Y / N</dd>
                        </div>
                      </Flex>
                    </div>
                    <div className="row">
                      <Flex>
                        <div style={{marginRight: 10}}>
                          <dt>2st:</dt>
                          <dd>10/01/17</dd>
                        </div>
                        <div>
                          <dt>Paid:</dt>
                          <dd>Y / N</dd>
                        </div>
                      </Flex>
                    </div>
                    <div className="row">
                      <Flex>
                        <div style={{marginRight: 10}}>
                          <dt>2st:</dt>
                          <dd>10/01/17</dd>
                        </div>
                        <div>
                          <dt>Paid:</dt>
                          <dd>Y / N</dd>
                        </div>
                      </Flex>
                    </div>
                    <div className="row">
                      <div>
                        <dt>Payment Notification:</dt>
                        <dd>
                          {event.isPaymentBannerEnabled}

                        </dd>
                      </div>
                    </div>
                    <div className="row">
                      <dt>
                        <div>Reminder Email:</div>
                        {event.lastRemindedAt &&
                        <ReminderSentLabel>
                          last sent {moment(event.lastRemindedAt).format('YYYY-MM-DD')}
                        </ReminderSentLabel>}
                      </dt>
                      <dd>
                        <Button
                          size="small"
                          label={
                            this.state.isSendingReminder ?
                              'Sending...' :
                              'Send now'
                          }
                          disabled={this.state.isSendingReminder}
                          onClick={this.handleSendReminder}
                        />
                      </dd>
                    </div>
                  </dd>
                </div>
              </DescriptionList>
            ),
          },
          {
            title: 'Room & Layout',
            icon: grayRoomIcon,
            content: (
              <DescriptionList>
                <div className="row">
                  <dt>Room:</dt>
                  <dd>--ROOMNAME--</dd>
                </div>
                <div className="row">
                  <dt>Layout:</dt>
                  <dd>numberOfTables</dd>
                </div>
                <div className="row">
                  <dt>Guests per table</dt>
                  <dd>guestsPerTable</dd>
                </div>
              </DescriptionList>
            )
          },
          {
            title: 'Notes',
            icon: notesIcon,
            content: (
              <DescriptionList>
                <div className="row">
                  <dt>Notes</dt>
                  <dd>{event.notes}</dd>
                </div>
              </DescriptionList>
            )
          },
        ]}
      />
    )
  }
}

export default ViewEvent;