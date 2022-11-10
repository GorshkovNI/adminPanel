import React from 'react';
import styles from './TableBody.module.css';
import cn from 'classnames';

export const TableBody = ({ children, className, ref, onScroll }) => {
  const tableBodyClassName = cn(styles.container, className);

  return (
    <div className={tableBodyClassName} ref={ref} onScroll={onScroll}>
      {children}
    </div>
  );
};
