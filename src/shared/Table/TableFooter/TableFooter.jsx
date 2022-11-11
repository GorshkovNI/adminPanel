import React from 'react';
import styles from './TableFooter.module.css';
import cn from 'classnames';

export const TableFooter = ({ children, className }) => {
  return <div className={cn(styles.wrapper, className)}>{children}</div>;
};
