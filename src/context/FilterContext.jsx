import React, { createContext } from 'react';
import { useState } from 'react';

export const FilterContext = createContext();

export const DROPDOWN_ELEMENT = [
  { id: 1, label: 'Новый', checked: false },
  { id: 2, label: 'Расчет', checked: false },
  { id: 3, label: 'Подтвержден', checked: false },
  { id: 4, label: 'Отложен', checked: false },
  { id: 5, label: 'Выполнен', checked: false },
  { id: 6, label: 'Отменен', checked: false },
];

export const FilterContextProvider = ({ children }) => {
  const [valueFromInputDropdown, setValueFromInputDropdown] = useState([]);

  const checkedStatus = (e) => {
    let value = e.target.value;
    DROPDOWN_ELEMENT.forEach((current) => {
      if (current.id == e.target.id) {
        current.checked = !current.checked;
      }
    });
    let index = valueFromInputDropdown.indexOf(value);
    index <= -1
      ? setValueFromInputDropdown([...valueFromInputDropdown, value])
      : setValueFromInputDropdown([
          ...valueFromInputDropdown.slice(0, index),
          ...valueFromInputDropdown.slice(index + 1),
        ]);
  };

  return (
    <FilterContext.Provider
      value={{
        onCheckedStatus: checkedStatus,
        value: valueFromInputDropdown,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
