import React from 'react';
import styles from './TableCell.module.css';
import cn from 'classnames';

export const TableCell = ({ className, children, onClick, id }) => {
  return (
    <div className={cn(styles.wrapper, className)} onClick={onClick} id={id}>
      {children}
    </div>
  );
};
