import React from 'react';
import styles from './Input.module.css';
import cn from 'classnames';
import { Icon } from '../Icons/Icon';

const statusTypes = {
  incorrect: 'incorrect',
  disabled: 'disabled',
};

const noop = () => {}

export const Input = ({
  placeholder,
  prefix,
  className,
  status = 'primary',
  disabled,
  value,
  nameIcon,
  isSelect,
  onChange = noop,
  ...props
}) => {

  const containerClassname = cn(styles.container, className, {
    [styles.incorrect]: statusTypes.incorrect === status,
  });

  return (
    <div className={containerClassname}>
      <div className={styles.area}>
        <span className={styles.label}>{prefix}</span>
        <input
          className={styles.input}
          type='text'
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
        {!disabled && !!value && (
          <button className={styles.buttonAction} onClick={props.onClick}>
            <Icon name={nameIcon} className={styles.actionIcon} />
          </button>
        )}
        {isSelect&& (
          <button className={styles.buttonAction} onClick={props.onClick}>
            <Icon name={nameIcon} className={styles.actionIcon} />
          </button>
        )}
        {disabled && <Icon name={nameIcon} className={styles.IconDisabled} />}
      </div>
    </div>
  );
};
