import React from 'react';
import styles from './TableHeaderCell.module.css';
import cn from 'classnames';
import { Icon } from '../../Icons/Icon';

export const TableHeaderCell = ({
  className,
  id,
  isIcon,
  isActive,
  children,
  onClick,
}) => {
  const cellClassName = cn(styles.area, className, {
    [styles.active]: isActive,
  });

  return (
    <div className={cellClassName} onClick={onClick} id={id}>
      {children}
      {isIcon && (
        <div className={styles.iconArea}>
          <Icon name='vArrow' className={styles.icon} />
        </div>
      )}
    </div>
  );
};
