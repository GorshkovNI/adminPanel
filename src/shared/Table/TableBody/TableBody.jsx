import React from 'react';
import styles from './TableBody.module.css';
import cn from 'classnames';

export const TableBody = ({ children, className }) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};
