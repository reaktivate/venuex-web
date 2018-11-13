import React from 'react';

import styled, { css } from 'styled-components';
import dropdownCaretDown from 'ui/icons/raw/caret-down-custom.svg';
import dropdownCaretUp from 'ui/icons/raw/caret-up-custom.svg';
import btnOwnerImage from 'ui/icons/raw/btn-owner.svg';
import ownerImage from 'ui/icons/raw/owner.svg';
import Checkbox from 'ui/elements/Checkbox';
import BaseInput from 'ui/elements/form/BaseInput';

const Container = styled.div`
  border-bottom: solid 1px #d8d8d8;
  position: relative;

  ${props => props.meta && props.meta.error && props.meta.touched && css`
    border-bottom: solid 1px #c02026;
  `}
`;

const ConsultantName = styled.div`
  font-size: 15px;
  color: #222222;
  font-weight: 500;
`;

const ConsultantPicture = styled.img`
  width: 50px;
  object-fit: contain;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  margin-right: 10px;
`;

const ConsultantContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ConsultantLabel = props => {
  const { picture, name } = props;

  return (
    <ConsultantContainer>
      <ConsultantPicture src={picture} />
      <ConsultantName>{name}</ConsultantName>
    </ConsultantContainer>
  );
};

const PickContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;
  cursor: pointer;
`;

const Placeholder = styled.div`
  color: #7d7d7d;
  font-size: 15px;
`;

const ArrowIcon = styled.img`
  width: 13px;
  height: 8px;
`;

const Dropdown = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: calc(100% + 5px);
  background-color: #FFF;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  z-index: 10;
`;

const Consultant = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1px 0px;

  &:hover {
    background-color: #fafafa;

    .assign-badge {
      display: inline-block;
    }
  }

  ${props => props.picked && css`
    background-color: ${props.theme.colors.primary}33;

    &:hover {
      background-color: ${props.theme.colors.primary}33;
    }
  `}

  .assign-badge {
    height: 20px;
    cursor: pointer;
    object-fit: contain;
    display: none;
  }

  ${props => props.isOwner && css`
    .assign-badge {
      display: inline-block;
    }
  `}
`;


const Group = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img``;

const EmployeeRender = (props) => {
  const {
    handleEmployeeUnchecked, handleEmployeeChecked, handleAssignClicked, employee, input
  } = props;
  const { value } = input;

  const isPicked = value && value.picked.indexOf(employee.id) !== -1;
  const isOwner = value.owner === employee.id;
  return (
    <Consultant picked={isPicked} isOwner={isOwner} key={employee.id}>
      <Group>
        <Checkbox
          checked={isPicked}
          onUncheck={() => handleEmployeeUnchecked(employee.id)}
          onCheck={() => handleEmployeeChecked(employee.id)}
        />
        <ConsultantLabel
          picture={employee.picture}
          name={employee.name}
        />
      </Group>
      <Group>
        <Img
          alt=""
          className="assign-badge"
          src={isOwner ? ownerImage : btnOwnerImage}
          onClick={() => handleAssignClicked(employee.id)}
        />
      </Group>
    </Consultant>
  );
};

const ConsultantPickerRender = (props) => {
  const {
    handleToggle, value, getEmployeeById, isOpen, employees
  } = props;

  return (
    <BaseInput label="Consultant:" {...props}>
      <Container {...props}>
        <PickContainer onClick={handleToggle}>
          <Placeholder>
            {value.picked.length === 0 ? 'Pick a staff' : value.picked.map(id => (
              <Group key={id} style={{ margin: '10px 0px' }}>
                <ConsultantLabel
                  name={getEmployeeById(id).name}
                  picture={getEmployeeById(id).picture}
                />
                {value.owner === id && <Img src={ownerImage} />}
              </Group>
            ))}
          </Placeholder>
          <ArrowIcon
            src={isOpen ? dropdownCaretUp : dropdownCaretDown}
          />
        </PickContainer>

        {isOpen
        && (
          <Dropdown>
            {
              employees.map(employee => (
                <EmployeeRender employee={employee} {...props} />
              ))
            }
          </Dropdown>
        )
        }
      </Container>
    </BaseInput>
  );
};

export default ConsultantPickerRender;
