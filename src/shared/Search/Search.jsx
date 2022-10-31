import React, { useState } from 'react';
import { Icon } from '../Icons/Icon';
import styles from './Search.module.css';

export const Search = ({ placeholder }) => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');

  let onCheckedEmpty = (e) => {
    e.target.value === '' ? setIsActive(false) : setIsActive(true);
    setValue(e.target.value);
  };

  let onDelete = () => {
    setIsActive(false);
    setValue('');
  };

  return (
    <div className={styles.searchbar}>
      <div className={styles.area}>
        <Icon name='search' className={styles.icon} />
        <input
          className={styles.text}
          type='text'
          placeholder={placeholder}
          value={value}
          onChange={onCheckedEmpty}
        />
        {isActive && (
          <button className={styles.searchButtonClose} onClick={onDelete}>
            <Icon name='xMedium' className={styles.buttonIcon} />
          </button>
        )}
      </div>
    </div>
  );
};
