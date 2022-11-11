import React from 'react';
import styles from './TableHeaderCell.module.css';
import cn from 'classnames';
import { Icon } from '../../Icons/Icon';

export const TableHeaderCell = ({ className, onSort, children }) => {
  return (
    <div className={cn(styles.area, className)}>
      {children}
      {onSort && (
        <div className={styles.iconArea} onClick={onSort}>
          <Icon name='vArrow' className={styles.icon} />
        </div>
      )}
    </div>
  );
};
