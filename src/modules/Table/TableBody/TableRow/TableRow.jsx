import React from 'react';
import styles from './TableRow.module.css';

export const TableRow = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cells}>{children}</div>
    </div>
  );
};