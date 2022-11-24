import React from 'react';
import styles from './InputDropdown.module.css';
import cn from 'classnames';
import { Icon } from '../../../../shared/Icons/Icon';

export const InputDropdown = ({
  placeholder,
  prefix,
  className,
  value,
  onChange,
  mode,
  ...props
}) => {
  const containerClassname = cn(styles.container, className, styles.primary);

  return (
    <div className={containerClassname} onClick={props.onVisible}>
      <div className={styles.area}>
        <span className={styles.label}>{prefix}</span>
        <input
          className={styles.input}
          type='text'
          placeholder={placeholder}
          value={mode ? mode(value) : value}
          maxLength={props.maxlength}
          onChange={onChange}
        />
        {!!value && (
          <button
            className={cn(
              styles.buttonAction,
              props.isVisible ? styles.up : ''
            )}
          >
            <Icon name='vArrow' className={styles.actionIcon} />
          </button>
        )}
      </div>
    </div>
  );
};
