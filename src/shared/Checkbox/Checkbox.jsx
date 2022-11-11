import React from 'react';
import styles from './Checkbox.module.css';
import { Icon } from '../Icons/Icon';
import cn from 'classnames';

export const CheckBox = ({
  id,
  label,
  className,
  checked,
  onChange,
  ...props
}) => {
  return (
    <label>
      <div className={cn(styles.checkbox, className)}>
        <div className={styles.label}>
          <input
            className={styles.input}
            value={label}
            type='checkbox'
            id={id}
            checked={checked}
            onChange={onChange}
            onClick={props.onClick}
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
