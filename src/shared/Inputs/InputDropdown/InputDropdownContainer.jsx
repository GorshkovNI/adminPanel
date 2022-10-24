import React from 'react';
import { useState } from 'react';
import { InputDropdown } from './InputDropdown';

export const StateContext = React.createContext();

export const InputDropdownContainer = (props) => {
  const [visible, setVisible] = useState(true);
  const [arrFilterValue, setFilterValue] = useState([]);

  const handleIsVisible = () => {
    setVisible(!visible);
  };

  const fillInput = (e) => {
    let value = e.target.value;
    let index = arrFilterValue.indexOf(value);
    console.log(typeof value, index);
    index <= -1
      ? setFilterValue([...arrFilterValue, value])
      : setFilterValue([
          ...arrFilterValue.slice(0, index),
          ...arrFilterValue.slice(index + 1),
        ]);
    console.log(arrFilterValue);
  };

  return (
    <StateContext.Provider value={{ returnText: fillInput }}>
      <InputDropdown
        size={props.size}
        placeheolder={props.placeheolder}
        isVisible={handleIsVisible}
        visible={visible}
        value={arrFilterValue}
      />
    </StateContext.Provider>
  );
};
