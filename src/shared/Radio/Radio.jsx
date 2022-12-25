import React from 'react';
import styles from './Radio.module.css';

export const Radio = ({ name, value, title, checked, onClick }) => {
  return (
    <label className={styles.control}>
      <input
        type='radio'
        className={styles.radio}
        name={name}
        value={value}
        checked={checked}
        onClick={onClick}
        onChange={() => {}}
      />
      <span className={styles.title}>{title}</span>
    </label>
  );
};
