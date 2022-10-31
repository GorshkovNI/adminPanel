import React, { useState } from 'react';
import styles from './InputDropdown.module.css';
import cn from 'classnames';
import { Icon } from '../Icons/Icon';

export const InputDropdown = ({ className, value, children }) => {
  const container = cn(styles.container, className);

  const [visible, setVisible] = useState(false);

  const handleOpenDropdown = () => {
    setVisible(!visible);
  };

  return (
    <div className={container}>
      <div className={styles.area}>
        <input className={styles.input} type='text' defaultValue={value} />
        <button className={styles.buttonAction} onClick={handleOpenDropdown}>
          <Icon name='vArrow' className={styles.actionIcon} />
        </button>
        <div className={styles.dropdown}>{visible && children}</div>
      </div>
    </div>
  );
};
