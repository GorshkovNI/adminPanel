import React, { useState } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';
import { Icon } from '../Icons/Icon';

const statusTypes = {
  incorrect: 'incorrect',
  disabled: 'disabled',
};

export const Input = ({
  placeholder,
  prefix,
  className,
  status = 'primary',
  disabled,
}) => {
  const [value, setValue] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
    e.target.value === '' ? setIsVisible(false) : setIsVisible(true);
  };

  const onDelete = () => {
    setValue('');
    setIsVisible(false);
  };

  const container = cn(styles.container, className, {
    [styles.incorrect]: statusTypes.incorrect === status,
  });

  return (
    <div className={container}>
      <div className={styles.area}>
        {prefix && <span className={styles.label}>{prefix}</span>}
        <input
          className={styles.input}
          type='text'
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
        {!disabled && isVisible && (
          <button className={styles.buttonAction} onClick={onDelete}>
            <Icon name='xMedium' className={styles.actionIcon} />
          </button>
        )}
        {disabled && <Icon name='locked' className={styles.IconDisabled} />}
      </div>
    </div>
  );
};
