import React from 'react';
import styles from './Button.module.css';
import cn from 'classnames';
import { Icon } from '../Icons/Icon';

const noop = () => {};

const buttonTypes = {
  primary: 'primary',
  transparent: 'transparent',
  delete: 'delete',
};

export const Button = ({
  mode = 'primary',
  size,
  className,
  icon,
  children,
  onClick = noop,
}) => {
  const buttonClassName = cn(styles.button, className, {
    [styles.primary]: mode === buttonTypes.primary,
    [styles.transparent]: mode === buttonTypes.transparent,
    [styles.delete]: mode === buttonTypes.delete,
    [styles.onlyIcon]: !children && icon,

    [styles.medium]: size === 'medium',
    [styles.big]: size === 'big',
  });

  return (
    <button className={buttonClassName} onClick={onClick}>
      <Icon name={icon} className={styles.buttonIcon} />
      {children}
    </button>
  );
};
