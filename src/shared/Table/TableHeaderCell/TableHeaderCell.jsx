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
  direction,
}) => {
  const cellClassName = cn(styles.area, className, {
    [styles.active]: isActive,
  });

  const iconRotate = cn(styles.icon, {
    [styles.up]: direction,
  });

  return (
    <div className={cellClassName} onClick={onClick} id={id}>
      {children}
      {isIcon && (
        <div className={styles.iconArea}>
          <Icon name='vArrow' className={iconRotate} />
        </div>
      )}
    </div>
  );
};
