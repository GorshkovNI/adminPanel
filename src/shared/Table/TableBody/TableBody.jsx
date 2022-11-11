import React from 'react';
import styles from './TableBody.module.css';
import cn from 'classnames';

export const TableBody = ({ children, className }) => {
  const tableBodyClassName = cn(styles.container, className);

  return <div className={tableBodyClassName}>{children}</div>;
};
