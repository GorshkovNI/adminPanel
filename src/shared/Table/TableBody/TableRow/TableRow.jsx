import React from 'react';
import styles from './TableRow.module.css';
import cn from 'classnames';

export const TableRow = ({ id, children, getIdRow, className, checked }) => {
  console.log(checked === id);
  const containerClassName = cn(styles.wrapper, className, {
    [styles.active]: checked,
  });

  return (
    <div className={containerClassName} onClick={getIdRow} id={id}>
      <div className={styles.cells}>{children}</div>
    </div>
  );
};
