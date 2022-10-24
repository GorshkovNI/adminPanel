import React, { useState } from 'react';
import { Search } from './Search';

export const SearchContainer = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');

  let checkedEmpty = (e) => {
    e.target.value === '' ? setIsActive(false) : setIsActive(true);
    setValue(e.target.value);
  };

  let deleteText = () => {
    setIsActive(false);
    setValue('');
  };

  return (
    <Search
      isActive={isActive}
      value={value}
      placeholder={props.placeholder}
      onCheckedEmpty={checkedEmpty}
      deleteText={deleteText}
    />
  );
};
