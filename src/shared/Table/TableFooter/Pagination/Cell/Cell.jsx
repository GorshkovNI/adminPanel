import React from 'react';
import styles from './Cell.module.css';
import cn from 'classnames';

export const Cell = ({ value, isActive, onClick }) => {
  const cellClassName = cn(styles.cell, {
    [styles.active]: isActive,
  });

  return (
    <div className={styles._}>
      <div className={styles.area}>
        <input
          type='button'
          value={value}
          className={cellClassName}
          onClick={onClick}
        />
      </div>
    </div>
  );
};
