import React from 'react';
import styles from './TableHeader.module.css';

export const TableHeader = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cells}>{children}</div>
    </div>
  );
};
