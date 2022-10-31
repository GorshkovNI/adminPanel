import React from 'react';
import styles from './Dropdown.module.css';

export const Dropdown = ({ children }) => {
  return (
    <div className={styles.dropdown}>
      <div className={styles.list}>
        <div className={styles.item}>{children}</div>
      </div>
    </div>
  );
};
