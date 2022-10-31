import React from 'react';
import styles from './Button.module.css';
import cn from 'classnames';
import { Icon } from '../Icons/Icon';

const noop = () => {};

const buttonTypes = {
  primary: 'primary',
  transparent: 'transparent',
};

export const Button = ({
  className,
  type = 'primary',
  icon,
  children,
  onClick = noop,
}) => {
  const buttonClassName = cn(styles.button, className, {
    [styles.primary]: type === buttonTypes.primary,
    [styles.transparent]: type === buttonTypes.transparent,
    [styles.onlyIcon]: !children && icon,
  });

  return (
    <button className={buttonClassName} onClick={onClick}>
      <Icon name={icon} className={styles.buttonIcon} />
      {children}
    </button>
  );
};
