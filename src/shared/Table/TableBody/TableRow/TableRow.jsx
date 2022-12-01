import React from 'react';
import styles from './TableRow.module.css';
import cn from 'classnames';

export const TableRow = ({ id, children, getIdRow, className }) => {
  return (
    <div className={cn(styles.wrapper, className)} onClick={getIdRow} id={id}>
      <div className={styles.cells}>{children}</div>
    </div>
  );
};
