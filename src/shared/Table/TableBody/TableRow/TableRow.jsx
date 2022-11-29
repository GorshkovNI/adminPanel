import React from 'react';
import styles from './TableRow.module.css';

export const TableRow = ({ children, getIdRow }) => {
  return (
    <div className={styles.wrapper} onClick={getIdRow} id={children}>
      <div className={styles.cells}>{children}</div>
    </div>
  );
};
