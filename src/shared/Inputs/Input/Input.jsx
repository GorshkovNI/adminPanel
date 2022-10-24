import React from 'react';
import { SvgSelector } from '../../../SvgSelector';
import styles from './Input.module.css';
import cn from 'classnames';

const noop = () => {};

const inputTypes = {
  normal: 'normal',
  incorrect: 'incorrect',
  disabled: 'disabled',
};

const areaTypes = {
  default: '',
  small: 'small',
  medium: 'medium',
  lsmall: 'lsmall',
};

export const Input = ({ onChangeText = noop, deleteText = noop, ...props }) => {
  const viewInput = cn(styles.input, {
    [styles.incorrect]: props.className === inputTypes.incorrect,
    [styles.disabled]: props.className === inputTypes.disabled,
  });

  const areaSize = cn(styles.area, {
    [styles.default]: props.size === areaTypes.default,
    [styles.medium]: props.size === areaTypes.medium,
    [styles.small]: props.size === areaTypes.small,
    [styles.lsmall]: props.size === areaTypes.lsmall,
  });

  const styleIcon = cn(styles.actionIcon, {
    [styles.IconNormal]: props.className === inputTypes.normal,
    [styles.IcoDisabled]: props.className === inputTypes.disabled,
    [styles.IconIncorrect]: props.className === inputTypes.incorrect,
  });

  return (
    <div className={viewInput}>
      <div className={areaSize}>
        <span className={styles.label}>{props.label}</span>
        <input
          className={styles.text}
          type='text'
          placeholder={props.placeholder}
          value={props.value}
          onChange={onChangeText}
        />
        {props.isVisible && (
          <button className={styles.buttonAction} onClick={deleteText}>
            <SvgSelector className={styleIcon} id='close' />
          </button>
        )}
      </div>
    </div>
  );
};
