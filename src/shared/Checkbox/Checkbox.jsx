import React from 'react';
import styles from './Checkbox.module.css';
import { Icon } from '../Icons/Icon';
import cn from 'classnames';

const noop = () => {};

export const CheckBox = ({
  id,
  label,
  className,
  onChange = noop,
  onClick,
  checked,
}) => {
  const labelClassName = cn(styles.checkbox, className);

  return (
    <label onClick={onClick}>
      <div className={labelClassName}>
        <div className={styles.label}>
          <input
            className={styles.input}
            value={label}
            type='checkbox'
            id={id}
            onChange={onChange}
            checked={checked}
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
