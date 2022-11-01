
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
 
  mode = 'primary',
  icon,
  children,
  onClick = noop
}) => {
  const buttonClassName = cn(styles.button, {
    [styles.primary]: mode === buttonTypes.primary,
    [styles.transparent]: mode === buttonTypes.transparent,
    [styles.onlyIcon]: !children && icon,
  });

  return (
    <button className={buttonClassName} onClick={onClick}>
      <Icon name={icon} className={styles.buttonIcon} />
      {children}
    </button>
  );
};