/* eslint-disable no-unused-labels */
import React, { createContext} from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

export const FilterContext = createContext();

// eslint-disable-next-line no-unused-vars
let count = 0;
// eslint-disable-next-line no-unused-vars
let dropDowntItem = [];

export const DROPDOWN_ELEMENT = [
  { id: 1, label: 'Новый', value: 'new'},
  { id: 2, label: 'Расчет', value: 'calc'},
  { id: 3, label: 'Подтвержден', value: 'confirmed'},
  { id: 4, label: 'Отложен',  value: 'delayed'},
  { id: 5, label: 'Выполнен', value: 'completed'},
  { id: 6, label: 'Отменен', value: 'cancelled'},
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

  const [valueFromInputDropdown, setValueFromInputDropdown] = useState(['Любой']);

  const handlerCheckedStatus = (e) => {

    // setValueFromInputDropdown(
    //   !valueFromInputDropdown.includes(e.target.value)
    //   ? [...valueFromInputDropdown, e.target.value]
    //   : valueFromInputDropdown.filter((item) => item !== e.target.value)
    // )  
    
    if(dropDowntItem.length === DROPDOWN_ELEMENT.length){
      console.log('tyt')
      setValueFromInputDropdown(dropDowntItem)
      dropDowntItem.length = 0
    }
    // Если не выбран и кликнули - добавим или удалим
    if(!valueFromInputDropdown.includes(e.target.value)){
      if(valueFromInputDropdown.includes('Любой')){
        setValueFromInputDropdown(valueFromInputDropdown.length = 0)
      }
      setValueFromInputDropdown([...valueFromInputDropdown, e.target.value])
      count++
    }

    else{
      setValueFromInputDropdown(valueFromInputDropdown.filter((item) => item !== e.target.value))
      count--;
    }

    //Если нет выбраных
    if(count === 0){
      setValueFromInputDropdown(['Любой'])
    }
    
    if(count === DROPDOWN_ELEMENT.length){
      DROPDOWN_ELEMENT.forEach((item) => {
        dropDowntItem.push(item.label)
      })
      setValueFromInputDropdown(['Любой'])
    } 
  };


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
