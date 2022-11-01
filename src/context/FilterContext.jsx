/* eslint-disable no-unused-labels */
import React, { createContext} from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

export const FilterContext = createContext();

export const DROPDOWN_ELEMENT = [
  { id: 1, label: 'Новый'},
  { id: 2, label: 'Расчет'},
  { id: 3, label: 'Подтвержден'},
  { id: 4, label: 'Отложен'},
  { id: 5, label: 'Выполнен'},
  { id: 6, label: 'Отменен'},
];

export const FilterContextProvider = ({ children }) => {

  //Data Inputs
  
   const [valueInputDateTo, setValueInputDateTo] = useState('')
   const [valueInputDateFrom, setValueInputDateFrom] = useState('')

  const handleChangeValueInputTo = useCallback((e) =>{
    setValueInputDateTo(e.target.value)
  }, [])

  const handleChangeValueInputFrom = useCallback((e) =>{
    setValueInputDateFrom(e.target.value)
  }, )

  const handleResetValueDateTo = useCallback(() =>{
    setValueInputDateTo('')
  },[])

  const handleResetValueDateFrom = useCallback(() =>{
    setValueInputDateFrom('')
  }, [])

  //Money Input

  const [valueInputMoneyTo, setValueInputMoneyTo] = useState('')
  const [valueInputMoneyFrom, setValueInputMoneyFrom] = useState('')

  const handleChangeMoneyInputTo = useCallback((e) =>{
    setValueInputMoneyTo(e.target.value)
  }, [])

  const handleChangeMoneyInputFrom = useCallback((e) =>{
    setValueInputMoneyFrom(e.target.value)
  }, )

  const handleResetMoneyInputTo = useCallback(() =>{
    setValueInputMoneyTo('')
  },[])

  const handleResetMoneyInputFrom = useCallback(() =>{
    setValueInputMoneyFrom('')
  }, [])

  //Search Input
  const [valueSearchInput, setValueSearchInput] = useState('')

  const handlerChangeSearchInput = (e) => {
    setValueSearchInput(e.target.value)
  }
  const handlerResetSearchInput = () => {
    setValueSearchInput('')
  }

  //All Filter
  const handleClearAllFilter = useCallback(() => {
    setValueInputDateTo(''),
    setValueInputDateFrom(''),
    setValueInputMoneyTo(''),
    setValueInputMoneyFrom(''),
    setValueSearchInput('')
  }, [])

  //Select

  const [valueFromInputDropdown, setValueFromInputDropdown] = useState([]);

  const handlerCheckedStatus = (e) => {
    setValueFromInputDropdown(
      !valueFromInputDropdown.includes(e.target.value)
      ? [...valueFromInputDropdown, e.target.value]
      : valueFromInputDropdown.filter((item) => item !== e.target.value)
    )
  };


  // eslint-disable-next-line no-unused-vars
  const filterStore = {
    data:{
      valueTo: valueInputDateTo,
      valueFrom: valueInputDateFrom,
      onChangeTo: handleChangeValueInputTo,
      onChangeFrom: handleChangeValueInputFrom,
      onResetTo: handleResetValueDateTo,
      onResetFrom: handleResetValueDateFrom
    },
    money:{
      valueTo: valueInputMoneyTo,
      valueFrom: valueInputMoneyFrom,
      onChangeTo: handleChangeMoneyInputTo,
      onChangeFrom: handleChangeMoneyInputFrom,
      onResetTo: handleResetMoneyInputTo,
      onResetFrom: handleResetMoneyInputFrom
    },
    search:{
      value: valueSearchInput,
      onChange: handlerChangeSearchInput,
      onReset: handlerResetSearchInput,
      onResetAll: handleClearAllFilter
    },
    select:{
      value: valueFromInputDropdown,
      onChange: handlerCheckedStatus,
      dropdownItem: DROPDOWN_ELEMENT
    }

  }
  
  return (
    <FilterContext.Provider
      value={{filterStore: filterStore}}
    >
      {children}
    </FilterContext.Provider>
  );
};
