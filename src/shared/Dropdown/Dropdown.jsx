import React from 'react';
import styles from './Dropdown.module.css';
import cn from 'classnames'

export const Dropdown = ({ label, children, className }) => {

  const listClassname = cn(styles.list, className)

  return (
    <div className={styles.dropdown}>
      <div className={listClassname}>
        {label && <div className={styles.label}>{label}</div>}
        <div className={styles.item}>
          {children}
        </div>
      </div>
    </div>
  );
};
