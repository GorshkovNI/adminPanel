import React from 'react';
import styles from './TableHeaderCell.module.css';
import cn from 'classnames';
import { Icon } from '../../Icons/Icon';
import { useState } from 'react';

export const TableHeaderCell = ({ className, onSort, children }) => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div className={cn(styles.area, className)} onClick={handleActive}>
      {console.log(children)}
      {children}
      {onSort && (
        <div className={styles.iconArea} onClick={onSort}>
          <Icon name='vArrow' className={styles.icon} />
        </div>
      )}
    </div>
  );
};
