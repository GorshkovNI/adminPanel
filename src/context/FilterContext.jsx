/* eslint-disable no-unused-labels */
import React, { createContext } from 'react';
import { useState } from 'react';

export const FilterContext = createContext();

export const DROPDOWN_ELEMENT = [
  { id: 1, label: 'Новый', value: 'new' },
  { id: 2, label: 'Расчет', value: 'calc' },
  { id: 3, label: 'Подтвержден', value: 'confirmed' },
  { id: 4, label: 'Отложен', value: 'delayed' },
  { id: 5, label: 'Выполнен', value: 'completed' },
  { id: 6, label: 'Отменен', value: 'cancelled' },
];

export const FilterContextProvider = ({ children }) => {
  //Data Inputs

  const [valueInputDateTo, setValueInputDateTo] = useState('');
  const [valueInputDateFrom, setValueInputDateFrom] = useState('');

  const handleChangeValueInputTo = (e) => {
    setValueInputDateTo(e.target.value);
  };

  const handleChangeValueInputFrom = (e) => {
    setValueInputDateFrom(e.target.value);
  };

  const handleResetValueDateTo = () => {
    setValueInputDateTo('');
  };

  const handleResetValueDateFrom = () => {
    setValueInputDateFrom('');
  };

  //Money Input

  const [valueInputMoneyTo, setValueInputMoneyTo] = useState('');
  const [valueInputMoneyFrom, setValueInputMoneyFrom] = useState('');

  const handleChangeMoneyInputTo = (e) => {
    setValueInputMoneyTo(e.target.value);
  };

  const handleChangeMoneyInputFrom = (e) => {
    setValueInputMoneyFrom(e.target.value);
  };

  const handleResetMoneyInputTo = () => {
    setValueInputMoneyTo('');
  };

  const handleResetMoneyInputFrom = () => {
    setValueInputMoneyFrom('');
  };

  //Search Input
  const [valueSearchInput, setValueSearchInput] = useState('');

  const handlerChangeSearchInput = (e) => {
    setValueSearchInput(e.target.value);
  };
  const handlerResetSearchInput = () => {
    setValueSearchInput('');
  };

  //All Filter
  const handleClearAllFilter = () => {
    setValueInputDateTo(''),
      setValueInputDateFrom(''),
      setValueInputMoneyTo(''),
      setValueInputMoneyFrom(''),
      setValueSearchInput('');
  };

  //Select
  const [valueFromInputDropdown, setValueFromInputDropdown] = useState([]);

  const handlerCheckedStatus = (e) => {
    setValueFromInputDropdown(
      !valueFromInputDropdown.includes(e.target.value)
        ? [...valueFromInputDropdown, e.target.value]
        : valueFromInputDropdown.filter((item) => item !== e.target.value)
    );
  };

  // const status = (!valueFromInputDropdown.length || valueFromInputDropdown.length === DROPDOWN_ELEMENT.length)
  // ?  setValueFromInputDropdown(['Любой'])
  // :  setValueFromInputDropdown([...valueFromInputDropdown, e.target.value])

  const filterStore = {
    data: {
      valueTo: valueInputDateTo,
      valueFrom: valueInputDateFrom,
      onChangeTo: handleChangeValueInputTo,
      onChangeFrom: handleChangeValueInputFrom,
      onResetTo: handleResetValueDateTo,
      onResetFrom: handleResetValueDateFrom,
    },
    money: {
      valueTo: valueInputMoneyTo,
      valueFrom: valueInputMoneyFrom,
      onChangeTo: handleChangeMoneyInputTo,
      onChangeFrom: handleChangeMoneyInputFrom,
      onResetTo: handleResetMoneyInputTo,
      onResetFrom: handleResetMoneyInputFrom,
    },
    search: {
      value: valueSearchInput,
      onChange: handlerChangeSearchInput,
      onReset: handlerResetSearchInput,
      onResetAll: handleClearAllFilter,
    },
    select: {
      value: valueFromInputDropdown,
      onChange: handlerCheckedStatus,
      dropdownItem: DROPDOWN_ELEMENT,
    },
  };

  return (
    <FilterContext.Provider value={{ filterStore: filterStore }}>
      {children}
    </FilterContext.Provider>
  );
};
