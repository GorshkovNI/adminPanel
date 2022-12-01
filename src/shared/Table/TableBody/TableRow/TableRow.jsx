import React from 'react';
import styles from './TableRow.module.css';

export const TableRow = ({ id, children, getIdRow }) => {
  return (
    <div className={styles.wrapper} onClick={getIdRow} id={id}>
      <div className={styles.cells}>{children}</div>
    </div>
  );
};
