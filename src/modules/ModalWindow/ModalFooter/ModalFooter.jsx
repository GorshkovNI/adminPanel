import React from 'react';
import { Button } from '../../../shared/Button/Button';
import styles from './ModalFooter.module.css';
import cn from 'classnames';

export const ModalFooter = ({ className, disabled, message, onClick }) => {
  return (
    <div className={cn(styles._, className)}>
      <span className={styles.info}>{message}</span>
      <Button
        disabled={disabled}
        className={styles.button}
        size='big'
        icon='checkmark'
        onClick={onClick}
      >
        Сохранить
      </Button>
    </div>
  );
};
