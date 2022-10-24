import React from 'react';
import { useState } from 'react';
import { Input } from './Input';

export const InputContainer = (props) => {
  const [value, setValue] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const changeText = (e) => {
    setValue(e.target.value);
    e.target.value === '' ? setIsVisible(false) : setIsVisible(true);
  };

  const deleteText = () => {
    setValue('');
    setIsVisible(false);
  };

  return (
    <Input
      className={props.className}
      label={props.label}
      placeholder={props.placeholder}
      size={props.size}
      value={value}
      onChangeText={changeText}
      deleteText={deleteText}
      isVisible={isVisible}
    />
  );
};
