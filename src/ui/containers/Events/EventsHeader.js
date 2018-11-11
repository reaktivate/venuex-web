import React, { PureComponent } from 'react';
import styled from 'styled-components';
import AddButton from 'ui/elements/AddButton';
import Button from 'ui/elements/Button';
import leftArrowIcon from 'ui/icons/raw/caret-left-custom.svg';
import rightArrowIcon from 'ui/icons/raw/caret-right-custom.svg';

const Container = styled.div`
  display:flex;
`;


const MonthPicker = styled.div`
  display: flex;
  font-size: 20px;
  color: #222222;
  align-items: center;
  justify-content: center;
  width:100%;
`;

const ArrowIcon = styled.img`
  height: 17px;
  object-fit: contain;
  margin: 0px 20px;
  cursor: pointer;
`;

const CalTitle = styled.div`
  font-family: Lora;
  font-size: 20px;
  width: 150px;
  text-align:center;
`;

export default class EventsHeader extends PureComponent {
  render() {
    const {
      date,
      onNextMonth,
      onPreviousMonth,
      onAdd,
      onToday,
    } = this.props;

    return (
      <Container>
          <div>
            <Button
              label="Today"
              onClick={onToday}
            />
          </div>
          <MonthPicker>
            <ArrowIcon src={leftArrowIcon} onClick={onPreviousMonth} />
            <CalTitle>{date.format('MMMM YYYY')}</CalTitle>
            <ArrowIcon src={rightArrowIcon} onClick={onNextMonth} />
          </MonthPicker>
          <div style={{ display: 'flex', marginLeft: 'auto' }}>
            <AddButton onClick={onAdd} />
          </div>
      </Container>
    );
  }
}
