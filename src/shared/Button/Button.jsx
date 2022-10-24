import React from 'react';
import styles from './Button.module.css';
import cn from 'classnames';
import { SvgSelector } from '../../SvgSelector';

const noop = () => {};

const buttonTypes = {
  big: 'big',
  medium: 'medium',
  small: 'small',

  primary: 'primary',
  delete: 'delete',
  secondary: 'secondary',
  secondaryBlack: 'secondaryBlack',
};

export const Button = ({ action = noop, ...props }) => {
  const buttonClassName = cn(styles.button, {
    [styles.big]: props.size === buttonTypes.big,
    [styles.medium]: props.size === buttonTypes.medium,
    [styles.small]: props.size === buttonTypes.small,

    [styles.primary]: props.type === buttonTypes.primary,
    [styles.secondary]: props.type === buttonTypes.secondary,
    [styles.secondaryBlack]: props.type === buttonTypes.secondaryBlack,
  });

  const iconType = cn({
    [styles.load]: props.icon === 'load',
  });

  let visibleText = props.size !== buttonTypes.small ? true : false;
  let visibleIcon = props.size !== buttonTypes.medium ? true : false;
  return (
    <button className={buttonClassName} onClick={action}>
      {visibleIcon && (
        <SvgSelector
          className={`${styles.buttonIcon} ${iconType}`}
          id={props.icon}
        />
      )}
      {visibleText && <span className={styles.area}>{props.text}</span>}
    </button>
  );
};
