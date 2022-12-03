import React from 'react';
import styles from './TableCell.module.css';
import cn from 'classnames';

export const TableCell = ({ className, children }) => {
  return <div className={cn(styles.wrapper, className)}>{children}</div>;
};
