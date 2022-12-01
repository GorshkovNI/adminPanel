import React from 'react';
import { Button } from '../Button/Button';
import cn from 'classnames';
import styles from './Modal.module.css';

export const Modal = ({
  isOpen,
  label = 0,
  className,
  onFirstAction,
  onSecondAction,
  textButton1,
  textButton2,
  disabled,
}) => {
  return (
    isOpen && (
      <div className={cn(styles.container, className)}>
        <span className={styles.label}>{label}</span>
        <Button
          className={styles.button}
          mode='transparent'
          onClick={onFirstAction}
          disabled={disabled}
        >
          {textButton1}
        </Button>
        <Button className={styles.button} onClick={onSecondAction}>
          {textButton2}
        </Button>
      </div>
    )
  );
};
