import React from 'react';
import styles from './TableHeader.module.css';
import cn from 'classnames';

export const TableHeader = ({ className, children }) => {
  return <div className={cn(styles.cells, className)}>{children}</div>;
};
