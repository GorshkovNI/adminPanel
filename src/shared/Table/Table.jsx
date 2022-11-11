import React from 'react';
import styles from './Table.module.css';
import cn from 'classnames';

export const Table = ({ className, children }) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};
