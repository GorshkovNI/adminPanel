import React from 'react';
import styles from './Checkbox.module.css';
import { Icon } from '../Icons/Icon';
import cn from 'classnames';

//const noop = () => {}

export const CheckBox = ({ id, label, className, checked, onChange }) => {
  const labelSetting = cn(styles.checkbox, className);

  return (
    <label>
      <div className={labelSetting}>
        <div className={styles.label}>
          <input
            className={styles.input}
            value={label}
            type='checkbox'
            id={id}
            checked={checked}
            onChange={onChange}
          />
          <div className={styles.area}>
            <span className={styles.marker}></span>
            <Icon name='checkmark' className={styles.icon} />
          </div>
          {label && <span className={styles.text}>{label}</span>}
        </div>
      </div>
    </label>
  );
};
