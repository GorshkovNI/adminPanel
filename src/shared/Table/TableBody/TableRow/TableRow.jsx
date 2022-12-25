import React from 'react';
import styles from './TableRow.module.css';
import cn from 'classnames';

export const TableRow = ({ id, children, className, checked }) => {
  const containerClassName = cn(styles.wrapper, className, {
    [styles.active]: checked,
  });

  return (
    <div className={containerClassName} id={id}>
      <div className={styles.cells}>{children}</div>
    </div>
  );
};
