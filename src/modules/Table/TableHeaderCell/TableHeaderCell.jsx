import React from 'react';
import styles from './TableHeaderCell.module.css';
import cn from 'classnames';
import { Icon } from '../../../shared/Icons/Icon';
import { CheckBox } from '../../../shared/Checkbox/Checkbox';

export const TableHeaderCell = ({
  className,
  checkbox,
  isSort = true,
  children,
}) => {
  const tableCellClassName = cn(styles.containerCell, className);
  return (
    <div className={tableCellClassName}>
      <div className={styles.area}>
        {checkbox && <CheckBox />}
        <span className={styles.text}>{children}</span>
        {isSort && <Icon name='vArrow' className={styles.icon} />}
      </div>
    </div>
  );
};
