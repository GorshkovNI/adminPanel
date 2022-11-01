import React from 'react';
import { Icon } from '../Icons/Icon';
import styles from './Search.module.css';

export const Search = ({ 
  value,
  onChange,
  onReset,
  placeholder 
}) => {

  return (
    <div className={styles.searchbar}>
      <div className={styles.area}>
        <Icon name='search' className={styles.icon} />
        <input
          className={styles.text}
          type='text'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {!!value && (
          <button className={styles.searchButtonClose} onClick={onReset}>
            <Icon name='xMedium' className={styles.buttonIcon} />
          </button>
        )}
      </div>
    </div>
  );
};
